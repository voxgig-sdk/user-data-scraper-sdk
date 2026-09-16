

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { UserDataScraperSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('UserDataEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when USER_DATA_SCRAPER_TEST_LIVE=TRUE.
  afterEach(liveDelay('USER_DATA_SCRAPER_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = UserDataScraperSDK.test()
    const ent = testsdk.UserData()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.USER_DATA_SCRAPER_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'user_data.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"date","req":false,"short":"Date of the data breach or collection in YYYY-MM format","type":"`$STRING`","index$":0},{"active":true,"name":"name","req":true,"short":"Name of the data source","type":"`$STRING`","index$":1}],"name":"user_data","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"example":"example","kind":"query","name":"check","orig":"check","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /public","json":"{\"operationId\":\"checkUserData\",\"parameters\":[{\"description\":\"The identifier to search for (e.g., email, username, phone number)\",\"example\":\"example\",\"in\":\"query\",\"name\":\"check\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"fields\":[\"password\",\"gender\",\"zip\",\"first_name\",\"ip1\",\"address\",\"origin\",\"middle_name\",\"profile_name\",\"telegram_id\",\"state\",\"ip2\",\"username\",\"dob\",\"last_name\",\"phone\",\"name\",\"ip\",\"city\",\"country\"],\"found\":995,\"sources\":[{\"date\":\"2022-01\",\"name\":\"Twitter.com (scraping data)\"},{\"date\":\"2017-11\",\"name\":\"VimeWorld.ru\"},{\"date\":\"2019-05\",\"name\":\"Canva.com\"}],\"success\":true},\"schema\":{\"properties\":{\"fields\":{\"description\":\"List of available data fields found in the results\",\"items\":{\"enum\":[\"password\",\"gender\",\"zip\",\"first_name\",\"ip1\",\"address\",\"origin\",\"middle_name\",\"profile_name\",\"telegram_id\",\"state\",\"ip2\",\"username\",\"dob\",\"last_name\",\"phone\",\"name\",\"ip\",\"city\",\"country\"],\"type\":\"string\"},\"type\":\"array\"},\"found\":{\"description\":\"Number of records found matching the query\",\"type\":\"integer\"},\"sources\":{\"description\":\"List of data sources where the information was found\",\"items\":{\"properties\":{\"date\":{\"description\":\"Date of the data breach or collection in YYYY-MM format\",\"pattern\":\"^\\\\d{4}-\\\\d{2}$\",\"type\":\"string\"},\"name\":{\"description\":\"Name of the data source\",\"type\":\"string\"}},\"required\":[\"name\"],\"type\":\"object\"},\"type\":\"array\"},\"success\":{\"description\":\"Indicates if the request was successful\",\"type\":\"boolean\"}},\"required\":[\"success\",\"found\",\"fields\",\"sources\"],\"type\":\"object\"}}},\"description\":\"Successful response with user data\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message describing what went wrong\",\"type\":\"string\"},\"success\":{\"example\":false,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Bad request - Invalid or missing parameters\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"fields\":{\"example\":[],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"found\":{\"example\":0,\"type\":\"integer\"},\"sources\":{\"example\":[],\"items\":{\"type\":\"object\"},\"type\":\"array\"},\"success\":{\"example\":true,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"No data found for the provided query\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"success\":{\"example\":false,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/public","segments":[{"lit":"public"}],"select":{"exist":["check"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"user_data","name__orig":"user_data","Name":"UserData","name_":"user_data","name-":"user-data","NAME":"USER_DATA","index$":0}, {"active":true,"entity":"user_data","key$":"BasicUserDataFlow","kind":"basic","name":"BasicUserDataFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"user_data_ref01"}}],"index$":0}]}, 'UserData')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let user_data_ref01_data = Object.values(setup.data.existing.user_data)[0] as any

    // LIST
    const user_data_ref01_ent = client.UserData()
    const user_data_ref01_match: any = {}

    const user_data_ref01_list = (await user_data_ref01_ent.list(user_data_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/user_data/UserDataTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = UserDataScraperSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['user_data01','user_data02','user_data03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'USER_DATA_SCRAPER_TEST_USER_DATA_ENTID': idmap,
    'USER_DATA_SCRAPER_TEST_LIVE': 'FALSE',
    'USER_DATA_SCRAPER_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['USER_DATA_SCRAPER_TEST_USER_DATA_ENTID']

  const live = 'TRUE' === env.USER_DATA_SCRAPER_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['USER_DATA_SCRAPER_TEST_USER_DATA_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new UserDataScraperSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.USER_DATA_SCRAPER_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
