# UserDataScraper SDK feature factory

from userdatascraper_sdk.feature.base_feature import UserDataScraperBaseFeature
from userdatascraper_sdk.feature.test_feature import UserDataScraperTestFeature


def _make_feature(name):
    features = {
        "base": lambda: UserDataScraperBaseFeature(),
        "test": lambda: UserDataScraperTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
