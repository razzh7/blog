export default {
  title: '小豪的blog',
  description: 'razzh Razzh',
  base: '/blog/',
  lang: 'zh-CN',
  themeConfig: {
    lastUpdated: '最后更新时间',
    logo: '/dandelion.jpeg',
    nav: [
      { text: '前端', link: '/front/' },
      { text: '阅读', link: '/book/' },
      { text: '关于我', link: '/me/' }
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
  head: [['link', { rel: 'shortcut icon', href: '/blog/dandelion.jpeg' }]]
}

function frontEnd() {
  return [
    {
      text: 'Vue.js',
      collapsible: true,
      items: [{ text: 'Vuex挂载过程', link: '/front/vue/vuexMount' }]
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
        { text: 'JS 继承方式', link: '/front/js/extends' },
        { text: 'instanceof实现', link: '/front/js/instanceof' }
      ]
    }
  ]
}
