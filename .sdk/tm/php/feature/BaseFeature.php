<?php
declare(strict_types=1);

// UserDataScraper SDK base feature

class UserDataScraperBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(UserDataScraperContext $ctx, array $options): void {}
    public function PostConstruct(UserDataScraperContext $ctx): void {}
    public function PostConstructEntity(UserDataScraperContext $ctx): void {}
    public function SetData(UserDataScraperContext $ctx): void {}
    public function GetData(UserDataScraperContext $ctx): void {}
    public function GetMatch(UserDataScraperContext $ctx): void {}
    public function SetMatch(UserDataScraperContext $ctx): void {}
    public function PrePoint(UserDataScraperContext $ctx): void {}
    public function PreSpec(UserDataScraperContext $ctx): void {}
    public function PreRequest(UserDataScraperContext $ctx): void {}
    public function PreResponse(UserDataScraperContext $ctx): void {}
    public function PreResult(UserDataScraperContext $ctx): void {}
    public function PreDone(UserDataScraperContext $ctx): void {}
    public function PreUnexpected(UserDataScraperContext $ctx): void {}
}
