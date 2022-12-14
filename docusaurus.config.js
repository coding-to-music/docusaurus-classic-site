// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "all-knowledge.info",
  tagline: "Dinosaurs are cool",
  url: "http://all-knowledge.info",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "coding-to-music", // Usually your GitHub org/user name.
  projectName: "docusaurus-classic-site", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  plugins: ["@docusaurus/plugin-ideal-image"],

  // plugins: [
  //   [
  //     "ideal-image",
  //     /** @type {import('@docusaurus/plugin-ideal-image').PluginOptions} */
  //     ({
  //       quality: 70,
  //       max: 1030,
  //       min: 640,
  //       steps: 2,
  //       // Use false to debug, but it incurs huge perf costs
  //       disableInDev: true,
  //     }),
  //   ],
  // ],
  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve("swc-loader"),
      options: {
        jsc: {
          parser: {
            syntax: "typescript",
            tsx: true,
          },
          target: "es2017",
        },
        module: {
          type: isServer ? "commonjs" : "es6",
        },
      },
    }),
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/priambudiLB/fyi/tree/main",
          editLocalizedFiles: true,
        },
        blog: {
          showReadingTime: true,
          blogTitle: "Read | SiteOrBlogTitleHere",
          blogDescription: "Blog Bagas",
          editUrl: ({ locale, blogDirPath, blogPath, permalink }) => {
            return `https://github.com/coding-to-music/docusaurus-classic-site/tree/main/${blogDirPath}/${blogPath}`;
          },
          routeBasePath: "read",
          feedOptions: {
            type: "all", // required. 'rss' | 'feed' | 'all'
            title: "", // default to siteConfig.title
            description: "", // default to  `${siteConfig.title} Blog`
            copyright: `Copyright ?? ${new Date().getFullYear()} my-name`,
            language: "en", // possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
          },
          editLocalizedFiles: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
        },
      },
    ],
  ],

  // presets: [
  //   [
  //     "classic",
  //     /** @type {import('@docusaurus/preset-classic').Options} */
  //     ({
  //       docs: {
  //         sidebarPath: require.resolve("./sidebars.js"),
  //         // Please change this to your repo.
  //         // Remove this to remove the "edit this page" links.
  //         editUrl:
  //           "https://github.com/coding-to-music/docusaurus-classic-site/tree/main/packages/create-docusaurus/templates/shared/",
  //       },
  //       blog: {
  //         showReadingTime: true,
  //         // Please change this to your repo.
  //         // Remove this to remove the "edit this page" links.
  //         editUrl:
  //           "https://github.com/coding-to-music/docusaurus-classic-site/tree/main/packages/create-docusaurus/templates/shared/",
  //         // editUrl: ({ locale, blogDirPath, blogPath, permalink }) => {
  //         //   return `https://github.com/priambudiLB/fyi/tree/main/${blogDirPath}/${blogPath}`;
  //       },
  //       theme: {
  //         customCss: require.resolve("./src/css/custom.css"),
  //       },
  //     }),
  //   ],
  // ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "all-knowledge.info",
        // logo: {
        //   alt: "all-knowledge.info Logo",
        //   src: "img/logo.svg",
        // },
        items: [
          {
            type: "doc",
            docId: "Cloud Docs/iac-docs",
            position: "left",
            label: "Docs",
          },
          {
            type: "doc",
            docId: "Docusaurus/intro",
            position: "left",
            label: "Tutorial",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            to: "/gladys-assistant/open-metrics",
            label: "Charts",
            position: "left",
          },
          { to: "showcase", label: "Showcase", position: "left" },
          // {
          //   type: "dropdown",
          //   label: "Charts",
          //   position: "left",
          //   items: [
          //     {
          //       label: "Glady's Assistant Open Metrics using chart.js",
          //       to: "/gladys-assistant/open-metrics",
          //     },
          //   ],
          // },
          {
            href: "https://github.com/coding-to-music/docusaurus-classic-site",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/docusaurus/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/coding-to-music/docusaurus-classic-site",
              },
            ],
          },
        ],
        copyright: `Copyright ?? ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
