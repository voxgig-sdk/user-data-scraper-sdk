
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { UserDataScraperSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await UserDataScraperSDK.test()
    equal(null !== testsdk, true)
  })

})
