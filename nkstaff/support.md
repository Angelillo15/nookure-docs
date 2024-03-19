---
title: Supported versions
---
# Choosing compatible server software

Prior to installing Nookure Staff, ensure you select a compatible server version and proxy for multi-server functionality. The minimum requirement is to run Paper 1.16, although it is recommended to use Paper 1.18.x or newer for optimal performance, as older versions are untested.

> Server softwares based on Spigot or Minecraft 1.15.x and older will not be supported due to the lack of [Adventure](https://docs.advntr.dev/) support.

## Supported Minecraft backends


| Version          | Paper (and forks) | Purpur | Spigot |
| ------------------ | ------------------- | -------- | -------- |
| 1.20.x           | ✅                | ✅     | ❌     |
| 1.19.x           | ✅                | ✅     | ❌     |
| 1.18.x           | ✅                | ✅     | ❌     |
| 1.17.x           | ⚠️              | ⚠️   | ❌     |
| 1.16.x           | ⚠️              | ⚠️   | ❌     |
| 1.15.x and older | ❌                | ❌     | ❌     |

- ✅ Should work without any issues.
- ⚠️ Should work, but it may have some issues as it is not fully tested.
- ❌ Not supported because [Adventure](https://docs.advntr.dev/) is not supported.

## Supported proxies


| Proxy                  | Compatible                 |
| ------------------------ | ---------------------------- |
| Velocity               | ✅ (version 3.x and newer) |
| BungeeCord (and forks) | ❌ (see more info below)   |

ℹ️ While the plugin is currently in development, it only supports Velocity proxies. However, starting from version 1.0.0, BungeeCord proxies will also be supported.
