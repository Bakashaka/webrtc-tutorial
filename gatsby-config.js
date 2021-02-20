module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    siteUrl: 'https://webrtc.mthli.com',
  },
  plugins: [
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `WebRTC 学习指南`,
        short_name: `WebRTC 学习指南`,
        start_url: `/`,
        display: 'minimal-ui',
        icon: 'content/assets/profile.jpg',
      },
    },
    {
      resolve: '@mthli/gatsby-theme-apollo-docs',
      options: {
        root: __dirname,
        baseDir: '/',
        contentDir: 'content',

        siteName: 'WebRTC 学习指南',
        pageTitle: 'WebRTC 学习指南',
        baseUrl: 'https://webrtc.mthli.com',
        description: 'Learning WebRTC the Hard Way 👀',
        githubRepo: 'mthli/webrtc-tutorial',
        twitterHandle: 'mth_li',
        gaTrackingId: 'UA-70441776-3',

        gatsbyRemarkPlugins: [
          'gatsby-remark-katex',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-footnotes',
            options: {
              footnoteBackRefPreviousElementDisplay: 'inline',
              footnoteBackRefDisplay: 'inline',
              footnoteBackRefAnchorStyle: 'text-decoration: none;',
            },
          },
        ],

        sidebarCategories: {
          null: [
            'index',
            'basic/webrtc-compilation/index',
          ],
          '基础知识': [
            'basic/p2p-hole-punching/index',
            // TODO
          ],
          '连接流程': [
            // TODO
          ],
          '丢包处理': [
            // TODO
          ],
          '数据监控': [
            // TODO
          ],
          '常见问题': [
            // TODO
          ],
          '参考资料': [
            '[W3C WebRTC 1.0](https://www.w3.org/TR/webrtc/)',
            '[WebRTC\'s Statistics](https://w3c.github.io/webrtc-stats/)',
            '[discuss-webrtc](https://groups.google.com/g/discuss-webrtc)',
          ],
        },
      },
    },
  ],
};
