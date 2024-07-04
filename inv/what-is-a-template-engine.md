# What is a template engine ?
If you are a web developer you probable already know what is it, or at least heard about it. A template engine is a tool that allows you to create templates for your application, this templates can be used to generate dynamic content. In our context we are going to use a template engine to create inventories for our plugin.

## How its works ?
For example, we have a template like this:
```xml
<GuiLayout>
    <Head>
        <title tl="true">
            [#FF6545] Welcome to my inventory
        </title>
        <rows>1</rows>
    </Head>
    <Items>
        <-- Here we are going to put the items -->
    </Items>
</GuiLayout>
```
But we want to customize the title of the inventory, to say the name of the player, we can use a template engine to do this, in the NookureInventory we use the Pebble template engine, so we can do something like this:
```xml
<GuiLayout>
    <Head>
        <title tl="true">
            [#FF6545] Welcome {{ player.name }} to my inventory
        </title>
        <rows>1</rows>
    </Head>
    <Items>
        <-- Here we are going to put the items -->
    </Items>
</GuiLayout>
```
By default the `openAsync(@NotNull Player player, @NotNull String layout)` method will insert the player object in the context of the template engine, so you can use the `player` object in the template.

When you type `player.name` the template engine will search in the player object for a method called `getName` and will replace the `player.name` with the result of the method.

The template engine will search in the object in this order:
1. player.getName()
2. player.isName()
3. player.hasName()
4. player.name()
5. player.name

This isn't awesome ? This is a simple example of what you can do with a template engine, you can do a lot more things with it, like loops, conditions, macros, etc.

I *ABSOLUTY RECOMMEND* reading the [Pebble documentation](https://pebbletemplates.io/) to understand how the template engine works.

## This affects the performance of my plugin ?
Yes, it does, but the impact is minimal and the engine works on another thread, so it won't affect the main thread of your server.

