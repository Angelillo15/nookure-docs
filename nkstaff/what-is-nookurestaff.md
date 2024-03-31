---
title: Nookure Staff
---
# Introduction

Nookure Staff is a versatile Minecraft moderation plugin designed to assist staff members on servers of all sizes. It offers useful tools like vanish, staff chat, player freezing, and more, catering to the needs of both small standalone servers and large multi-server or multi-proxy setups.

## Main Features

| Feature       | Explanation                                                                                                                                                                                                                                                                                                                                                                           |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Staff Mode    | This mode restricts staff members from impacting the server state unless they have special permissions, while still granting them access to valuable moderation tools.                                                                                                                                                                                                                |
| Vanish        | The vanish state can be activated by staff members using a command or while in Staff Mode, rendering them invisible to regular players. This feature enables staff to spectate players discreetly, monitor for hacks, and ensure compliance with server rules.                                                                                                                        |
| Freeze        | This tool enables staff members to freeze players and display a message in the chat. It can be particularly useful when staff need to conduct a screenshare on a user to verify if they are cheating.                                                                                                                                                                                 |
| Staff Chat    | The Staff Chat feature provides a private communication channel for online staff members within the Minecraft server, allowing them to interact with each other discreetly without using the public chat.                                                                                                                                                                             |
| Multi Server  | This plugin is not only capable of running on an independent Minecraft server but is also compatible with Proxy synchronization. This compatibility enables simultaneous usage across multiple servers, facilitating communication of certain plugin features between the backend servers.                                                                                            |
| Multi Proxy   | Nookure Staff is compatible with Proxy synchronization for multi-server use and seamlessly operates on multiple proxies with Redis integration. This allows efficient communication and synchronization of plugin functions across different proxy servers, enhancing scalability and performance in complex server setups.                                                           |
| Customization | Nookure Staff offers extensively customizable configuration files that allow for precise adjustments to every aspect of the plugin. Messages, items, and commands can be effortlessly modified within seconds. Additionally, the plugin boasts a variety of features that can be selectively enabled or disabled to tailor the user experience and ensure optimal server performance. |

## Staff Mode

This module is the main part of the plugin, which collects everything in a special mode for the staff members.

While in staff mode, players cannot interact with blocks or entities, and they will be able to toggle vanish easily using the dedicated item in their inventory. They will also be able to fly and they will have invincibility, so they will not be able to die.

The staff mode inventory features several items such as random player teleport, invsee, compass (also known as thru), night vision toggle, freeze, enderchest see, and vanish.

Apart from those predefined items, you will also be able to create new items or customize the predefined ones entirely, from the inventory object to the item name or lore.

## Freeze

This module of the plugin will allow the staff members of your server to prevent any player from moving and display a message in the chat. Furthermore, a private chat will be created between the frozen player and the staff member, so any conversation will remain private.

If a player leaves the server while frozen, the staff will be prompted to automatically execute predefined commands in the config by clicking a message on the chat. In this way, the staff member will be able to do things more easily.

In this video, you can see how the freeze module works, both from the staff and the player's point of view:

<iframe style="width: 100%; height: 390px;"
src="https://www.youtube.com/embed/gTf7XnpiLSo">
</iframe>

## Staff Chat

The staff chat module allows staff members to communicate easily and privately via the Minecraft chat, creating a separate channel where they can send messages with a command or toggle sending messages between the public and private chat.

Apart from that, if Nookure Staff is installed in a network, the staff chat messages will be synchronized across all the servers, and whenever a player sends a message to the staff chat, it will show the server it is in.
