-- ProjectName SDK exists test

local sdk = require("user-data-scraper_sdk")

describe("UserDataScraperSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
