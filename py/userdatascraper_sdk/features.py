# UserDataScraper SDK feature factory

from userdatascraper_sdk.feature.base_feature import UserDataScraperBaseFeature
from userdatascraper_sdk.feature.test_feature import UserDataScraperTestFeature


_FEATURES = {
    "base": lambda: UserDataScraperBaseFeature(),
    "test": lambda: UserDataScraperTestFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
