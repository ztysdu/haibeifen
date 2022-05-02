const app = getApp();
Page({

	/**
	 * 页面的初始数据
	 */
  data: {//对象
    searchText: '',//文本框内容
    searchResultList: [],//搜索结果
    autoFocus: true,//自动聚焦
    holdKeyboard: true//focus时，点击页面的时候收齐键盘 true:不收起
  },

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
  onReady: function () {

  },
  //文本框输入
  input(e) {
    //   console.log(e)
    this.setData({
      searchText: e.detail.value.trim()//去空格处理
    })
    //根据名称进行搜索
    // this.getSearchListByName()
  },
  //根据名称进行搜索
  getSearchListByName() {
   
    let that = this
    wx.request({
      //这里的ip地址也可以换成自己服务器的公网ip
     //url: 'http://127.0.0.1:8000/search/search_keywords/',
       url: 'https://mylifemeaning.cn/search/search_keywords/',
      method: 'POST',
      header: { 'content-type': 'application/x-www-form-urlencoded;charset=utf-8' },
      data: {
        //请求的参数,参数是关键字,(发送给服务器的数据)
        keyword: that.data.searchText
      },
      success: ret => {
        try {
          console.log(ret)
          console.log(ret.data)
          // console.log(ret)
          //ret.data为服务器返回的数据集
          var data = ret.data
          //将data转化为字符串
          var json_data = JSON.stringify(data)
          //data转化为json,直接用json不可用
          var result_data = JSON.parse(json_data)
          var code = result_data.code
          var msg = result_data.msg
          //datalist是一个数组,里面的元素是字典
          var dataList = result_data.data

          var searchResultList = []
          //数组
          for (var i = 0; i < dataList.length; i++) {//对象
            let obj = {
              title: dataList[i].title,
              // 值是1是一个表格,按照表格的方式去渲染0的话按文字方式去渲染
              is_html: dataList[i].is_html,
              subtitle: dataList[i].subtitle,
              //content是内容
              content: dataList[i].content
            };
            //高亮字符串数组,dataList是数组,每一个元素是一个对象
            //高亮标题和内容(切割字符串,返回切割后的数组)
            obj.searchArrayTitle = that.getHilightStrArray(dataList[i].title, this.data.searchText)
            obj.searchArrayContent = that.getHilightStrArray(dataList[i].content, this.data.searchText)
            //searchResult是数组,里面的元素是对象
            searchResultList.push(obj)
          }
          that.setData({
            searchResultList: searchResultList
          })
          console.log(searchResultList)

        } catch (e) {
          console.log(e)
        }
      }
    })

    


  },
  // 返回一个使用key切割str后的数组，key仍在数组中
  getHilightStrArray(str, key) {
    return str.replace(new RegExp(`${key}`, 'g'), `%%${key}%%`).split('%%');
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
})

