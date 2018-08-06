
Page({
    data: {
        inputShowed: false,
        inputVal: "",
        list: [
        {   
            id:"list_1",
            title:"伍荣聪--差旅费申请单详情",
            pages: ['detail'],
        },
        {   
            id:"list_2",
            title:"冼广升--差旅费申请单详情",
            pages: ['detail'],
        },
        {
            id:"list_3",
            title:"佘玲玲--差旅费申请单详情",
            pages: ['detail'],
        },
        {
            id:"list_4",
            title:"佘玲玲--差旅费申请单详情",
            pages: ['detail'],
        },
        {
            id:"list_5",
            title:"李飞--差旅费申请单详情",
            pages: ['detail'],
        },
        {
            id:"list_6",
            title:"李飞--差旅费申请单详情",
            pages: ['detail'],
        },
        {
            id:"list_7",
            title:"余诗文--差旅费申请单详情",
            pages: ['detail'],
        },
        {
            id:"list_8",
            title:"龚郑宜--差旅费申请单详情",
            pages: ['detail'],
        },
        {
            id:"list_9",
            title:"李宝红--差旅费申请单详情",
            pages: ['detail'],
        },
        {
            id:"list_10",
            title:"余诗文--差旅费申请单详情",
            pages: ['detail'],
        },
        {
            id:"list_11",
            title:"龚郑宜--差旅费申请单详情",
            pages: ['detail'],
        },
        {
            id:"list_12",
            title:"李宝红--差旅费申请单详情",
            pages: ['detail'],
        },
        {
            id:"list_13",
            title:"余诗文--差旅费申请单详情",
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