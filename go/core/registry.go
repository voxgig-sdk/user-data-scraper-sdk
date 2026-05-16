package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewUserDataEntityFunc func(client *UserDataScraperSDK, entopts map[string]any) UserDataScraperEntity

