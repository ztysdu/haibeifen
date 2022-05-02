const app = getApp();

let jsondata_1 = require('menu_data_1.js');
let jsondata_2 = require('menu_data_2.js');
let jsondata_3 = require('menu_data_3.js');
let jsondata_4 = require('menu_data_4.js');
let jsondata_5 = require('menu_data_5.js');
let jsondata_6 = require('menu_data_6.js');
let jsondata_7 = require('menu_data_7.js');

Page({
  data: {
  },
  changeFather(e) {
    console.log("当前选择第" + (parseInt(e.detail.toString()) + 1).toString() + "个父菜单")

  },
  changeChild(e) {
    console.log("当前选择第" + (parseInt(e.detail.toString()) + 1).toString() + "个子菜单")
  },
  onLoad() {
    var that = this;
    that.setData({
      data_1: jsondata_1.dataList_1,
      data_2: jsondata_2.dataList_2,
      data_3: jsondata_3.dataList_3,
      data_4: jsondata_4.dataList_4,
      data_5: jsondata_5.dataList_5,
      data_6: jsondata_6.dataList_6,
      data_7: jsondata_7.dataList_7,
    })

    console.log('json数据如下')
  }
});
