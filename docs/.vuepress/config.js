module.exports = {
  title: '蒋冠的博客',
  description: '我的个人技术博客',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', {
      rel: 'icon',
      href: '/blogs.png'
    }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    nav: [ // 导航栏配置
      {
        link: '/'
      }
    ],
    sidebar: [{
        title: 'HTML和CSS',
        children: [
          'darkmode'
        ]
      },
      {
        title: '原生JS',
        children: ['strongCacheAndNegotiationCache']
      },
      {
        title: 'Vue',
        children: ['Vuex&Reudx\'sApplication']
      }
    ], // 侧边栏配置
    sidebarDepth: 2, // 侧边栏显示2级
  },
  searchMaxSuggestions: 10
}