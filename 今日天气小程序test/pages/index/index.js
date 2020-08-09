// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region:['广东省','广州市','海珠区'],
    now:''
  },
  changeRegion:function(e){ 
    this.setData({  //改变region变量的值
      region:e.detail.value
    })
    this.getWeater(); //更新天气，调用getWeater函数
  },
  
  getWeater:function(){
    //var
    var that=this; //this不可以直接在微信API函数内部使用
    wx.request({
      url: 'https://free-api.heweather.net/s6/weather/now?', //location不能是固定的
      data:{ //提供信息数据
          location:that.data.region[1], //提供市级单位即可
          key:'0069f87cd48c4b9f8be02ac254867926'
        },
        success:function(res){
          //console.log(res.data) //返回的数据显示在控制台上
         that.setData({now:res.data.HeWeather6[0].now})
        }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getWeater();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})