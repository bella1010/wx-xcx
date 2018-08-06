
Page({
    data: {
        inputShowed: false,
        inputVal: "",
        list: [
        {   
            id:"list_1",
            title:"行政中心--年度预算分派",
            pages: ['detail'],
        },
        {   
            id:"list_2",
            title:"公司领导--年度预算分派",
            pages: ['detail'],
        },
        {
            id:"list_3",
            title:"行政中心--年度预算分派",
            pages: ['detail'],
        }
        ]
    },
    showInput: function () {
        this.setData({
            inputShowed: true
        });
    },
    hideInput: function () {
        this.setData({
            inputVal: "",
            inputShowed: false
        });
    },
    clearInput: function () {
        this.setData({
            inputVal: ""
        });
    },
    inputTyping: function (e) {
        this.setData({
            inputVal: e.detail.value
        });
    },
    onLoad: function(){
        this.setData({
           
        });
    }
});