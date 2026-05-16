package = "voxgig-sdk-user-data-scraper"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/user-data-scraper-sdk.git"
}
description = {
  summary = "UserDataScraper SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["user-data-scraper_sdk"] = "user-data-scraper_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
