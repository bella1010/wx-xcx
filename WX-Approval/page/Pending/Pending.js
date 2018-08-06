
Page({
    data: {
        inputShowed: false,
        inputVal: "",
        list: [
        {   
            id:"list_1",
            title:"行政部--预算申请",
            pages: ['detail'],
        },
        {   
            id:"list_2",
            title:"伍荣聪--招待费报销申请单",
            pages: ['detail'],
        },
        {
            id:"list_3",
            title:"赵媛--差旅申请单详情",
            pages: ['detail'],
        },
        {
            id:"list_4",
            title:"行政部--预算申请",
            pages: ['detail'],
        },
        {
            id:"list_5",
            title:"行政部--预算申请",
            pages: ['detail'],
        },
        {
            id:"list_6",
            title:"赵媛--差旅申请单详情",
            pages: ['detail'],
        },
        {
            id:"list_7",
            title:"行政部--预算申请",
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