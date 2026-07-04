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
              'active' => true,
              'name' => 'date',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'name',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
          ],
          'name' => 'user_data',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'example' => 'example',
                        'kind' => 'query',
                        'name' => 'check',
                        'orig' => 'check',
                        'reqd' => true,
                        'type' => '`$STRING`',
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
                  'index$' => 0,
                ],
              ],
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
