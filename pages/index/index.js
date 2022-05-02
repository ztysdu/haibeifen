const app = getApp();

//index.js 页面引入


Page({
  data: {
    json: '',

  },
 
  onLoad() {
    var that = this;
    
  },

  //点击第一个按钮跳转到的界面
  btn1click: function (event) {
    wx.navigateTo({
      url: '/pages/menu/menu' ,
    })
  },
  //点击第二个按钮跳转到的界面
  btn2click: function (event) {
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },
  //点击第三个按钮跳转到的界面
  btn3click: function (event) {
    wx.navigateTo({
      url: '/pages/chat/chat',
    })
  },
  
});
