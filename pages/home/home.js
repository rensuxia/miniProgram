// pages/home/home.js
const app = getApp()
// console.log(app.gloalData.apiUrl);
Page({
  // 第二件事情初始化数据
  data: {
    message: 'message哈哈哈',
    list: [
      {
        title: 'js大全',id: 1
      },
      {
        title: '小程序初体验',id: 2
      }
    ]
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
    // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res);
        // this.setData({
        //   userInfo: res.userInfo,
        //   hasUserInfo: true
        // })
      }
    })
  },
  // 注册一个页面
  //--1、监听页面的生命周期函数--------//
  // 页面初次渲染时候的回调的函数
  onLoad(options) {
    // console.log('onLoad')
    wx.request({
      url: 'xxx',
      success: (res) => {
        console.log(res)
        if(res) {
          this.setData({
            list: res.data.data
          })
        }
      }
    })
  },
  // 页面显示出来时回调的函数
  onShow: function () {
    // Do something when page show.
    // console.log('onShow')
  },
  onHide() {
    // Do something when page hide.
    // console.log('onHide')
  },
  onReady() {
    // console.log('onReady')
  },
  onUnload() {
    // console.log('onUnload')
  },
  //--3、监听wxml的相关的一些事件--------//
  handleGetUserInfo(event) {
    console.log(event.detail.userInfo.nickName)
  },
  handleViewClick(e) {
  console.log('哈哈哈被点击了')
  },
  //--4、监听其他事件--------//
  // 监听页面滚动
  onPageSrcoll(obj) {
    console.log(obj)
  },
  // 下拉加载更多，监听页面滚动到底部
  onReachBottom() {
    console.log('页面加载到底部')
  },
  // 监听下拉刷新
  onPullDownRefresh() {
    console.log('下拉刷新')
  }
})