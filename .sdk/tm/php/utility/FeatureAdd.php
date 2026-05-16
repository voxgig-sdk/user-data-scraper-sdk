<?php
declare(strict_types=1);

// UserDataScraper SDK utility: feature_add

class UserDataScraperFeatureAdd
{
    public static function call(UserDataScraperContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
