import { DefaultTheme } from 'vitepress';

const inventory = [
  {
    text: 'Getting Started',
    collapsed: false,
    items: [
      { text: 'What is Nookure Inventory?', link: 'what-is-nookureinventory' },
      { text: 'Setting up NookureInventory', link: 'setup' },
      { text: 'Creating our first gui', link: 'first-gui' },
      { text: 'What is a template engine?', link: 'what-is-a-template-engine' },
      { text: 'Basic pebble usage', link: 'pebble-basic-usage'},
      { text: 'IDE setup', link: 'ide-setup' }
    ]
  },
  {
    text: 'Pagination',
    collapsed: false,
    items: [
      { text: 'What is pagination?', link: 'pagination/what-is-pagination' },
      { text: 'Setting up pagination', link: 'pagination/how-to-do-pagination' },
    ]
  },
  {
    text: 'Actions',
    collapsed: false,
    items: [
      { text: 'What are actions?', link: 'actions/what-are-actions' },
      { text: 'Action types', link: 'actions/action-types' },
      { text: 'Registering custom actions', link: 'actions/registering-actions' },
    ]
  }
] as DefaultTheme.SidebarItem[];

export default inventory;