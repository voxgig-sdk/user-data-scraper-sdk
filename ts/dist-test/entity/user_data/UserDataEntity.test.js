"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('UserDataEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when USER_DATA_SCRAPER_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('USER_DATA_SCRAPER_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.UserDataScraperSDK.test();
        const ent = testsdk.UserData();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.USER_DATA_SCRAPER_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'user_data.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "date", "req": false, "short": "Date of the data breach or collection in YYYY-MM format", "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "name", "req": true, "short": "Name of the data source", "type": "`$STRING`", "index$": 1 }], "name": "user_data", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "query": [{ "active": true, "example": "example", "kind": "query", "name": "check", "orig": "check", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /public", "json": "{\"operationId\":\"checkUserData\",\"parameters\":[{\"description\":\"The identifier to search for (e.g., email, username, phone number)\",\"example\":\"example\",\"in\":\"query\",\"name\":\"check\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"fields\":[\"password\",\"gender\",\"zip\",\"first_name\",\"ip1\",\"address\",\"origin\",\"middle_name\",\"profile_name\",\"telegram_id\",\"state\",\"ip2\",\"username\",\"dob\",\"last_name\",\"phone\",\"name\",\"ip\",\"city\",\"country\"],\"found\":995,\"sources\":[{\"date\":\"2022-01\",\"name\":\"Twitter.com (scraping data)\"},{\"date\":\"2017-11\",\"name\":\"VimeWorld.ru\"},{\"date\":\"2019-05\",\"name\":\"Canva.com\"}],\"success\":true},\"schema\":{\"properties\":{\"fields\":{\"description\":\"List of available data fields found in the results\",\"items\":{\"enum\":[\"password\",\"gender\",\"zip\",\"first_name\",\"ip1\",\"address\",\"origin\",\"middle_name\",\"profile_name\",\"telegram_id\",\"state\",\"ip2\",\"username\",\"dob\",\"last_name\",\"phone\",\"name\",\"ip\",\"city\",\"country\"],\"type\":\"string\"},\"type\":\"array\"},\"found\":{\"description\":\"Number of records found matching the query\",\"type\":\"integer\"},\"sources\":{\"description\":\"List of data sources where the information was found\",\"items\":{\"properties\":{\"date\":{\"description\":\"Date of the data breach or collection in YYYY-MM format\",\"pattern\":\"^\\\\d{4}-\\\\d{2}$\",\"type\":\"string\"},\"name\":{\"description\":\"Name of the data source\",\"type\":\"string\"}},\"required\":[\"name\"],\"type\":\"object\"},\"type\":\"array\"},\"success\":{\"description\":\"Indicates if the request was successful\",\"type\":\"boolean\"}},\"required\":[\"success\",\"found\",\"fields\",\"sources\"],\"type\":\"object\"}}},\"description\":\"Successful response with user data\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message describing what went wrong\",\"type\":\"string\"},\"success\":{\"example\":false,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Bad request - Invalid or missing parameters\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"fields\":{\"example\":[],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"found\":{\"example\":0,\"type\":\"integer\"},\"sources\":{\"example\":[],\"items\":{\"type\":\"object\"},\"type\":\"array\"},\"success\":{\"example\":true,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"No data found for the provided query\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"success\":{\"example\":false,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/public", "segments": [{ "lit": "public" }], "select": { "exist": ["check"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "user_data", "name__orig": "user_data", "Name": "UserData", "name_": "user_data", "name-": "user-data", "NAME": "USER_DATA", "index$": 0 }, { "active": true, "entity": "user_data", "key$": "BasicUserDataFlow", "kind": "basic", "name": "BasicUserDataFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "user_data_ref01" } }], "index$": 0 }] }, 'UserData');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let user_data_ref01_data = Object.values(setup.data.existing.user_data)[0];
        // LIST
        const user_data_ref01_ent = client.UserData();
        const user_data_ref01_match = {};
        const user_data_ref01_list = (await user_data_ref01_ent.list(user_data_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/user_data/UserDataTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.UserDataScraperSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['user_data01', 'user_data02', 'user_data03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'USER_DATA_SCRAPER_TEST_USER_DATA_ENTID': idmap,
        'USER_DATA_SCRAPER_TEST_LIVE': 'FALSE',
        'USER_DATA_SCRAPER_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['USER_DATA_SCRAPER_TEST_USER_DATA_ENTID'];
    const live = 'TRUE' === env.USER_DATA_SCRAPER_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['USER_DATA_SCRAPER_TEST_USER_DATA_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.UserDataScraperSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
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
    };
    return setup;
}
//# sourceMappingURL=UserDataEntity.test.js.map