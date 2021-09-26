// pages/kj/ForAndSum/index.js
var s, a, sum; //定义起点数、终点数和求和结果三个全局变量
Page({
  sNum: function(e) {
    s = parseInt(e.detail.value); //将input组件value值转换为整数并赋值
  },
  aNum: function(e) {
    a = parseFloat(e.detail.value); //将input组件value值转换为整数并赋值
  },
  calc: function() {
    sum =s*1;
    for (var i = 1; i <= 5; i++) {
      sum = sum *(1+a*1); //利用for循环求和
    }
    this.setData({
      sum: sum //将全局变量sum的值渲染到视图层
    })
  }
})