package voxgiguserdatascrapersdk

import (
	"github.com/voxgig-sdk/user-data-scraper-sdk/go/core"
	"github.com/voxgig-sdk/user-data-scraper-sdk/go/entity"
	"github.com/voxgig-sdk/user-data-scraper-sdk/go/feature"
	_ "github.com/voxgig-sdk/user-data-scraper-sdk/go/utility"
)

// Type aliases preserve external API.
type UserDataScraperSDK = core.UserDataScraperSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type UserDataScraperEntity = core.UserDataScraperEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type UserDataScraperError = core.UserDataScraperError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewUserDataEntityFunc = func(client *core.UserDataScraperSDK, entopts map[string]any) core.UserDataScraperEntity {
		return entity.NewUserDataEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewUserDataScraperSDK = core.NewUserDataScraperSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
