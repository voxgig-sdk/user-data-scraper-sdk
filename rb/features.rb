# UserDataScraper SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module UserDataScraperFeatures
  def self.make_feature(name)
    case name
    when "base"
      UserDataScraperBaseFeature.new
    when "ratelimit"
      UserDataScraperRatelimitFeature.new
    when "retry"
      UserDataScraperRetryFeature.new
    when "test"
      UserDataScraperTestFeature.new
    when "timeout"
      UserDataScraperTimeoutFeature.new
    else
      UserDataScraperBaseFeature.new
    end
  end
end
