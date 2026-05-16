# UserDataScraper SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

UserDataScraperUtility.registrar = ->(u) {
  u.clean = UserDataScraperUtilities::Clean
  u.done = UserDataScraperUtilities::Done
  u.make_error = UserDataScraperUtilities::MakeError
  u.feature_add = UserDataScraperUtilities::FeatureAdd
  u.feature_hook = UserDataScraperUtilities::FeatureHook
  u.feature_init = UserDataScraperUtilities::FeatureInit
  u.fetcher = UserDataScraperUtilities::Fetcher
  u.make_fetch_def = UserDataScraperUtilities::MakeFetchDef
  u.make_context = UserDataScraperUtilities::MakeContext
  u.make_options = UserDataScraperUtilities::MakeOptions
  u.make_request = UserDataScraperUtilities::MakeRequest
  u.make_response = UserDataScraperUtilities::MakeResponse
  u.make_result = UserDataScraperUtilities::MakeResult
  u.make_point = UserDataScraperUtilities::MakePoint
  u.make_spec = UserDataScraperUtilities::MakeSpec
  u.make_url = UserDataScraperUtilities::MakeUrl
  u.param = UserDataScraperUtilities::Param
  u.prepare_auth = UserDataScraperUtilities::PrepareAuth
  u.prepare_body = UserDataScraperUtilities::PrepareBody
  u.prepare_headers = UserDataScraperUtilities::PrepareHeaders
  u.prepare_method = UserDataScraperUtilities::PrepareMethod
  u.prepare_params = UserDataScraperUtilities::PrepareParams
  u.prepare_path = UserDataScraperUtilities::PreparePath
  u.prepare_query = UserDataScraperUtilities::PrepareQuery
  u.result_basic = UserDataScraperUtilities::ResultBasic
  u.result_body = UserDataScraperUtilities::ResultBody
  u.result_headers = UserDataScraperUtilities::ResultHeaders
  u.transform_request = UserDataScraperUtilities::TransformRequest
  u.transform_response = UserDataScraperUtilities::TransformResponse
}
