const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const rlc = require("remark-link-card");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Github Copilot Guide",
  tagline: "",
  url: "https://copilot-guide.netlify.app",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "hodmi",
  projectName: "gh-copilot-docusaurus",

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          remarkPlugins: [rlc],
          routeBasePath: "/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
      },
      navbar: {
        title: "Github Copilot",
        // logo: {
        //   alt: "Appcircle Docs",
        //   src: "https://cdn.appcircle.io/docs/logo.svg",
        // },
        items: [
          // {
          //   to: "/",
          //   position: "left",
          //   label: "Docs",
          // },
          // {
          //   type: 'dropdown',
          //   items: [
          //     {
          //       label: 'Slack',
          //       href: 'https://join.slack.com/t/appcircleio/signup',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/appcircleio',
          //     },
          //     {
          //       label: 'LinkedIn',
          //       href: 'https://www.linkedin.com/company/appcircleio',
          //     },
          //   ],
          //   label: 'Community',
          //   position: 'right',
          // },
        ],
      },
      // footer: {
      //   style: "dark",
      //   // logo: {
      //   //   src: "https://cdn.appcircle.io/docs/footer-logo-full.png",
      //   //   alt: "Appcircle Logo",
      //   //   href: "https://appcircle.io",
      //   //   width: 160,
      //   //   height: 33,
      //   // },
      //   links: [
      //     // {
      //     //   title: "Docs",
      //     //   items: [
      //     //     {
      //     //       label: "Documentation",
      //     //       type: "doc",
      //     //       to: "/",
      //     //     },
      //     //     {
      //     //       label: "Release Notes",
      //     //       type: "doc",
      //     //       to: "updates/release-notes",
      //     //     },
      //     //   ],
      //     // },
      //   ],
      //   copyright: `Copyright © ${new Date().getFullYear()} Built with JAEYOUNG.`,
      // },
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["ruby", "groovy", "java", "kotlin"],
      },
      imageZoom: {
        selector: ".screenshot, .image-narrow",
        options: {
          // medium-zoom options
          margin: 24,
          scrollOffset: 0,
        },
      },
    }),
  plugins: [
    [
      "@docusaurus/plugin-google-analytics",
      {
        trackingID: "UA-40954643-12",
        anonymizeIP: true,
      },
    ],
    "docusaurus-plugin-sass",
    "plugin-image-zoom",
  ],
};

module.exports = config;
