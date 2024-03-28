# Modifying the configurations

Nookure Staff features a extensive configuration to allow users modify almost every aspect of the plugin. To do so, you only have to navigate to the plugin directory at plugins/NookureStaff/ where you will be able to modify each file. Each part is commented to understand how you can modify each setting.

## config.yml

These are the general options, where you will be able to change the database type, activate or deactivate separate modules and change some aspects of the staff mode and freeze modules.

::: details config.yml

```yaml
# ▐ ▄             ▄ •▄ ▄• ▄▌▄▄▄  ▄▄▄ .    .▄▄ · ▄▄▄▄▄ ▄▄▄· ·▄▄▄·▄▄▄
# •█▌▐█▪     ▪     █▌▄▌▪█▪██▌▀▄ █·▀▄.▀·    ▐█ ▀. •██  ▐█ ▀█ ▐▄▄·▐▄▄·
# ▐█▐▐▌ ▄█▀▄  ▄█▀▄ ▐▀▀▄·█▌▐█▌▐▀▀▄ ▐▀▀▪▄    ▄▀▀▀█▄ ▐█.▪▄█▀▀█ ██▪ ██▪
# ██▐█▌▐█▌.▐▌▐█▌.▐▌▐█.█▌▐█▄█▌▐█•█▌▐█▄▄▌    ▐█▄▪▐█ ▐█▌·▐█ ▪▐▌██▌.██▌.
# ▀▀ █▪ ▀█▄▀▪ ▀█▄▀▪·▀  ▀ ▀▀▀ .▀  ▀ ▀▀▀      ▀▀▀▀  ▀▀▀  ▀  ▀ ▀▀▀ ▀▀▀
# 
# Remember to join my Discord server if you need help:
# https://discord.nookure.com/

# Enable or disable debug mode.
# This will print out more information to the console.
# It's recommended to find bugs.
debug: false

# The name of the server.
# This will be used in the messages or identifiers.
server-name: Server 1
database:
  # The type of the database.
  # This can be either MYSQL or SQLITE.
  # For MariaDB, use MYSQL driver.
  # ¿When use MYSQL or SQLITE?
  # - If you have more than 1 server, use MYSQL.
  # - If you have only 1 server, but you want
  # to be able to scale, use MYSQL.
  type: SQLITE

  # The host of the database.
  # This can be an IP address or a domain name.
  # ┏━━━━━━ Pterodactyl Users ━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
  # ┃If you are using pterodactyl, I recommend using the ┃
  # ┃docker bridge IP address, smth like 172.x.x.x       ┃
  # ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
  host: localhost

  # The port of the database.
  # This is usually 3306 for MySQL
  port: 3306

  # The username of the database.
  username: nookure

  # The password of the database.
  password: yourSecurePassword

  # The name of the database.
  database: database

# Here you can enable or disable any part of the plugin.
# If you disable a module, the commands and the features
# of that module will be disabled.
modules:
  # Enable or disable the staff mode.
  # This include /staff command and the staff
  # vault.
  staff-mode: true

  # Enable or disable the freeze module.
  # This include /freeze command
  freeze: true

  # Enable or disable the vanish module.
  # This include /vanish command and the plugin vanish
  # on StaffMode.
  vanish: true

  # Enable or disable the invsee module.
  # This include /invsee command
  invsee: true

  # Enable or disable the StaffChat module.
  # This include /staffchat command and
  # the staff chat prefix.
  staff-chat: true

# Here you can configure some settings for the staffmode
staff-mode:
  # If true when a chest is opened by a staff member, the chest will not make any sound
  # or animation.
  silent-chest-open: true

  # If true when a staff disables staff mode, they will be teleported to their previous location.
  # This is useful for preventing staff members abusing the staff mode to teleport to a player or
  # fly to a location.
  teleport-to-previous-location: true

  # Enable or disable night vision when the player enters the staff mode.
  night-vision: true

  # Enable or disable custom potion effects when the player enters the staff mode.
  custom-potion-effects: false

  # Potion effects to add when the player enters the staff mode.
  # Format: "effect:level:duration"
  potion-effects:
    - speed:1:999999
    - jump:1:999999

# Here you can configure some settings for the freeze module
freeze:
  #   Execute a command when the player is frozen and he or she
  #   exits of the servers.
  execute-command-on-exit: true

  #   Ask the player to execute a command when he or she exits
  #   of the server.
  ask-to-execute-command-on-exit: true

  # Enable or disable the chat freeze.
  # This will prevent the player from sending messages in the chat
  # and he will be able to chat with the staff members only.
  freeze-chat: true

  # The value is with the following format: 1h 1m 1s
  # Set "false" to disable the freeze timer.
  # If the timer gets to 0, the player will be banned.
  freeze-timer: 5m

  # The commands to execute when the player is banned.
  # You can use the following placeholders:
  # ↳ {player} - Player name
  # ↳ {staff} - Staff member name
  # Use the proxy: prefix to execute a command in the proxy.
  commands:
    - ban {player} <red>You have been baned for ss evading

```
:::

## messenger.yml

Here you can choose which messager you want to use. See [Choosing a messenger](https://nookure-docs.pages.dev/nkstaff/messenger.html) to understand how to configurate this file.
::: details messenger.yml
```yaml
# ▐ ▄             ▄ •▄ ▄• ▄▌▄▄▄  ▄▄▄ .    .▄▄ · ▄▄▄▄▄ ▄▄▄· ·▄▄▄·▄▄▄
# •█▌▐█▪     ▪     █▌▄▌▪█▪██▌▀▄ █·▀▄.▀·    ▐█ ▀. •██  ▐█ ▀█ ▐▄▄·▐▄▄·
# ▐█▐▐▌ ▄█▀▄  ▄█▀▄ ▐▀▀▄·█▌▐█▌▐▀▀▄ ▐▀▀▪▄    ▄▀▀▀█▄ ▐█.▪▄█▀▀█ ██▪ ██▪
# ██▐█▌▐█▌.▐▌▐█▌.▐▌▐█.█▌▐█▄█▌▐█•█▌▐█▄▄▌    ▐█▄▪▐█ ▐█▌·▐█ ▪▐▌██▌.██▌.
# ▀▀ █▪ ▀█▄▀▪ ▀█▄▀▪·▀  ▀ ▀▀▀ .▀  ▀ ▀▀▀      ▀▀▀▀  ▀▀▀  ▀  ▀ ▀▀▀ ▀▀▀
# 
# Remember to join my Discord server if you need help:
# https://discord.nookure.com/

# The type of messenger to use.
# Here are the options:
# - REDIS: Use Redis to send messages between servers (recommended)
# - PM: Use plugin messages to send messages between servers this
# will only work if all the servers are under the same proxy and
# in the proxy is installed the bridge plugin.
# - NONE: Disable the sync, useful when you don't have a network
# and you only have 1 server.
type: NONE

# The configuration for the Redis messenger.
redis:
  # The address of the Redis server.
  # This should be in the format of `host`.
  # For example, `localhost`.
  address: localhost

  # The port of the Redis server.
  # This should be a number between 1 and 65535.
  port: 6379

  # The password to use when connecting to the Redis server.
  # If the server does not require a password, leave this empty.
  password: ''

  # The database to use when connecting to the Redis server.
  # This should be a number between 0 and 15.
  database: 0

  # The pool size to use when connecting to the Redis server.
  pool-size: 10

  # The timeout to use when connecting to the Redis server.
  timeout: 2000

```
:::

## messages.yml

This file contains every message of the plugin. You can modify the language, colors and structure in any way you want. [MiniMessage](https://webui.advntr.dev/) is used, but you can also use legacy color codes.

::: details messages.yml
```yaml
# ▐ ▄             ▄ •▄ ▄• ▄▌▄▄▄  ▄▄▄ .    .▄▄ · ▄▄▄▄▄ ▄▄▄· ·▄▄▄·▄▄▄
# •█▌▐█▪     ▪     █▌▄▌▪█▪██▌▀▄ █·▀▄.▀·    ▐█ ▀. •██  ▐█ ▀█ ▐▄▄·▐▄▄·
# ▐█▐▐▌ ▄█▀▄  ▄█▀▄ ▐▀▀▄·█▌▐█▌▐▀▀▄ ▐▀▀▪▄    ▄▀▀▀█▄ ▐█.▪▄█▀▀█ ██▪ ██▪
# ██▐█▌▐█▌.▐▌▐█▌.▐▌▐█.█▌▐█▄█▌▐█•█▌▐█▄▄▌    ▐█▄▪▐█ ▐█▌·▐█ ▪▐▌██▌.██▌.
# ▀▀ █▪ ▀█▄▀▪ ▀█▄▀▪·▀  ▀ ▀▀▀ .▀  ▀ ▀▀▀      ▀▀▀▀  ▀▀▀  ▀  ▀ ▀▀▀ ▀▀▀
# 
# Remember to join my Discord server if you need help:
# https://discord.nookure.com/

# The prefix for all staff messages.
# If you want to use the prefix in a message, use {prefix}.
prefix: <b><red>Staff</red> <gray>»</gray></b>

# Reload message
reload: '{prefix} <gray>Configuration reloaded, mayor changes may not take effect until the server is restarted.'
staff-mode:
  # Message sent to the player when the staff mode is toggled on.
  toggled-on: '{prefix} <gray>Staff mode has been toggled <green>on</green>.'

  # Message sent to the player when the staff mode is toggled off.
  toggled-off: '{prefix} <gray>Staff mode has been toggled <red>off</red>.'

  # Message sent to others when a player toggles staff mode on.
  toggled-on-others: '{prefix} <red>{player}</red> <gray>has toggled staff mode <green>on</green>.'

  # Message sent to others when a player toggles staff mode off.
  toggled-off-others: '{prefix} <red>{player}</red> <gray>has toggled staff mode <red>off</red>.'

  # Message sent to the player when there are no players online.
  no-players-online: '{prefix} <red>There are no players online.'

  # Message sent to the player when teleporting to another player.
  teleporting-to: '{prefix} <gray>Teleporting to <red>{player}</red>.'
vanish:
  # Message sent to the player when the vanish is toggled on.
  vanish-enabled: '{prefix} <gray>Vanish has been toggled <green>on</green>.'

  # Message sent to the player when the vanish is toggled off.
  vanish-disabled: '{prefix} <gray>Vanish has been toggled <red>off</red>.'
freeze:
  # The message to send to the player when he or she is frozen.
  frozen-message: <bold><dark_aqua>Freeze <dark_gray>»</bold> <gray>You have been <green>frozen</green>.</gray>

  # The message to send to the player when he or she is unfrozen.
  unfrozen-message: <bold><dark_aqua>Freeze <dark_gray>»</bold> <gray>You have been <green>unfrozen</green>.</gray>

  # The message to send to the staff member when the player is frozen.
  staff-frozen-message: <bold><dark_aqua>Freeze <dark_gray>»</bold> <gray>{player} has been <green>frozen</green> by <green>{staff}</green>.</gray>

  # The message to send to the staff member when the player is unfrozen.
  staff-unfrozen-message: <bold><dark_aqua>Freeze <dark_gray>»</bold> <gray>{player} has been <green>unfrozen</green> by <green>{staff}</green>.</gray>

  # The message to repeat in the chat when the player is frozen.
  chat-frozen-message: |2
        &7████&c█&7████
        &7███&c█&6█&c█&7███
        &7██&c█&6█&0█&6█&c█&7██
        &7██&c█&6█&0█&6█&c█&7██   You have been frozen!
        &7█&c█&6██&0█&6██&c█&7█  Join our discord server:
        &7█&c█&6█████&c█&7█  http:/discord.example.com
        &c█&6███&0█&6███&c█  You have {time} to join.
        &c█████████

  # This message will be sent to the staff when the player who he froze leaves the server.
  confirm-punish-message: |
    <gray>The <green>player</green> <red>{player}</red> has left the server while he was freezed
    Do you want to execute the commands specified when a player leaves ? <hover:show_text:'Forgive the player'><red><click:run_command:'/freeze /remove {player}'>[x]</click></red></hover> <click:run_command:/freeze /exec {player}><green><hover:show_text:'Punish that player'>[✔]</hover></green> </click>

  # Message sent when a staff tries to freeze a player with nookure.staff.freeze.bypass permission.
  freeze-bypass-message: <bold><dark_aqua>Freeze <dark_gray>»</bold> <gray>You can't freeze that player.</gray>

  # The usage message for the /freeze command.
  freeze-command-usage: <bold><dark_aqua>Freeze <dark_gray>»</bold> <red>You must use /freeze {player} to freeze a player.</red>

  # The format of the chat message when the player is frozen.
  freeze-chat-format: '{player} <dark_gray>(frozen)</dark_gray> » <gray>{message}</gray>'

  # Chat format for staff members that are talking to frozen players.
  freeze-staff-chat-format: '{player} <dark_gray>(staff)</dark_gray> -> {target} <dark_gray>(frozen)</dark_gray> » <gray>{message}</gray>'

  # FreezeChat command usage message.
  freeze-chat-usage: <bold><dark_aqua>Freeze <dark_gray>»</bold> <red>You must use /freezechat {player} <message> to chat with a frozen player.</red>

  # Freeze Chat when a player isn't frozen and you try to use it.
  not-frozen-chat: <bold><dark_aqua>Freeze <dark_gray>»</bold> <red>You can't use the freeze chat if the player isn't frozen.</red>

  # Freeze Chat when a player isn't online and you try to use it.
  player-not-online: <bold><dark_aqua>Freeze <dark_gray>»</bold> <red>That player is not online.</red>
staff-chat:
  # The format for sent messages on Staff Chat.
  format: <b><dark_aqua>SC</dark_aqua></b> <green>{player} <dark_gray>({server}) <dark_gray><bold>»</bold> <gray>{message}

  # Enable the staff chat as main chat.
  enable: '{prefix} <green>You have enabled the staff chat as main chat!'

  # Disable the staff chat as main chat.
  disable: '{prefix} <red>You have disabled the staff chat as main chat!'
placeholder:
  # The result to display when a placeholder displays an affirmative value.
  placeholder-true: <green>✔

  # The result to display when a placeholder displays a negative value.
  placeholder-false: <red>✘

```
:::

## commands.yml

In this file you can modify the plugin commands, add aliases and change the permissions.

::: details commands.yml

```yaml
# ▐ ▄             ▄ •▄ ▄• ▄▌▄▄▄  ▄▄▄ .    .▄▄ · ▄▄▄▄▄ ▄▄▄· ·▄▄▄·▄▄▄
# •█▌▐█▪     ▪     █▌▄▌▪█▪██▌▀▄ █·▀▄.▀·    ▐█ ▀. •██  ▐█ ▀█ ▐▄▄·▐▄▄·
# ▐█▐▐▌ ▄█▀▄  ▄█▀▄ ▐▀▀▄·█▌▐█▌▐▀▀▄ ▐▀▀▪▄    ▄▀▀▀█▄ ▐█.▪▄█▀▀█ ██▪ ██▪
# ██▐█▌▐█▌.▐▌▐█▌.▐▌▐█.█▌▐█▄█▌▐█•█▌▐█▄▄▌    ▐█▄▪▐█ ▐█▌·▐█ ▪▐▌██▌.██▌.
# ▀▀ █▪ ▀█▄▀▪ ▀█▄▀▪·▀  ▀ ▀▀▀ .▀  ▀ ▀▀▀      ▀▀▀▀  ▀▀▀  ▀  ▀ ▀▀▀ ▀▀▀
# 
# Remember to join my Discord server if you need help:
# https://discord.nookure.com/

commands:
  vanish:
    # The name of the command
    name: vanish

    # The aliases of the command
    aliases: []

    # The permission required to execute the command
    permission: nookure.staff.vanish

    # The description of the command
    description: Vanish command

    # The usage of the command
    usage: Toggle your vanish status

    # Whether the command is enabled
    enabled: true
  NookureStaff:
    # The name of the command
    name: NookureStaff

    # The aliases of the command
    aliases:
      - nstaff
      - ns

    # The permission required to execute the command
    permission: nookure.staff.admin

    # The description of the command
    description: Main command for NookureStaff

    # The usage of the command
    usage: ''

    # Whether the command is enabled
    enabled: true
  staff:
    # The name of the command
    name: staff

    # The aliases of the command
    aliases: []

    # The permission required to execute the command
    permission: nookure.staff

    # The description of the command
    description: Main command for staff

    # The usage of the command
    usage: ''

    # Whether the command is enabled
    enabled: true
  freeze:
    # The name of the command
    name: freeze

    # The aliases of the command
    aliases: []

    # The permission required to execute the command
    permission: nookure.staff.freeze

    # The description of the command
    description: ''

    # The usage of the command
    usage: ''

    # Whether the command is enabled
    enabled: true
  freezechat:
    # The name of the command
    name: freezechat

    # The aliases of the command
    aliases: []

    # The permission required to execute the command
    permission: nookure.staff.freeze

    # The description of the command
    description: ''

    # The usage of the command
    usage: /freezechat <player>

    # Whether the command is enabled
    enabled: true
  staffchat:
    # The name of the command
    name: staffchat

    # The aliases of the command
    aliases:
      - sc

    # The permission required to execute the command
    permission: nookure.staff.staffchat

    # The description of the command
    description: Send a message to all staff members

    # The usage of the command
    usage: /staffchat <message>

    # Whether the command is enabled
    enabled: true


```
:::

## items.yml

Here you can modify each item from the plugin's staff mode tools.

::: details items.yml
```yaml
# ▐ ▄             ▄ •▄ ▄• ▄▌▄▄▄  ▄▄▄ .    .▄▄ · ▄▄▄▄▄ ▄▄▄· ·▄▄▄·▄▄▄
# •█▌▐█▪     ▪     █▌▄▌▪█▪██▌▀▄ █·▀▄.▀·    ▐█ ▀. •██  ▐█ ▀█ ▐▄▄·▐▄▄·
# ▐█▐▐▌ ▄█▀▄  ▄█▀▄ ▐▀▀▄·█▌▐█▌▐▀▀▄ ▐▀▀▪▄    ▄▀▀▀█▄ ▐█.▪▄█▀▀█ ██▪ ██▪
# ██▐█▌▐█▌.▐▌▐█▌.▐▌▐█.█▌▐█▄█▌▐█•█▌▐█▄▄▌    ▐█▄▪▐█ ▐█▌·▐█ ▪▐▌██▌.██▌.
# ▀▀ █▪ ▀█▄▀▪ ▀█▄▀▪·▀  ▀ ▀▀▀ .▀  ▀ ▀▀▀      ▀▀▀▀  ▀▀▀  ▀  ▀ ▀▀▀ ▀▀▀
# 
# Remember to join my Discord server if you need help:
# https://discord.nookure.com/

staff-items:
  items:
    random_player_teleport:
      # Whether the item is enabled or not.
      # If the item is disabled, it won't be shown to anyone.
      enabled: true

      # The permission required to use the item.
      # If the player doesn't have the permission, the item won't be shown.
      permission: nookurestaff.item.randomteleport

      # The name of the item.
      # The default format is mini message.
      # but you can also use & or § to colorize the name.
      # See hhttps://docs.advntr.dev/minimessage/format.html for more info.
      # To put a hex color, use <#hexcode> or <gradient:[color1]:[color...]:[phase]> for gradients.
      name: <blue>Random Teleport

      # The material of the item.
      # See https://jd.papermc.io/paper/1.20/org/bukkit/Material.html for more info.
      material: ENDER_PEARL

      # The slot of the item.
      # The slots are numbered from 0 to 8, from left to right.
      slot: 0

      # The lore of the item.
      # The default format is mini message.
      # but you can also use & or § to colorize the lore.
      # See https://docs.advntr.dev/minimessage/format.html for more info.
      # To put a hex color, use <#hexcode> or <gradient:[color1]:[color...]:[phase]> for gradients.
      lore:
        - <gray>Right click to teleport to a random player
    invsee:
      # Whether the item is enabled or not.
      # If the item is disabled, it won't be shown to anyone.
      enabled: true

      # The permission required to use the item.
      # If the player doesn't have the permission, the item won't be shown.
      permission: nookurestaff.item.invsee

      # The name of the item.
      # The default format is mini message.
      # but you can also use & or § to colorize the name.
      # See hhttps://docs.advntr.dev/minimessage/format.html for more info.
      # To put a hex color, use <#hexcode> or <gradient:[color1]:[color...]:[phase]> for gradients.
      name: <blue>Invsee

      # The material of the item.
      # See https://jd.papermc.io/paper/1.20/org/bukkit/Material.html for more info.
      material: CHEST

      # The slot of the item.
      # The slots are numbered from 0 to 8, from left to right.
      slot: 5

      # The lore of the item.
      # The default format is mini message.
      # but you can also use & or § to colorize the lore.
      # See https://docs.advntr.dev/minimessage/format.html for more info.
      # To put a hex color, use <#hexcode> or <gradient:[color1]:[color...]:[phase]> for gradients.
      lore:
        - <gray>Click to open the inventory
        - <gray>Of the player you are looking at
    thru:
      # Whether the item is enabled or not.
      # If the item is disabled, it won't be shown to anyone.
      enabled: true

      # The permission required to use the item.
      # If the player doesn't have the permission, the item won't be shown.
      permission: nookurestaff.item.thru

      # The name of the item.
      # The default format is mini message.
      # but you can also use & or § to colorize the name.
      # See hhttps://docs.advntr.dev/minimessage/format.html for more info.
      # To put a hex color, use <#hexcode> or <gradient:[color1]:[color...]:[phase]> for gradients.
      name: <blue>Thru

      # The material of the item.
      # See https://jd.papermc.io/paper/1.20/org/bukkit/Material.html for more info.
      material: COMPASS

      # The slot of the item.
      # The slots are numbered from 0 to 8, from left to right.
      slot: 8

      # The lore of the item.
      # The default format is mini message.
      # but you can also use & or § to colorize the lore.
      # See https://docs.advntr.dev/minimessage/format.html for more info.
      # To put a hex color, use <#hexcode> or <gradient:[color1]:[color...]:[phase]> for gradients.
      lore:
        - <gray>Click to teleport through
        - <gray>The block you are looking at
    night_vision:
      # Whether the item is enabled or not.
      # If the item is disabled, it won't be shown to anyone.
      enabled: true

      # The permission required to use the item.
      # If the player doesn't have the permission, the item won't be shown.
      permission: nookurestaff.item.nightvision

      # The name of the item.
      # The default format is mini message.
      # but you can also use & or § to colorize the name.
      # See hhttps://docs.advntr.dev/minimessage/format.html for more info.
      # To put a hex color, use <#hexcode> or <gradient:[color1]:[color...]:[phase]> for gradients.
      name: <blue>Night Vision

      # The material of the item.
      # See https://jd.papermc.io/paper/1.20/org/bukkit/Material.html for more info.
      material: POTION

      # The slot of the item.
      # The slots are numbered from 0 to 8, from left to right.
      slot: 7

      # The lore of the item.
      # The default format is mini message.
      # but you can also use & or § to colorize the lore.
      # See https://docs.advntr.dev/minimessage/format.html for more info.
      # To put a hex color, use <#hexcode> or <gradient:[color1]:[color...]:[phase]> for gradients.
      lore:
        - <gray>Click to toggle night vision
    freeze:
      # Whether the item is enabled or not.
      # If the item is disabled, it won't be shown to anyone.
      enabled: true

      # The permission required to use the item.
      # If the player doesn't have the permission, the item won't be shown.
      permission: nookurestaff.item.freeze

      # The name of the item.
      # The default format is mini message.
      # but you can also use & or § to colorize the name.
      # See hhttps://docs.advntr.dev/minimessage/format.html for more info.
      # To put a hex color, use <#hexcode> or <gradient:[color1]:[color...]:[phase]> for gradients.
      name: <blue>Freeze

      # The material of the item.
      # See https://jd.papermc.io/paper/1.20/org/bukkit/Material.html for more info.
      material: BLAZE_ROD

      # The slot of the item.
      # The slots are numbered from 0 to 8, from left to right.
      slot: 1

      # The lore of the item.
      # The default format is mini message.
      # but you can also use & or § to colorize the lore.
      # See https://docs.advntr.dev/minimessage/format.html for more info.
      # To put a hex color, use <#hexcode> or <gradient:[color1]:[color...]:[phase]> for gradients.
      lore:
        - <gray>Click to freeze
        - <gray>The player you are looking at
    ender_chest:
      # Whether the item is enabled or not.
      # If the item is disabled, it won't be shown to anyone.
      enabled: true

      # The permission required to use the item.
      # If the player doesn't have the permission, the item won't be shown.
      permission: nookurestaff.item.enderchest

      # The name of the item.
      # The default format is mini message.
      # but you can also use & or § to colorize the name.
      # See hhttps://docs.advntr.dev/minimessage/format.html for more info.
      # To put a hex color, use <#hexcode> or <gradient:[color1]:[color...]:[phase]> for gradients.
      name: <blue>Enderchest

      # The material of the item.
      # See https://jd.papermc.io/paper/1.20/org/bukkit/Material.html for more info.
      material: ENDER_CHEST

      # The slot of the item.
      # The slots are numbered from 0 to 8, from left to right.
      slot: 3

      # The lore of the item.
      # The default format is mini message.
      # but you can also use & or § to colorize the lore.
      # See https://docs.advntr.dev/minimessage/format.html for more info.
      # To put a hex color, use <#hexcode> or <gradient:[color1]:[color...]:[phase]> for gradients.
      lore:
        - <gray>Click to open the target's enderchest
    vanish:
      # Whether the item is enabled or not.
      # If the item is disabled, it won't be shown to anyone.
      enabled: true

      # The permission required to use the item.
      # If the player doesn't have the permission, the item won't be shown.
      permission: nookurestaff.item.vanish

      # The name of the item.
      # The default format is mini message.
      # but you can also use & or § to colorize the name.
      # See hhttps://docs.advntr.dev/minimessage/format.html for more info.
      # To put a hex color, use <#hexcode> or <gradient:[color1]:[color...]:[phase]> for gradients.
      name: <blue>Vanish

      # The material of the item.
      # See https://jd.papermc.io/paper/1.20/org/bukkit/Material.html for more info.
      material: ENDER_EYE

      # The slot of the item.
      # The slots are numbered from 0 to 8, from left to right.
      slot: 4

      # The lore of the item.
      # The default format is mini message.
      # but you can also use & or § to colorize the lore.
      # See https://docs.advntr.dev/minimessage/format.html for more info.
      # To put a hex color, use <#hexcode> or <gradient:[color1]:[color...]:[phase]> for gradients.
      lore:
        - <gray>Click to toggle vanish

```
:::