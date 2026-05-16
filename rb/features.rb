# UserDataScraper SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module UserDataScraperFeatures
  def self.make_feature(name)
    case name
    when "base"
      UserDataScraperBaseFeature.new
    when "test"
      UserDataScraperTestFeature.new
    else
      UserDataScraperBaseFeature.new
    end
  end
end
