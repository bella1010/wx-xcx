
var postsData = require('../../../data/posts-data.js');

Page({

  onLoad:function(option){
    var postId = option.id;
    // console.log(postId)

    var postData = postsData.postList[postId];
    //console.log(postData);


    // this.data.postData = postData
    this.setData({
      postData: postData
    });

    wx.setStorageSync('key',"风暴影响");
    wx.setStorageSync('key', {
      game: "风暴影响",
      deve: "风"
    });
    wx.setStorageSync('key', {
      game: "风暴影响",
      deve: "风"
    }) 

  },
  onCollectionTap: function (event) {
    var game = wx.getStorageSync('key');
    console.log(game) 
  },
  onShareTap: function (event) {
    // wx.removeStorageSync('key');
    wx.clearStorageSync();
  }
})