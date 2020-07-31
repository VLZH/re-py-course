module.exports = {
  title: "Re: Python-Course",
  tagline: "Python tutorial",
  url: "https://re-py-course.vercel.app/",
  baseUrl: "/",
  favicon: "img/logo.png",
  organizationName: "vlzh",
  projectName: "Re: Python-Course",
  themeConfig: {
    prism: {
      theme: require("prism-react-renderer/themes/dracula"),
    },
    navbar: {
      title: "Re: Python-Course",
      logo: {
        alt: "",
        src: "img/logo.png",
      },
      links: [
        { to: "docs/intro", label: "Docs", position: "left" },
        {
          href: "https://github.com/VLZH/re-py-course",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [],
      logo: {},
      copyright: `Copyright © ${new Date().getFullYear()} https://github/VLZH. Built with Docusaurus🦖.`,
    },
    algolia: {
      apiKey: "98ff9e4b7db0171d6e42450e1a49d62b",
      appId: "STW7H9SYB2",
      indexName: "re-py-course",
      algoliaOptions: {},
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/VLZH/re-py-course",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: ["@docusaurus/plugin-ideal-image"],
};
