var app = getApp()
Page({
  data: {
    userInfo: {},
    
     list: [
      {
        id: 'content',
        name: '我的待办',
        open: false,
        pages: ['Pending'],
        icon:'',
        iconno:5
      }, {
        id: 'content',
        name: '我的申请',
        open: false,
        pages: ['Application'],
        iconno:2
      }, {
        id: 'content',
        name: '我的审批',
        open: false,
        pages: ['Approval'],
        iconno:3
      }
    ]
  },
  //事件处理函数
    bindViewTap: function() {
        wx.navigateTo({
           url: '../logs/logs'
        })
    },

  onLoad: function () {
        console.log('onLoad')
        var that = this
        //调用应用实例的方法获取全局数据
        app.getUserInfo(function(userInfo){
        //更新数据
        that.setData({
            userInfo:userInfo
        })
        })
    },
    onReady: function () {
        wx.setNavigationBarTitle({
            title: '个人中心'
        })
    },
  onShareAppMessage: function () {
    return {
      title: '分享',
      desc: '分享给你的好友',
      path: '/page/user?id=123'
    }
  }
});
