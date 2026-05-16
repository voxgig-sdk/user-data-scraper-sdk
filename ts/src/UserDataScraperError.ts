
import { Context } from './Context'


class UserDataScraperError extends Error {

  isUserDataScraperError = true

  sdk = 'UserDataScraper'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  UserDataScraperError
}

