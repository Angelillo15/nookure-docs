import { defineConfig } from 'vitepress';
import nkstaff from './nookurestaff';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Nookure Docs',
  description: 'Here you will find all information for Nookure Projects',
  head: [['link', { rel: 'icon', href: 'https://nookure.com/favicon.ico' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Nookure Staff',
        link: '/nkstaff/what-is-nookurestaff',
        activeMatch: '/nkstaff/',
      },
    ],
    sidebar: {
      '/nkstaff/': { base: '/nkstaff/', items: nkstaff },
    },

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/Nookure/',
      },
      {
        icon: 'discord',
        link: 'https://discord.nookure.com',
      },
    ],
    search: {
      provider: 'local',
    },
    footer: {
      copyright: `Copyright © Nookure ${new Date().getFullYear()}`,
    }
  },
});
