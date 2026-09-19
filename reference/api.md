---
title: "REST API"
description: "The HTTP API behind the console, and how to authenticate against it."
status: draft
---

Everything the console does, it does through this API. Interactive documentation ships
with the cluster.

## Interactive documentation

```
https://<console>/swagger-ui.html
```

The OpenAPI document itself:

```
https://<console>/v3/api-docs
```

## Authentication

<!-- TODO: fill in —
- bearer tokens: obtaining one, lifetime, refreshing
- API keys via the X-API-Key header
- which to use for scripts
-->

## Conventions

<!-- TODO: fill in —
- long operations return 202 with a task — how to follow one
- the error shape (RFC 7807 problem documents)
- pagination and filtering
-->

## Rate limiting

<!-- TODO: fill in —
- the limits that apply, and the response when you hit one
-->

## Endpoint groups

<!-- TODO: fill in —
- a table of the main groups and what they cover
-->
