
var app = getApp()
Page({
    data: {
        userInfo: {}
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

    loginFun: function(){
        wx.login({
            success: function(res) {
                
                console.log("dasda")
                if (res.code) {
                    //发起网络请求
                    // wx.request({
                    //     url: 'https://test.com/onLogin',
                    //     data: {
                    //         code: res.code
                    //     }
                    // })
                    console.log("发起微信登录请求！");
                    console.log(res.code);
                } else {
                    console.log('获取用户登录态失败！' + res.errMsg)
                }
            }
        });
    }
})