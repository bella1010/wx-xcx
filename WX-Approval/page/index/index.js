var app = getApp();
Page({ 
  data: {
    email:'bellachen@cecport.com',
    password:'123456'
  },
  //事件处理函数
 // bindViewTap: function() {

  //    wx.navigateTo({
    //    url: '../home/home'
   //   })

    
 //},
  onLoad: function () {
    this.setData({
      hasLogin: app.globalData.hasLogin
    })
  },
  login: function () {
    var that = this
    wx.login({
      success: function (res) {
        app.globalData.hasLogin = true
        that.setData({
          hasLogin: true
        })
        //that.update()
        wx.navigateTo({
          url: '../home/home'
        })
      }
    })
  },
  onShareAppMessage: function () {
    return {
      title: '分享',
      desc: '分享给你的好友',
      path: '/page/user?id=123'
    }
  }
})
