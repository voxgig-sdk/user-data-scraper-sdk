<?php
declare(strict_types=1);

// UserDataScraper SDK utility: prepare_body

class UserDataScraperPrepareBody
{
    public static function call(UserDataScraperContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
