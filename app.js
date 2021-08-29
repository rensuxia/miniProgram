App({
  // 生命周期函数：后台存活2个小时
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function (options) {
    // console.log(options);
    // 获取用户信息
    wx.getUserProfile({
      success: function(res) {
        console.log(res)
      }
    })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    // console.log(options);
    switch (options.scene) {
      case 1001:
        break;
      case 1005:
        break;
    }

  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   * 关闭的时候执行
   */
  onHide: function () {

  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {

  },
  gloalData: {
    name: '刘大利',
    age: 18,
    apiUrl: 'http://172.20.52.77:8080'
  }
})
