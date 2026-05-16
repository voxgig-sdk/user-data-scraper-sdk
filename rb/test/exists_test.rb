# UserDataScraper SDK exists test

require "minitest/autorun"
require_relative "../UserDataScraper_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = UserDataScraperSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
