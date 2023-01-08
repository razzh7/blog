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
      copyright: '<a href="https://beian.miit.gov.cn">浙ICP备17035458号-1</a>'
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
