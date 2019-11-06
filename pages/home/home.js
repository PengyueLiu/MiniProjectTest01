var app = getApp();
var appName = app.globalData.appName;
//console.log(appName);
Page({
  data: {
    name: "lpy",
    students: [
      {id:"001",name:"小明",age:18},
      {id:"002",name:"小红",age:19},
      {id:"003",name:"小兰",age:20}
    ],
    counter: 0,
    view: 'dingtalk',
    staffA: {firstName: 'san', lastName: 'zhang'},
    staffB: {firstName: 'si', lastName: 'li'},
    staffC: {firstName: 'wu', lastName: 'wang'},
    list:['1', '2', '3', '4'],
    username: false,
  },
  handleAdd(event) {
    console.log(event);
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleSub() {
    this.setData({
      counter: this.data.counter - 1
    })
  },
  onLoad(){
    /*dd.httpRequest({
      url: 'http://httpbin.org/post',
      method: 'POST',
      data: {
        from: '钉钉',
        production: 'Dingtalk',
      },
      dataType: 'json',
      success: function(res) {
        dd.alert({content: 'success'});
        console.log(res)
      },
      fail: function(res) {
        dd.alert({content: 'fail'});
      },
      complete: function(res) {
        //dd.alert({content: 'complete'});
      }
    });*/
  },
  onPullDownRefresh() {
    // 页面被下拉
    console.log("下拉刷新")
  },
  bringToFront(e) {
    console.log(e);
    const { value } = e.target.dataset;
    const list = this.data.list.concat();
    const index = list.indexOf(value);
    if (index !== -1) {
      list.splice(index, 1);
      list.unshift(value);
      this.setData({ list });
    }
  }
});
