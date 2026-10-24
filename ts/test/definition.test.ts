import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "user_data",
    "accessor": "UserData",
    "op": "list",
    "method": "GET",
    "path": "/public",
    "args": [],
    "select": {
      "check": "example"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "check"
    ],
    "queryArgs": [
      {
        "name": "check",
        "wire": "check"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "found": 995,
      "fields": [
        "password",
        "gender",
        "zip"
      ],
      "sources": [
        {
          "name": "Twitter.com (scraping data)",
          "date": "2022-01"
        },
        {
          "name": "VimeWorld.ru",
          "date": "2017-11"
        },
        {
          "name": "Canva.com",
          "date": "2019-05"
        }
      ]
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
