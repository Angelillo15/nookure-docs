# Nookure Inventory
This is a simple library that aims to provide a simple way to create inventory for your
Paper plugin ([Spigot support*](#spigot-support) using a XML based file with a template engine,
if you are a web developer you will feel at home with terms like `components`.

The main point of this library is to provide a way to create inventory without the need to
write a lot of Java code and to provide a more user-friendly way to create inventory.

### Example
```xml
<GuiLayout>
    <Head>
        <title tl="true">
            [#FF6545] Your awesome inventory
        </title>
        <rows>1</rows>
    </Head>
    <Items>
        <Item
                slot="4"
                material="STONE"
        >
            <Name>
                [red]Magic Stone ✨[/red]
            </Name>
            <LiteralLore>
                This is a magic stone
                [red]It's very powerful[/red]
            </LiteralLore>
        </Item>
    </Items>
</GuiLayout>
```

## Spigot support
This library requires the use of the [Adventure](https://docs.advntr.dev/) library, which is included in Paper 1.16.5 and above. If you are using Spigot, you will need to include the Adventure library in your project. More information [here](https://docs.advntr.dev/platform/bukkit.html).
You will also need to include MiniMessage in your project. More information [here](https://docs.advntr.dev/minimessage/api.html).