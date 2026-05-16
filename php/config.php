<?php
declare(strict_types=1);

// UserDataScraper SDK configuration

class UserDataScraperConfig
{
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "UserDataScraper",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://leakcheck.net/api",
                "auth" => [
                    "prefix" => "Bearer",
                ],
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "user_data" => [],
                ],
            ],
            "entity" => [
        'user_data' => [
          'fields' => [
            [
              'name' => 'date',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 0,
            ],
            [
              'name' => 'name',
              'req' => true,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 1,
            ],
          ],
          'name' => 'user_data',
          'op' => [
            'list' => [
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 'example',
                        'kind' => 'query',
                        'name' => 'check',
                        'orig' => 'check',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/public',
                  'parts' => [
                    'public',
                  ],
                  'select' => [
                    'exist' => [
                      'check',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'active' => true,
                  'index$' => 0,
                ],
              ],
              'input' => 'data',
              'key$' => 'list',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return UserDataScraperFeatures::make_feature($name);
    }
}
