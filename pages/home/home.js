// pages/home/home.js
Page({
  data: {
    name: 'kelly',
    age: 18,
    movies: [
      {id:1, name: 'test'},
      {id:2, name: 'why'},
      {id:3, name: 'ceshi'},
    ],
    counter: 0
  },
  handleBtnClick() {
    console.log('click')
    // 错误的做法，界面不刷新
    // this.data.counter +=1
    // 2、this.setData()
    this.setData({
      counter: this.data.counter += 1
    })
    // console.log(this.data.counter)
  },
  handleBtnClickSub() {
    // console.log('剑豪')
    this.setData({
      counter: this.data.counter -= 1
    })
  }
})