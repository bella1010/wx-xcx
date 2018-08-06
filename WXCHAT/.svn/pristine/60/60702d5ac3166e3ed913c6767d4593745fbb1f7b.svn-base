Page({
    data: {
        protitle: 'Q13MC1462000200',
        probrandt:'NXP',
        proDP:'国内(含增税)',
        proED:'2-3个工作日',
        LInput:1,
        LinputValue:1,
        Ltolue:5,
        proprice:10,
        mprototal:50,
        proMOQ:5,
        

        activeIndex: "0",
        sliderOffset: 0,
        sliderLeft: 0
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
    },
    LbindKeyInput: function(e) {
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
  }

});
