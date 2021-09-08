export default {
  pages: [
    'pages/index/index',
    'pages/second/index'
  ],
  tabBar: {
    // custom: true,
    list: [
      {
        pagePath: 'pages/index/index',
        text: 'ViewPageScroll'
      },
      {
        pagePath: 'pages/second/index',
        text: 'ScrollView'
      }
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
