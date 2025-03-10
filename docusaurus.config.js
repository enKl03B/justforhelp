// @ts-check
// `@type` JSDoc 注释允许编辑器自动完成和类型检查
// （当与 `@ts-check` 配对时）。
// 有各种等效的方式来声明你的 Docusaurus 配置。
// 见：https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// 这在 Node.js 中运行 - 不要在这里使用客户端代码（浏览器 API，JSX...）

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Jly的帮助站',
  tagline: '折腾、创作 etc.',
  favicon: 'img/favicon.ico',

  // 在这里设置你的网站的生产 URL
  url: 'https://hp.078465.xyz',
  // 设置你的网站在 /<baseUrl>/ 下服务的路径名
  // 对于 GitHub 页面部署，通常是 '/<projectName>/'
  baseUrl: '/',

  // GitHub 页面部署配置。
  // 如果你不是使用 GitHub 页面，你不需要这些。
  organizationName: 'enKl03B', // 通常是你的 GitHub 组织/用户名。
  projectName: 'justforhelp', // 通常是你的仓库名。

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // 即使你不使用国际化，你也可以使用这个字段来设置
  // 有用的元数据，如 html lang。例如，如果你的网站是中文，你可能需要
  // 将 "en" 替换为 "zh-Hans"。
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // 请将此更改为你的仓库。
          // 移除此选项以移除“编辑此页”链接。
          editUrl:
            'https://github.com/enKl03B/justforhelp/tree/main',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // 请将此更改为你的仓库。
          // 移除此选项以移除“编辑此页”链接。
          editUrl:
            'https://github.com/enKl03B/justforhelp/tree/main',
          // 有用的选项来强制执行博客最佳实践
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig: 
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // 请替换为你的项目的社交卡
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Jly的帮助站',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'Intro/Intro', // 指向 Intro.md
            sidebarID: 'mixiSidebar',
            label: '导航',
            position: 'left',
          },
          {
            type: 'doc',
            docId: 'Mixi/Mixi简介', // 指向 Mixi简介.md
            sidebarID: 'mixiSidebar',
            label: 'Mixi',
            position: 'left',
          },
          {
            type: 'doc',
            docId: 'MaimBot/MaimBot简介', // 指向 MaimBot简介.md
            sidebarID: 'maimSidebar',
            label: 'MaimBot',
            position: 'left',
          },
          { to: '/blog', label: '更新记录', position: 'left' },
          {
            href: 'https://stats.uptimerobot.com/bYVW2cRJ5T',
            label: '状态',
            position: 'right',
          },
          {
            href: 'https://078465.xyz',
            label: '博客',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '导航',
                to: '/docs/Intro',
              },
              {
                label: 'Mixi',
                to: '/docs/Mixi/Mixi简介',
              },
              {
                label: 'MaimBot',
                to: '/docs/MaimBot/MaimBot简介',
              },
            ],
          },
          {
            title: ' ',
          },
          {
            title: '更多',
            items: [
              {
                label: '更新记录',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/enKl03B',
              },
              {
                label: '状态',
                href: 'https://stats.uptimerobot.com/bYVW2cRJ5T',
              },
            ],
          },
        ],
        copyright: `Jly 2024-${new Date().getFullYear()} . 使用 Docusaurus 搭建.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
