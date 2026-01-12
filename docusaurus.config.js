// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {
  duotoneDark,
  github,
  gruvboxMaterialDark,
  jettwaveDark,
  nightOwl,
  themes as prismThemes,
} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PHP Unitary',
  tagline: 'For developers who like their data structured and their coffee strong',

  // GitHub Pages project sites should use root-level favicon + baseUrl-aware paths
  favicon: 'favicon.ico',

  // Set the production url of your site here
  url: 'https://maplephp.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/Unitary/',

  organizationName: 'MaplePHP',
  projectName: 'Unitary',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-M3092KZDQF',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  // Add link tags for icons/manifest (baseUrl-aware for GitHub Pages project sites)
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/Unitary/apple-touch-icon.png',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/png',
        sizes: '96x96',
        href: '/Unitary/favicon-96x96.png',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'manifest',
        href: '/Unitary/site.webmanifest',
      },
    },

    // Optional: Safari pinned tab icon
    // {
    //   tagName: 'link',
    //   attributes: {
    //     rel: 'mask-icon',
    //     href: '/Unitary/safari-pinned-tab.svg',
    //     color: '#5bbad5',
    //   },
    // },
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },

      // Social card is fine in img/ (this is not an auto-discovery path)
      image: 'img/validate-social-card.png',

      // Meta tags go here (NOT link tags)
      metadata: [
        {name: 'theme-color', content: '#ffffff'},
        {name: 'msapplication-TileColor', content: '#ffffff'},
      ],

      navbar: {
        title: 'PHP Unitary',
        logo: {
          alt: 'Unitary',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'The Documentation',
          },
          {to: '/validation-api', label: 'Validation API', position: 'left'},
          {to: '/why-unitary', label: 'Why Unitary?', position: 'left'},
          {to: '/faq', label: 'FAQ', position: 'left'},
          {
            type: 'search',
            position: 'right',
          },
          {
            href: 'https://github.com/MaplePHP/Unitary',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {label: 'Get started', to: '/docs/get-started'},
              {label: 'Write Tests', to: '/docs/run-tests'},
              {label: 'Run Tests', to: '/docs/run-tests'},
            ],
          },
          {
            title: 'Community',
            items: [
              {label: 'GitHub', href: 'https://github.com/MaplePHP/Unitary'},
              {label: 'LinkedIn', href: 'https://se.linkedin.com/in/daniel-ronkainen-161b3386/en'},
            ],
          },
          {
            title: 'More',
            items: [
              {label: 'Unitary', href: 'https://github.com/MaplePHP/unitary'},
              {label: 'Emitron', href: 'https://github.com/MaplePHP/maplephp'},
              {label: 'HTTP message', href: 'https://github.com/MaplePHP/http'},
              {label: 'Prompts', href: 'https://github.com/MaplePHP/Prompts'},
              {label: 'Blunder', href: 'https://github.com/MaplePHP/Blunder'},
            ],
          },
          {
            title: 'More',
            items: [
              {label: 'Validate', href: 'https://github.com/MaplePHP/validate'},
              {label: 'Darn Tidy object', href: 'https://github.com/MaplePHP/dto'},
              {label: 'Container', href: 'https://github.com/MaplePHP/container'},
              {label: 'Cache', href: 'https://github.com/MaplePHP/cache'},
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Darn Tidy Object (Unitary), Inc. Built with Docusaurus.`,
      },

      prism: {
        additionalLanguages: ['php'],
        theme: prismThemes.github,
        darkTheme: prismThemes.jettwaveDark,
      },
    }),
};

export default config;
