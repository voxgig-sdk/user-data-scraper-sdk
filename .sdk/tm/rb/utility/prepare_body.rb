# UserDataScraper SDK utility: prepare_body
require_relative 'media'
module UserDataScraperUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return UserDataScraperUtilities.raw_body(ctx.reqdata) if UserDataScraperUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
