/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: "Python course knowledge base",
  tagline: "",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  favicon: "img/logo.png",
  organizationName: "vlzh",
  projectName: "Python basics course | IT-RUN",
  themeConfig: {
    navbar: {
      title: "Python Basics Course | IT-RUN",
      logo: {
        alt: "",
        src: "img/logo.png"
      },
      links: [
        { to: "docs/intro", label: "Docs", position: "left" },
        // {to: 'blog', label: 'Blog', position: 'left'},
        // Please keep GitHub link to the right for consistency.
        {
          href: "https://github.com/vlzh/course-python-basics",
          label: "GitHub",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      links: [
        //{
        //title: 'Docs',
        //items: [
        //{
        //label: 'Style Guide',
        //to: 'docs/doc1',
        //},
        //{
        //label: 'Second Doc',
        //to: 'docs/doc2',
        //},
        //],
        //},
      ],
      logo: {
        // alt: "Facebook Open Source Logo",
        // src: "img/oss_logo.png",
        // href: "https://opensource.facebook.com/"
      },
      // Please do not remove the credits, help to publicize Docusaurus :)
      copyright: `Copyright © ${new Date().getFullYear()}`
    },
    algolia: {
      apiKey: "98ff9e4b7db0171d6e42450e1a49d62b",
      appId: "STW7H9SYB2",
      indexName: "course-python-basics",
      algoliaOptions: {}
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/vlzh/course-python-basics/edit/master/docs"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ],
  plugins: ["@docusaurus/plugin-ideal-image"]
};
