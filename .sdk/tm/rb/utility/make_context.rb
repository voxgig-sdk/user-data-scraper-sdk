# UserDataScraper SDK utility: make_context
require_relative '../core/context'
module UserDataScraperUtilities
  MakeContext = ->(ctxmap, basectx) {
    UserDataScraperContext.new(ctxmap, basectx)
  }
end
