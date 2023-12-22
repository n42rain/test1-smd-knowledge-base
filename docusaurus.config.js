// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Technical Documentation',
  tagline: 'Knowledge Base',
  favicon: 'img/smd-logo3.jpeg',

  // Set the production url of your site here
  url: 'https://n42rain.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/test1-smd-knowledge-base/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'n42rain', // Usually your GitHub org/user name.
  projectName: 'test1-smd-knowledge-base', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      //algolia:{
      //  appId:'L3AL00FNMF',
      //  apiKey: '',
      //  indexName: 'smd-knowledge-1',
      //  contextualSearch: true,
     // },
      // Replace with your project's social card
      // Mintak logo silentmode from Syamil
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'silentmode',
        logo: {
          alt: 'My Site Logo',
          src: 'img/smd-logo3.jpeg',
        },
        items: [
          {
            type: 'docSidebar',
            docId: 'guidelines-process',
             sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Guidelines & Process',
          },
          {
            type: 'docSidebar',
            docId: 'onboarding',
            sidebarId: 'onboardingSidebar',
            position: 'left',
            label: 'Onboarding',
          },
          {
            type: 'docSidebar',
            docId: 'support-issues',
            sidebarId: 'supportSidebar',
            position: 'left',
            label: 'Support issues',
          },
          {
            type: 'docSidebar',
            docId: 'other',
            sidebarId: 'otherSidebar',
            position: 'left',
            label: 'Other',
          },

          /*{to: '/blog', label: 'Blog', position: 'left'},*/
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Guidelines & Process',
            items: [
              {
                label: 'Support Ticket Process',
                to: 'docs/guidelines-process/Process-Support-Ticket',
              },
              {
                label: 'Sprint Planning',
                to: 'docs/guidelines-process/Sprint Planning Process',
              },
            ],
          },
          {
            title: 'Support issues',
            items: [
              {
                label: 'EOD Not Tally',
                to: '/docs/support-issues/Support-issue-1',
              },
              {
                label: 'FMR Not Tally',
                to: '/docs/support-issues/Support-issue-2',
              },
              {
                label: 'Product Not Reflect',
                to: '/docs/support-issues/Support-issue-3',
              },
              {
                label: 'On Account Statement Not Tally',
                to: '/docs/support-issues/Support-issue-4',
              },
              {
                label: 'Pump Test Not Recorded',
                to: '/docs/support-issues/Support-issue-5',
              },
              {
                label: 'Till Not Close',
                to: '/docs/support-issues/Support-issue-6',
              },
            ],
          },
          {
            title: 'Other',
            items: [
              {
                label: 'Rebase Conflict Locally',
                to: 'docs/other/other-1',
              },
              {
                label: 'Run Wetstock Migration',
                to: 'docs/other/other-2',
              },
              {
                label: 'Update Tank Config',
                to: 'docs/other/other-3',
              },
              {
                label: 'Kinesis Receipt Payload',
                to: 'docs/other/other-4',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Knowledge Base Documentation. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
