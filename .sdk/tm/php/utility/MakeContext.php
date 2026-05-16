<?php
declare(strict_types=1);

// UserDataScraper SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class UserDataScraperMakeContext
{
    public static function call(array $ctxmap, ?UserDataScraperContext $basectx): UserDataScraperContext
    {
        return new UserDataScraperContext($ctxmap, $basectx);
    }
}
