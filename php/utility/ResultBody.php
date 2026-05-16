<?php
declare(strict_types=1);

// UserDataScraper SDK utility: result_body

class UserDataScraperResultBody
{
    public static function call(UserDataScraperContext $ctx): ?UserDataScraperResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
