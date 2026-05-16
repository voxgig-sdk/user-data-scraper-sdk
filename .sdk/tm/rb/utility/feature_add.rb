# UserDataScraper SDK utility: feature_add
module UserDataScraperUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
