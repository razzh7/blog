export default {
  title: '小豪的blog',
  description: 'razzh Razzh',
  base: '/blog/',
  lang: 'zh-CN',
  themeConfig: {
    lastUpdated: '最后更新时间',
    logo: '/bird.png',
    nav: [
      { text: '前端', link: '/front/vue/reactive' },
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
  head: [['link', { rel: 'shortcut icon', href: '/blog/bird.png' }]]
}

function frontEnd() {
  return [
    {
      text: 'Vue.js',
      collapsible: true,
      items: [
        { text: 'Vue 响应式流程', link: '/front/vue/reactive' },
        { text: 'Vue.set 实现原理', link: '/front/vue/set' },
        { text: 'watch 实现原理', link: '/front/vue/watch' },
        { text: 'computed 实现原理', link: '/front/vue/computed' },
        { text: 'Vuex 挂载过程', link: '/front/vue/vuexMount' },
        { text: 'Vue3 提升', link: '/front/vue/vue3-advance' }
      ]
    },
    // {
    //   text: 'VueUse',
    //   collapsible: true,
    //   items: [
    //     { text: 'useAxios', link: '/front/vue-use/useAxios' },
    //     { text: 'useDark', link: '/front/vue-use/useDark' }
    //   ]
    // },
    {
      text: 'JavaScript',
      collapsible: true,
      items: [
        { text: 'JS 模块化', link: '/front/js/module' },
        { text: 'JS 继承方式', link: '/front/js/extends' },
        { text: 'this 指向总结', link: '/front/js/this' },
        { text: 'new 实现', link: '/front/js/new' },
        { text: 'instanceof 实现', link: '/front/js/instanceof' },
        { text: 'var、let、const 的区别', link: '/front/js/varletconst' }
      ]
    },
    {
      text: 'Node.js',
      collapsible: true,
      items: [
        { text: 'path.resolve 到底怎么用？', link: '/front/node/resolve' },
        { text: 'koa 深入洋葱模型', link: '/front/node/koa-onion-model' }
      ]
    },
    {
      text: 'Element-Plus',
      collapsible: true,
      items: [{ text: 'switch', link: '/front/element-plus/switch' }]
    },
    {
      text: '计算机网络',
      collapsible: true,
      items: [
        { text: 'HTTP 协议', link: '/front/network/http' },
        { text: 'TCP 和 UDP 的区别', link: '/front/network/tcp-udp' }
      ]
    },
    {
      text: '项目',
      collapsible: true,
      items: [{ text: '记一次项目测试框架选型', link: '/front/project/select-test' }]
    }
  ]
}
