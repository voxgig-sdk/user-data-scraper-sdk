<?php
declare(strict_types=1);

// UserDataScraper SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

UserDataScraperUtility::setRegistrar(function (UserDataScraperUtility $u): void {
    $u->clean = [UserDataScraperClean::class, 'call'];
    $u->done = [UserDataScraperDone::class, 'call'];
    $u->make_error = [UserDataScraperMakeError::class, 'call'];
    $u->feature_add = [UserDataScraperFeatureAdd::class, 'call'];
    $u->feature_hook = [UserDataScraperFeatureHook::class, 'call'];
    $u->feature_init = [UserDataScraperFeatureInit::class, 'call'];
    $u->fetcher = [UserDataScraperFetcher::class, 'call'];
    $u->make_fetch_def = [UserDataScraperMakeFetchDef::class, 'call'];
    $u->make_context = [UserDataScraperMakeContext::class, 'call'];
    $u->make_options = [UserDataScraperMakeOptions::class, 'call'];
    $u->make_request = [UserDataScraperMakeRequest::class, 'call'];
    $u->make_response = [UserDataScraperMakeResponse::class, 'call'];
    $u->make_result = [UserDataScraperMakeResult::class, 'call'];
    $u->make_point = [UserDataScraperMakePoint::class, 'call'];
    $u->make_spec = [UserDataScraperMakeSpec::class, 'call'];
    $u->make_url = [UserDataScraperMakeUrl::class, 'call'];
    $u->param = [UserDataScraperParam::class, 'call'];
    $u->prepare_auth = [UserDataScraperPrepareAuth::class, 'call'];
    $u->prepare_body = [UserDataScraperPrepareBody::class, 'call'];
    $u->prepare_headers = [UserDataScraperPrepareHeaders::class, 'call'];
    $u->prepare_method = [UserDataScraperPrepareMethod::class, 'call'];
    $u->prepare_params = [UserDataScraperPrepareParams::class, 'call'];
    $u->prepare_path = [UserDataScraperPreparePath::class, 'call'];
    $u->prepare_query = [UserDataScraperPrepareQuery::class, 'call'];
    $u->result_basic = [UserDataScraperResultBasic::class, 'call'];
    $u->result_body = [UserDataScraperResultBody::class, 'call'];
    $u->result_headers = [UserDataScraperResultHeaders::class, 'call'];
    $u->transform_request = [UserDataScraperTransformRequest::class, 'call'];
    $u->transform_response = [UserDataScraperTransformResponse::class, 'call'];
});
