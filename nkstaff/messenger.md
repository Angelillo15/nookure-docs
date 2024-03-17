# What messenger is the best for you?

We have 3 types of messenger

| Type           | Only one server | Network | MultiProxy Network |
| -------------- | --------------- | ------- | ------------------ |
| None           | ✅              | ❌      | ❌                 |
| Plugin Message | ❌              | ✅      | ❌                 |
| Redis          | no sense        | ✅      | ✅                 |

## None

This is the best when you don't have a network, or you have a network and you don't want to sync the data between the servers (rare case)

## Plugin Message

This is the best when you have a network and you want to sync the data between the servers, you only have 1 proxy and you don't have a redis server.

![Plugin Message](/pluginmessage.svg)

## Redis

This is best option in Network cases and MultiProxy Network cases, because this doesn't have to use the Player Connection to send the data

![Redis](/redis.svg)
