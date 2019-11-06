App({
  //小程序启动
  onLaunch(options) {
    // 第一次打开
    // options.query == {number:1}
    // console.info('App onLaunch');
  },
  //小程序切换到前台
  onShow(options) {
    // 从后台被 scheme 重新打开
    // options.query == {number:1}
  },
  //小程序切换到后台
  onHide() {
    // 隐藏
  },
  //小程序出错
  onError(msg) {
    console.log(msg)
  },
  globalData: {
    foo: true,
  }
});
