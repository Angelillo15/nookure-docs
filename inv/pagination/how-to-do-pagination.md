# How to implement pagination in Nookure Inventory ?
This is pretty simple, you just need to add the Pagination Extension to your builder, then pass the respective Array to the template.

## Material Pagination example
First off all, you need to add the Pagination Extension to your builder, then you need to pass the respective Array to the template.

```java [Main.java]
public class Main extends JavaPlugin {
  private PaperNookureInventoryEngine engine;

  @Override
  public void onEnable() {
    Thread.currentThread().setContextClassLoader(getClass().getClassLoader());

    // This is were we will iterate over the items
    saveResource("gui/PaginationTest.peb", true);
    // This is the common template for the pagination buttons
    saveResource("gui/PaginationCommon.peb", true);

    engine = new PaperNookureInventoryEngine.Builder()
        .templateFolder("gui")
        .plugin(this)
        .extensions(new PaginationItemExtension())
        .build();
  }
}
```

I recommend creating a macro (like a component) for the pagination buttons, because they aren't going to change in the time. Then you can import it in anny template that you want to use the pagination.

```twig
{% import "PaginationCommon.peb" %}
```
remember to pass the respective parameters to the macro.

```twig
{{ paginationFooter(48, 50, page, pag) }}
```

Parameters:
- `previousSlot` - The slot where the previous button will be placed.
- `nextSlot` - The slot where the next button will be placed.
- `page` - The current page index.
- `pagination` - The pagination object.

Here is a full example of how to implement the pagination in a template.

::: code-group
```twig [PaginationCommon.peb]
{# Here we are defining the custom macro/component #}
{% macro paginationFooter(previousSlot=48, nextSlot=50, page=1, pagination) %}
{# If the current page index is smaller than the last page then we can go to the next page #}
{% set canNext = page < pagination.lastPage %}
{# If the current page index is greater than 1 then we can go to the previous page #}
{% set canPrevious = page > 1 %}
        <Item
                {# If the player can't go to the previous change the material to a barrier #}
                {% if canPrevious %}
                material="PAPER"
                {% else %}
                material="BARRIER"
                {% endif %}
                slot="{{ previousSlot }}"
        >
            <Name>
                [red]Previous Page ✨[/red]
            </Name>
            <Lore>
                <LoreLine>
                    [green]Next Page [/green]
                </LoreLine>
            </Lore>
            {% if canPrevious %}
            <Actions>
                <Action
                  type="PREVIOUS_PAGE"
                />
            </Actions>
            {% endif %}
        </Item>
        <Item
                {# If the player can't go to the next page change the material to a barrier #}
                {% if canNext %}
                material="PAPER"
                {% else %}
                material="BARRIER"
                {% endif %}
                slot="{{ nextSlot }}"
        >
            <Name>
                [red]Next Page ✨[/red]
            </Name>
            <Lore>
                <LoreLine>
                    [red]Previous Page [/red]
                </LoreLine>
            </Lore>
            {% if canNext %}
            <Actions>
                <Action
                  type="NEXT_PAGE"
                />
            </Actions>
            {% endif %}
        </Item>
{% endmacro %}
```

```twig [PaginationTest.peb]
{% import "PaginationCommon.peb" %}
<GuiLayout>
    <Head>
        <title tl="true">
            [green]The[/green][red]Inventory[/red][blue]Title[/blue] >> [green]Page {{ page }}[/green]
        </title>
        <rows>6</rows>
    </Head>
    <Items>
        {# Get the pagination object from the pagination function #}
        {% set pag = pagination(9, 5, page, materials.size) %}
        {# Iterate for the correct range of items #}
        {% for i in range(pag.start, pag.end, 1) %}
        {# Get the material from the array #}
        {% set material = materials[i] %}
        {# Calculate the slot based on the current page #}
        {% set slot = i - pag.start %}
        <Item
                slot="{{ slot }}"
                material="{{ material }}"
        >
            <Name>
                [red]{{ material }}[/red]
            </Name>
            <Lore>
                <LoreLine>
                    [gray]Just a {{ material }}[/gray]
                </LoreLine>
            </Lore>
            <Actions>
                <Action
                        type="CLOSE_INVENTORY"
                />
                <Action
                        type="SEND_MESSAGE"
                        value="[green]Hello World!"
                />
            </Actions>
        </Item>
        {% endfor %}
        {{ paginationFooter(48, 50, page, pag) }}
    </Items>
</GuiLayout>
```
:::

## Open the inventory
To open the inventory you need to pass the respective parameters to the engine.

```java
engine.openAsync(player, "PaginationTest.peb", "materials", materials, "page", 1);
```

Parameters:
- `player` - The player that will receive the inventory.
- `template` - The template name.
- `key` - The key that will be used in the template.
- `value` - The value that will be passed to the template.

We are passing the `materials` array and the `page` index to the template. Normally you will start with the page index 1, but you can start with any index that you want.

When you pass custom parameters to the template, the default parameters will be overridden. So, if you want to use the player object in the template, you need to pass it as a parameter.

```java
engine.openAsync(player, "PaginationTest.peb", "materials", materials, "page", 1, "player", player);
```