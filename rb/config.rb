# UserDataScraper SDK configuration

module UserDataScraperConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "UserDataScraper",
        "slug" => "user-data-scraper",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
          "transport" => "base",
        },
      },
      "options" => {
        "base" => "https://leakcheck.net/api",
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
              "name" => "date",
              "short" => "Date of the data breach or collection in YYYY-MM format",
              "type" => "`$STRING`",
            },
            {
              "name" => "name",
              "req" => true,
              "short" => "Name of the data source",
              "type" => "`$STRING`",
            },
          ],
          "name" => "user_data",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => "example",
                        "kind" => "query",
                        "name" => "check",
                        "orig" => "check",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/public",
                  "segments" => [
                    {
                      "lit" => "public",
                    },
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
                  "parts" => [
                    "public",
                  ],
                },
              ],
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
