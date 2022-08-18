export default {
  title: '小豪的blog',
  description: 'razzh Razzh',
  base: '/blog/',
  lang: 'zh-CN',
  themeConfig: {
    lastUpdated: '最后更新时间',
    logo: '/sign.ico',
    nav: [
      { text: '🥳前端', link: '/front/' },
      { text: '🎯算法', link: '/algorithm/' },
      { text: '📚阅读', link: '/book/' },
      { text: '👴关于我', link: '/me/' }
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/rzhAvenir/blog' }],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Razzh'
    },
    sidebar: {
      '/front/': frontEnd()
    }
  },
  head: [['link', { rel: 'shortcut icon', href: '/blog/sign.ico' }]]
}

function frontEnd() {
  return [
    {
      text: 'Vue.js',
      collapsible: true,
      items: [{ text: 'Vuex挂载过程', link: '/front/vue/newVuex' }]
    },
    {
      text: 'koa',
      collapsible: true,
      items: [{ text: 'koa', link: '/front/koa/koa' }]
    },
    {
      text: 'VueUse',
      collapsible: true,
      items: [
        { text: 'useAxios', link: '/front/vue-use/useAxios' },
        { text: 'useDark', link: '/front/vue-use/useDark' }
      ]
    },
    {
      text: 'Element-Plus',
      collapsible: true,
      items: [{ text: 'switch', link: '/front/element-plus/switch' }]
    },
    {
      text: 'JavaScript',
      collapsible: true,
      items: [
        { text: 'async-await', link: '/front/js/async-await' },
        { text: 'instanceof实现', link: '/front/js/instanceof' }
      ]
    }
  ]
}
