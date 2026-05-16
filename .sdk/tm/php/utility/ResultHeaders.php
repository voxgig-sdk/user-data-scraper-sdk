<?php
declare(strict_types=1);

// UserDataScraper SDK utility: result_headers

class UserDataScraperResultHeaders
{
    public static function call(UserDataScraperContext $ctx): ?UserDataScraperResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
