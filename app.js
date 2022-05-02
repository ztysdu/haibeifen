
App({
  globalData: {
    appId: 'wx0b3748b5cb479882', 
    appName: '解决方案',
    history: [],
  },

  onLaunch: function () {    //小程序初始化完成会触发
    
  },
  onHide: function () {     //小程序进入后台
    wx.stopBackgroundAudio()
  },
  
})
