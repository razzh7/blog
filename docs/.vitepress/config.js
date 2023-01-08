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
      message: '© 2023-xiaohao',
      copyright: `<div style="width:300px;margin:0 auto;">
      <span>浙ICP备2022036392号</span>
      <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33011002016890" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;"><img src="./img/gongan.png" style="float:left;"/><p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">浙公网安备 33011002016890号</p></a>
    </div>
  `
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
