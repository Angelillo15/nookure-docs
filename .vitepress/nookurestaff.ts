import { DefaultTheme } from 'vitepress';

const nkstaff = [
  {
    text: 'Getting Started',
    collapsed: false,
    items: [
      { text: 'What is Nookure Staff?', link: 'what-is-nookurestaff' },
      { text: 'Supported Versions', link: 'support' },
      { text: 'Choosing a database', link: 'database' },
      { text: 'Choosing a messenger', link: 'messenger' },
      { text: 'Installation', link: 'installation' },
      { text: 'Proxy Setup', link: 'proxy-setup' }
    ]
  },
  {
    text: 'Usage',
    collapsed: false,
    items: [
      { text: 'Placeholders', link: 'placeholders' },
      { text: 'Permissions', link: 'permissions' },
      { text: 'Commands', link: 'commands' },
      { text: 'Configuration', link: 'configuration' }
    ]
  },
  {
    text: 'Tweaks',
    collapsed: false,
    items: [
      { text: 'Customizing commands', link: 'custom-commands' },
    ]
  }
] as DefaultTheme.SidebarItem[];

export default nkstaff;