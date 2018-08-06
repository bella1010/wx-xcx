Page({
  data: {
    modalHidden: true,
    modalHidden2: true,
    list: [
      {
        id:"list_1",
        title:"行政部--预算申请",
        name:"李婷",
        Rank:"M1",
        co:"中电器材深圳有限公司",
        department:"行政部",
        startime:"2016-12-19 16:26:20",
        endtime:"2016-12-30 16:26:20",
        ctype:"年度预算",
        days:"11",
        totalcost:"1,0000",
        currency:"CNY"
      }
    ]
  },
  onReady: function(){
    var that = this
    wx.setNavigationBarTitle({
      title: that.data.options.title
    })
  },
  onLoad: function (options) {
    var that = this
    var id = options.id

    fetch('https://api.douban.com/v2/movie/subject/' + id).then(function(response){
      if(response.status !== 200){
        console.log("error："+ response.status)
        return
      }
      response.json().then(function(data){
        that.setData({
          film: data,
          options: options
        })
      })
    })
  },
   openConfirm: function () {
        wx.showModal({
            title: '审批',
            content: '对此流程审批',
            confirmText: "通过",
            cancelText: "不通过",
            success: function (res) {
                console.log(res);
                if (res.confirm) {
                    console.log('确定')
                }else{
                    console.log('取消')
                }
            }
        });
    },
    openAlert: function () {
        wx.showModal({
            content: '你确认审批通过？',
            showCancel: false,
            success: function (res) {
                if (res.confirm) {
                    console.log('确定')
                }
            }
        });
    },
    opentickets: function(e) {
        this.setData({
        modalHidden: false
        })
    },
    modalChange: function(e) {
        this.setData({
        modalHidden: true
        })
    },
    modalTap2: function(e) {
        this.setData({
        modalHidden2: false
        })
    },
    modalChange2: function(e) {
        this.setData({
        modalHidden2: true
        })
    },
    setLoading: function(e) {
        this.setData({
        loading: !this.data.loading
        })
    }
})
