<?php
declare(strict_types=1);

// UserDataScraper SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class UserDataScraperFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new UserDataScraperBaseFeature();
            case "test":
                return new UserDataScraperTestFeature();
            default:
                return new UserDataScraperBaseFeature();
        }
    }
}
