//index.js
//获取应用实例
var app = getApp();
var CONFIG = require('../../utils/config.js');
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
Page({
 data: {
 //初始化一个 banners 数组
 imgUrls: [
   'http://img.cecport.com/cms/red/ad/ff808081581e6aa4015851f4f696013c.jpg',
   'http://img.cecport.com/cms/red/ad/ff808081587194600158751885a30018.jpg',
   'http://img.cecport.com/cms/red/ad/ff80808157e0aac5015808dcaae70069.png'
   ], 
   indicatorDots: false,
   autoplay: false,
   interval: 5000,
   duration: 1000,
  tabs: [
    "首页", 
    "最新", 
    "最热"
    ], 


hotgoods: [
      {
        "name": "",
        "summary": "",
        "ext_tag": "/images/11.png",
        "pic_url": "/images/11.png",
        "url": "../detail/detail?id={{ item.productId }}"
      },
      {
        "name": "",
        "summary": "",
        "ext_tag": "/images/12.png",
        "pic_url": "/images/12.png",
        "url": "../detail/detail?id={{ item.productId }}"
      },
      {
        "name": "",
        "summary": "",
        "ext_tag": "/images/13.png",
        "pic_url": "/images/13.png",
        "url": "../detail/detail?id={{ item.productId }}"
      },
      {
        "name": "创客大赛",
        "summary": "",
        "ext_tag": "/images/1.png",
        "pic_url": "/images/1.png",
        "url": "../detail/detail?id={{ item.productId }}"
      },
      {
        "name": "无线充电",
        "summary": "",
        "ext_tag": "/images/2.png",
        "pic_url": "/images/2.png",
        "url": "../detail/detail?id={{ item.productId }}"
      },
      {
        "name": "PCB定制",
        "summary": "",
        "ext_tag": "/images/3.png",
        "pic_url": "/images/3.png",
        "url": "../detail/detail?id={{ item.productId }}"
      },
      {
        "name": "热门活动",
        "summary": "",
        "ext_tag": "/images/4.png",
        "pic_url": "/images/4.png",
        "url": "../detail/detail?id={{ item.productId }}"
      },
      {
        "name": "BOM服务",
        "summary": "",
        "ext_tag": "/images/5.png",
        "pic_url": "/images/5.png",
        "url": "../detail/detail?id={{ item.productId }}"
      },
      {
        "name": "实验室",
        "summary": "",
        "ext_tag": "/images/6.png",
        "pic_url": "/images/6.png",
        "url": "../detail/detail?id={{ item.productId }}"
      }
    ],




 activeIndex: "0",    
 //以下四项设置 swiper 组件的参数值
 indicatorDots: true,
 autoplay: true, //开启自动切换
 interval: 5000, //自动切换时间间隔
 duration: 1000 //滑动动画时长
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
    },
    tabClick: function (e) {
        this.setData({
            sliderOffset: e.currentTarget.offsetLeft,
            activeIndex: e.currentTarget.id
        });
    }
});