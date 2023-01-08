import algolia from './algolia'
import frontEnd from './frontEnd'

export default {
  title: '小豪的blog',
  description: 'razzh Razzh',
  base: '/',
  lang: 'zh-CN',
  themeConfig: {
    lastUpdated: true,
    logo: '/bird.png',
    nav: [
      { text: '前端', link: '/front/vue/reactive' },
      { text: '阅读', link: '/book/' },
      { text: '关于我', link: '/me/' }
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/rzhAvenir' }],
    footer: {
      message: 'Copyright © 2023-xiaohao',
      copyright: '浙ICP备2022036392号-1'
    },
    sidebar: {
      '/front/': frontEnd()
    },
    editLink: {
      pattern: 'https://github.com/rzhAvenir/blog/edit/master/docs/:path',
      text: '在 GitHub 上编辑'
    },
    frontEnd,
    algolia
  },
  head: [['link', { rel: 'shortcut icon', href: '/bird.png' }]]
}
