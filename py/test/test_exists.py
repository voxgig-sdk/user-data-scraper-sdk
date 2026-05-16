# ProjectName SDK exists test

import pytest
from userdatascraper_sdk import UserDataScraperSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = UserDataScraperSDK.test(None, None)
        assert testsdk is not None
