---
title: Messenger
---
# Which messenger is the best for you?

Nookure Staff can use 3 different types of messenger:

| Type           | Only one server | Network | MultiProxy Network |
| -------------- | --------------- | ------- | ------------------ |
| None           | ✅              | ❌      | ❌                 |
| Plugin Message | ❌              | ✅      | ❌                 |
| Redis          | no sense        | ✅      | ✅                 |

## None

This is the best option when you don't have a network, or you have a network and you don't want to sync the data between the servers (rare case)

## Plugin Message

This is the best when you have a network and you want to sync the data between the servers, you have a single proxy and you don't have a redis server.

![Plugin Message](/pluginmessage.svg)

## Redis

This is best option in networks and MultiProxy networks cases, as this doesn't use the player connection to send the data across servers.

![Redis](/redis.svg)
