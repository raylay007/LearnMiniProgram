// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "Raylay",
    age: 29,
    students: [{
        id: 1,
        name: "张三",
        age: 33
      },
      {
        id: 2,
        name: "李四",
        age: 13
      },
      {
        id: 3,
        name: "王五",
        age: 22
      },
      {
        id: 4,
        name: "赵六",
        age: 21
      },
    ],
    counter: 0,
  },
  onClickAdd() {

    //错误写法，这样不能刷新UI
    // this.data.counter += 1
    // console.log(this.data.counter)

    // 正确写法 this.setData
    this.setData({
      counter: this.data.counter + 1
    })
  },
  onClickSub() {
    this.setData({
      counter: this.data.counter - 1
    })
  }

})