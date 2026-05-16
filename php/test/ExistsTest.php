<?php
declare(strict_types=1);

// UserDataScraper SDK exists test

require_once __DIR__ . '/../userdatascraper_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = UserDataScraperSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
