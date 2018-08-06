Page({
    data: {
        LInput:1,
                LinputValue:1,
                Ltolue:'',
                proprice:10,
                mprototal:50,
                proMOQ:5,
        radioItems: [
            {name: '全选', value: '0', checked: true}
        ],
        checkboxItems: [
            {   
                id:'pto1',
                protitle: 'Q13MC1462000200',
                probrandt:'NXP',
                proED:'2-3个工作日', 
                value: '0', 
                checked: true,
                Invalidlist:false
            },
            {   
                id:'pto2',
                protitle: 'Q13MC1462000200',
                probrandt:'NXP',
                proED:'2-3个工作日',               
                value: '1', 
                checked: '',
                Invalidlist:false
            },
            {
                id:'pto3',
                protitle: 'A13MC1462000205',
                probrandt:'NXP',
                proED:'2-3个工作日',
                value: '2',
                checked: '',
                Invalidlist:true
             }
        ],
         list: [
            {
                id:'Invalid_1',
                protitle: 'S13MC1462000200',
                probrandt:'NXP',
                proED:'2-3个工作日',
                proprice:10,
                proMOQ:5,
                value: '', 
                checked: ''
                }
        ],

    },
    checkboxChange: function (e) {
        console.log('checkbox发生change事件，携带value值为：', e.detail.value);
        var checkboxItems = this.data.checkboxItems, 
            values = e.detail.value;
        for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
            checkboxItems[i].checked = false;
            for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
                if(checkboxItems[i].value == values[j] && !this.Invalidlist){
                    checkboxItems[i].checked = true;
                    break;
                }
            }
        }
        this.setData({
                checkboxItems: checkboxItems
        });       
    },

     openConfirm: function () {
        wx.showModal({
            title: '确定要删除该产品吗？',
            content: '',
            confirmText: "确定",
            cancelText: "取消",
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
     onLoad: function () {           
        console.log('onLoad')      
    },

    checkall: function (e) {
        console.log('全选/全不选');

        var checkboxItems = this.data.checkboxItems, 
            values = e.detail.value;
        for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
            checkboxItems[i].checked = false;
            for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
                if(checkboxItems[i].value == values[j] && !this.Invalidlist){
                    checkboxItems[i].checked = true;
                    break;
                }
            }
        }
        this.setData({
                checkboxItems: checkboxItems
        });  
    },

   LbindKeyInput: function(e) {
       console.log('直接输入数字计算');
        this.setData({
            LinputValue: e.detail.value
        })
        var MQU = this.data.Ltext
        var LIV = this.data.LinputValue
        var PROp= this.data.proprice
        if(LIV>1){
            this.setData({
                LInput:LIV,
                LinputValue: e.detail.value,
                Ltolue: LIV*MQU,
                mprototal:LIV*MQU*PROp 
            })
        } 
        else{
            this.setData({
                LInput:1,
                LinputValue:1,
                Ltolue: MQU
            })
        } 
        console.log(LIV,MQU)
  },

  Lreduce: function(e) {
        console.log('购买数量减一');
        var LIV = this.data.LinputValue-1
        var MQU = this.data.proMOQ
        var PROp= this.data.proprice
        if(LIV>0){
            this.setData({
                LInput:LIV,
                LinputValue:LIV,
                Ltolue: LIV*MQU,
                mprototal:LIV*MQU*PROp    
            })
        }  
  },
  Lplus: function(e) {
        console.log('购买数量加一');
        var LIV = this.data.LinputValue+1
        var MQU = this.data.proMOQ
        var PROp= this.data.proprice
        if(LIV>-1){
            this.setData({
                LInput:LIV,
                LinputValue:LIV,
                Ltolue: LIV*MQU, 
                mprototal:LIV*MQU*PROp   
            })
        }  
  },
  
  closepro: function (e) {
      console.log('关闭失效产品');
      var id = e.currentTarget.id,list = this.data.list;
      for (var i = 0, len = list.length; i < len; ++i) {
            if (list[i].id == id) {
                list[i].close = !list[i].close
            } else {
                list[i].close = false
            }
        }
        this.setData({
            list: list
        });  
  }










    
})
