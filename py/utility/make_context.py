# UserDataScraper SDK utility: make_context

from core.context import UserDataScraperContext


def make_context_util(ctxmap, basectx):
    return UserDataScraperContext(ctxmap, basectx)
