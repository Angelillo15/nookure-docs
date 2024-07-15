---
title: Supported versions
---
# Choosing compatible server software

Prior to installing Nookure Staff, ensure you select a compatible server version and proxy for multi-server functionality. The minimum requirement is to run Paper 1.16, although it is recommended to use Paper 1.18.x or newer for optimal performance, as older versions are untested.

> Server softwares based on Spigot or Minecraft 1.15.x and older will not be supported due to the lack of [Adventure](https://docs.advntr.dev/) support.

## Supported Minecraft backends


| Version          | Paper (and forks) | Purpur | Spigot | PufferFish |
| ------------------ | ------------------- | -------- | -------- | ------------ |
| 1.21.x           | ✅                | ✅     | ⚠️   | ✅         |
| 1.20.x           | ✅                | ✅     | ⚠️   | ✅         |
| 1.19.4           | ✅                | ⚠️   | ❌     | ⚠️       |
| 1.18.x           | ⚠️              | ⚠️   | ❌     | ⚠️       |
| 1.17.x           | ⚠️              | ⚠️   | ❌     | ⚠️       |
| 1.16.x           | ⚠️              | ⚠️   | ❌     | ⚠️       |
| 1.15.x and older | ❌                | ❌     | ❌     | ❌         |

- ✅ Should work without any issues.
- ⚠️ Should work, but it may have some issues as it is not fully tested.
- ❌ Not supported because [Adventure](https://docs.advntr.dev/) is not supported or some other issues.

## Supported proxies


| Proxy                  | Compatible                 |
| ------------------------ | ---------------------------- |
| Velocity               | ✅✅ (version 3.x and newer) |
| BungeeCord (and forks) | ✅ (see more info below  |

> [!WARNING]
> Velocity is significantly more modern than Waterfall and Bungeecord, and can be up to 8 times faster. For a network with hundreds or thousands of players, this makes a huge difference on CPU and memory load, allowing more CPU time to be spent on serving players.
> Thats why we focus on Velocity, but we also support BungeeCord.