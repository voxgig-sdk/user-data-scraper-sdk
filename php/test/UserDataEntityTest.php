<?php
declare(strict_types=1);

// UserData entity test

require_once __DIR__ . '/../userdatascraper_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class UserDataEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = UserDataScraperSDK::test(null, null);
        $ent = $testsdk->UserData(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = user_data_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["list"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "user_data." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set USERDATASCRAPER_TEST_USER_DATA_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $user_data_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.user_data")));
        $user_data_ref01_data = null;
        if (count($user_data_ref01_data_raw) > 0) {
            $user_data_ref01_data = Helpers::to_map($user_data_ref01_data_raw[0][1]);
        }

        // LIST
        $user_data_ref01_ent = $client->UserData(null);
        $user_data_ref01_match = [];

        $user_data_ref01_list_result = $user_data_ref01_ent->list($user_data_ref01_match, null);
        $this->assertIsArray($user_data_ref01_list_result);

    }
}

function user_data_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/user_data/UserDataTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = UserDataScraperSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["user_data01", "user_data02", "user_data03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("USERDATASCRAPER_TEST_USER_DATA_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "USERDATASCRAPER_TEST_USER_DATA_ENTID" => $idmap,
        "USERDATASCRAPER_TEST_LIVE" => "FALSE",
        "USERDATASCRAPER_TEST_EXPLAIN" => "FALSE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["USERDATASCRAPER_TEST_USER_DATA_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["USERDATASCRAPER_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            [
            ],
            $extra ?? [],
        ]);
        $client = new UserDataScraperSDK(Helpers::to_map($merged_opts));
    }

    $live = $env["USERDATASCRAPER_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["USERDATASCRAPER_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
