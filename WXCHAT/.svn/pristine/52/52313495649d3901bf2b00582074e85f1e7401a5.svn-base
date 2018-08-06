var sliderWidth = 100; // 需要设置slider的宽度，用于计算中间位置
var functions = require('functions.js')
var url = 'http://img.cecport.com/tmp/WXTdatabase'
var pageSize = 20
Page({
    data: {
        tabs: ["免费样片", "热门样片"],
        array:[{
          src: 'http://img.cecport.com/index/2016/09/05/2016090514085202732.png',
          protitle: 'MAX232AMJE/883B',
          proprice:'¥ 27.26'
        },
        {
          src: 'http://img.cecport.com/index/2016/09/05/2016090514132292857.png',
          protitle: 'MAX660CPA+',
          proprice:'¥ 7.10'
        },
        {
          src: 'http://img.cecport.com/index/2016/09/05/2016090514143603634.png',
          protitle: 'MAX8521ETP+',
          proprice:'¥ 7.10'
        },
        {
          src: 'http://img.cecport.com/index/2016/09/05/2016090514152710113.png',
          protitle: 'MAX3387EEUG+',
          proprice:'¥ 28.06'
        }],

        
        activeIndex: "0",
        sliderOffset: 0,
        sliderLeft: 0,

        films: [],
        hasMore: true,
        showLoading: true,
        loadMoreLoading: false,
        start: 0
    },
    onPullDownRefresh: function () {
        console.log('onPullDownRefresh', new Date())
    },
    scroll: function(e){
        //console.log(e)
    },







    onLoad: function () {
        var that = this;
        wx.getSystemInfo({
            success: function(res) {
                that.setData({
                    sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2
                });
            }
        });

        functions.getCity(function(city){
            functions.fetchFilms.call(that, url, city, 0, pageSize, function(data){
                that.setData({
                showLoading: false
                })
            })
        })
    },

    loadMore: function(){
        var that = this
        functions.getCity(function(city){
        that.setData({
            loadMoreLoading: true
        })
        functions.fetchFilms.call(that, url, city, that.data.start, pageSize, function(data){
            that.setData({
            loadMoreLoading: false
            })
        })
        })
    },
    viewDetail: function(e){
        var ds = e.currentTarget.dataset;
        wx.navigateTo({
        url: '../detail/detail?id=' + ds.id + '&title=' + ds.title + '&type=coming'
        })
    },



    tabClick: function (e) {
        this.setData({
            sliderOffset: e.currentTarget.offsetLeft,
            activeIndex: e.currentTarget.id
        });
    }
});