// pages/home/home.js

const app = getApp();

Page({

  data: {
    des: "",
    isLoad: true
  },

  onLoad() {
    console.log(app.golobalData.appName)
    console.log(app.golobalData.appId)

    const _this = this;

    wx.request({
      url: 'http://123.207.32.32:8000/recommend',
      //三种写法
      // success(res) {
      //   // console.log(res)

      //   const data = res.data
      //   console.log(data)
      //   console.log(this)
      //   _this.setData({
      //     des: data.最新动态
      //   })
      // }

      success: (res) => {
        // console.log(res)
        const data = res.data
        this.setData({
          des: data.最新动态
        })
      }

      // success: function(res){
      //   console.log(res)
      // }
    })
  },
  onContact(e) {
    console.log(e)
  },
  handleGetUserInfo(e) { //ES6对象增强写法
    console.log(e)
    console.log(e.detail)
  },
  handleGetPhoneNumber(e) {
    console.log(e)
  }
})