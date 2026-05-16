-- UserDataScraper SDK error

local UserDataScraperError = {}
UserDataScraperError.__index = UserDataScraperError


function UserDataScraperError.new(code, msg, ctx)
  local self = setmetatable({}, UserDataScraperError)
  self.is_sdk_error = true
  self.sdk = "UserDataScraper"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function UserDataScraperError:error()
  return self.msg
end


function UserDataScraperError:__tostring()
  return self.msg
end


return UserDataScraperError
