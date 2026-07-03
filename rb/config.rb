# UserDataScraper SDK configuration

module UserDataScraperConfig
  def self.make_config
    {
      "main" => {
        "name" => "UserDataScraper",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://leakcheck.net/api",
        "auth" => {
          "prefix" => "Bearer",
        },
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "user_data" => {},
        },
      },
      "entity" => {
        "user_data" => {
          "fields" => [
            {
              "active" => true,
              "name" => "date",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 0,
            },
            {
              "active" => true,
              "name" => "name",
              "req" => true,
              "type" => "`$STRING`",
              "index$" => 1,
            },
          ],
          "name" => "user_data",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "active" => true,
                  "args" => {
                    "query" => [
                      {
                        "active" => true,
                        "example" => "example",
                        "kind" => "query",
                        "name" => "check",
                        "orig" => "check",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "method" => "GET",
                  "orig" => "/public",
                  "parts" => [
                    "public",
                  ],
                  "select" => {
                    "exist" => [
                      "check",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 0,
                },
              ],
              "key$" => "list",
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    UserDataScraperFeatures.make_feature(name)
  end
end
