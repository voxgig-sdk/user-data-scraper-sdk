# UserDataScraper SDK

Check whether an email address appears in known public data breaches via LeakCheck

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About User Data Scraper

[LeakCheck](https://leakcheck.io/) is a data-breach search service that has been running since 2018. It maintains an index of credentials and personal data extracted from publicly disclosed breaches and lets you check whether a given identifier (typically an email address) appears in any of them.

This SDK wraps the lightweight public lookup endpoint exposed at `https://leakcheck.net/api/public`, which accepts an email address via the `check` query parameter and returns a JSON response indicating whether the address was found in known breach sources.

What you can do with this API:

- Submit an email address and learn whether it is present in LeakCheck's breach index.
- Receive minimal breach metadata associated with that address, when available.

Operational notes:

- The public endpoint does not require an API key, but heavier or commercial use (bulk lookups, username / keyword / password search, reverse search) requires a paid LeakCheck subscription.
- LeakCheck states that it does not log user searches and serves traffic over TLS.
- CORS is not enabled on the public endpoint, so requests are best made from a server-side environment.

## Try it

**TypeScript**
```bash
npm install user-data-scraper
```

**Python**
```bash
pip install user-data-scraper-sdk
```

**PHP**
```bash
composer require voxgig/user-data-scraper-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/user-data-scraper-sdk/go
```

**Ruby**
```bash
gem install user-data-scraper-sdk
```

**Lua**
```bash
luarocks install user-data-scraper-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { UserDataScraperSDK } from 'user-data-scraper'

const client = new UserDataScraperSDK({})

// List all userdatas
const userdatas = await client.UserData().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o user-data-scraper-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "user-data-scraper": {
      "command": "/abs/path/to/user-data-scraper-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **UserData** | Breach-lookup results for a single identifier (typically an email address) checked against LeakCheck's index, returned by `GET /public?check={email}`. | `/public` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from userdatascraper_sdk import UserDataScraperSDK

client = UserDataScraperSDK({})

# List all userdatas
userdatas, err = client.UserData(None).list(None, None)
```

### PHP

```php
<?php
require_once 'userdatascraper_sdk.php';

$client = new UserDataScraperSDK([]);

// List all userdatas
[$userdatas, $err] = $client->UserData(null)->list(null, null);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/user-data-scraper-sdk/go"

client := sdk.NewUserDataScraperSDK(map[string]any{})

// List all userdatas
userdatas, err := client.UserData(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "UserDataScraper_sdk"

client = UserDataScraperSDK.new({})

# List all userdatas
userdatas, err = client.UserData(nil).list(nil, nil)
```

### Lua

```lua
local sdk = require("user-data-scraper_sdk")

local client = sdk.new({})

-- List all userdatas
local userdatas, err = client:UserData(nil):list(nil, nil)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = UserDataScraperSDK.test()
const result = await client.UserData().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = UserDataScraperSDK.test(None, None)
result, err = client.UserData(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = UserDataScraperSDK::test(null, null);
[$result, $err] = $client->UserData(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.UserData(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = UserDataScraperSDK.test(nil, nil)
result, err = client.UserData(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:UserData(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the User Data Scraper

- Upstream: [https://leakcheck.io/](https://leakcheck.io/)
- API docs: [https://leakcheck.net/api](https://leakcheck.net/api)

- Operated by [LeakCheck](https://leakcheck.io/) as a proprietary commercial service.
- The public endpoint at `https://leakcheck.net/api/public` returns limited breach metadata and is intended for casual / individual lookups.
- Full programmatic access, bulk lookups, and richer breach data require a paid LeakCheck subscription.
- Treat returned data as sensitive; do not redistribute breach indicators without considering applicable privacy / data-protection law.

---

Generated from the User Data Scraper OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
