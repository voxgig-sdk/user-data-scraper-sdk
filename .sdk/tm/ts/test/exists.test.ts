
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { UserDataScraperSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = UserDataScraperSDK.test()
    equal(testsdk instanceof UserDataScraperSDK, true,
      'UserDataScraperSDK.test() must return a client synchronously')
  })

})
