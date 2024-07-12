# What are actions?
Actions are the way to give your users to perform actions on your minecraft server.

## How can I create an action?
In order to create an action you have to add an Action container to your Item, just add the Actions container
````xml
<Item ...>
  ...
  <Actions>
    <Action type="ACTION_TYPE" value="ACTION_VALUE" />
  </Actions>
  ...
</Item>
```