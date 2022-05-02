const app = getApp();
//下面5行是用来获取语音识别做准备
const util = require('../../utils/util.js')
const dateformat = require('../../utils/dateformat.js')
const plugin = requirePlugin("WechatSI")
// 获取**全局唯一**的语音识别管理器**recordRecoManager**
const manager = plugin.getRecordRecognitionManager()
const innerAudioContext = wx.createInnerAudioContext();

Page({
  data: {
    inputFocus: false,
    showBMP: false,
    messageList : [],  //消息列表（包括我和机器人）
    currentTranslate: {
      // 当前语音输入内容
      create: '04/27 15:37',
      text: '等待说话',
    },
    recording: false,  // 正在录音
    recordStatus: 0,   // 状态： 0 - 录音中 1- 翻译中 2 - 翻译完成/二次翻译
    inputValue:'',
    messageText:'',
    
  },


  onLoad() {
    var that = this;
    this.getRecordAuth();
    this.initRecord();
    //初始化默认消息
    var messageList = [
      {
        nickname: '客服',
        position: 'left',
        avatar: 'https://activity.vtuzx.com/doc/vtuUI/weapp/avatar/3.png',
        title:'您可能想问',
        content: [
          '一信用积分相关政策内涵',
          '二信用积分体系',
          '三信用积分加减政策',
          '四信用加减分细则',
          '五信用惠民政策',
          '六信用惩戒措施',
        ],
        messagetype: 'other'
      },
    ]
    that.setData({
      messageList: messageList
    })

  },

  //智能引导语实现点击后新的回复
  viewDetailHandler: function (event) {
    var that = this;
    console.log(event)
    console.log(event.currentTarget)
    var newquestion = event.currentTarget.dataset.question
    var newMessage = {
      nickname: '我',
      position: 'right',
      avatar: 'https://activity.vtuzx.com/doc/vtuUI/weapp/avatar/3.png',
      content: newquestion,
      messagetype: 'text'
    }
    that.data.messageList.push(newMessage)
    that.setData({
      messageList: that.data.messageList
    })
    console.log('点击了子菜单' + newquestion)
    that.getQuestion(newquestion)
  },

  /**
   * 聊天文本框内容改变事件
   * @param e
   */
  inputChangeEvent: function (e) {
    var that = this;
    that.setData({
      inputValue: e.detail.value,
      messageText: e.detail.value
    })
  },

  //点击发送消息
  sendText: function (e) {
    var that = this;
    console.log('现在文本框的内容是' + that.data.messageText)
    //文本为空不能发送
    if (that.data.messageText === ''){
      return
    }
    //文本为空不能发送
    if (typeof (that.data.messageText) ==='undefined'  ) {
      return
    }
    var newMessage = {
      nickname: '我',
      position: 'right',
      avatar: 'https://activity.vtuzx.com/doc/vtuUI/weapp/avatar/3.png',
      content: that.data.messageText,
      messagetype: 'text'
    }
    that.data.messageList.push(newMessage)
    that.setData({
      messageList: that.data.messageList
    })
    that.getQuestion(that.data.messageText)
    //清空输入框
    that.setData({
      inputValue: '',
      messageText: '',
    })
  },

  //请求后台进行回答
  getQuestion(newQuestion){
    let that = this
    wx.request({
      //这里如果想把他放在服务器的话可以用自己服务器的公网ip地址
       url: 'https://mylifemeaning.cn/search/get_question/',
       //url: 'http://127.0.0.1:8000/search/get_question/',
      // url: 'http://mylifemeaning.cn/',
      method: 'POST',
      header: { 'content-type': 'application/x-www-form-urlencoded;charset=utf-8' },
      data: {
        newQuestion: newQuestion
      },
      success: ret => {
        try {
          console.log('测试请求结果',ret)
          var data = ret.data
          var json_data = JSON.stringify(data)
          var result_data = JSON.parse(json_data)
          var code = result_data.code
          var msg = result_data.msg
          var newAnswer = result_data.data
          that.data.messageList.push(newAnswer)
          that.setData({
            messageList: that.data.messageList
          })
         
        } catch (e) {
          console.log(e)
        }
      }
    })
  },



  //下面的几个方法全部是和语音识别相关的
  /**
    * 按住按钮开始语音识别
    */
  streamRecord: function (e) {
    // console.log("streamrecord" ,e)
    let detail = e.detail || {}
    let buttonItem = detail.buttonItem || {}
    manager.start({
      lang: "zh_CN",
    })
    this.setData({
      recordStatus: 0,
      recording: true,
      currentTranslate: {
        // 当前语音输入内容
        create: util.recordTime(new Date()),
        text: '正在聆听中',
        lfrom: "zh_CN",
        lto: "zh_CN",
      },
    })

  },


  /**
   * 松开按钮结束语音识别
   */
  streamRecordEnd: function (e) {
    // console.log("streamRecordEnd" ,e)
    let detail = e.detail || {}  // 自定义组件触发事件时提供的detail对象
    let buttonItem = detail.buttonItem || {}
    // 防止重复触发stop函数
    if (!this.data.recording || this.data.recordStatus != 0) {
      console.warn("has finished!")
      return
    }
    manager.stop()
    this.setData({
      bottomButtonDisabled: true,
    })
  },


  /**
   * 初始化语音识别回调
   * 绑定语音播放开始事件
   */
  initRecord: function () {
    var that = this
    //有新的识别内容返回，则会调用此事件
    manager.onRecognize = (res) => {
      let currentData = Object.assign({}, this.data.currentTranslate, {
        text: res.result,
      })
      this.setData({
        currentTranslate: currentData,
      })
      // this.scrollToNew();
    }

    // 识别结束事件///
    manager.onStop = (res) => {
      // 取出录音文件识别出来的文字信息
      let text = res.result
      // 获取音频文件临时地址
      let filePath = res.tempFilePath
      let duration = res.duration

      if (text == '') {
        this.showRecordEmptyTip()
        return
      }

      if (res.duration < 1000) {
        util.showTips('录音时间过短')
        return
      }
      //这里是项进行的处理时间
      console.log("-----------------")
      if (typeof (that.data.inputValue) ==='undefined'  ) {
        that.data.inpuValue=''
      }
      that.setData({
        
        inputValue: that.data.inputValue +text,
        messageText: that.data.messageText + text

      })
      console.log(text)
      this.setData({
        // currentTranslate: currentData,
        recordStatus: 1,
        // lastId: lastId,
      })
      this.loginCoolead(text)
      // let lastId = this.data.lastId + 1

      wx.saveFile({
        tempFilePath: filePath,
        success: fileInfo => {
          const { savedFilePath } = fileInfo;
          const voiceKey = `historyRecords-${Date.now()}`
          // 生成笔记并保存再 storage
        },
        fail() {
          util.showModel('错误', '保存语音失败');
        }
      });
    }

    // 识别错误事件
    manager.onError = (res) => {
      this.setData({
        recording: false,
        bottomButtonDisabled: false,
      })

    }
  },

  /**
    * 识别内容为空时的反馈
    */
  showRecordEmptyTip: function () {
    this.setData({
      recording: false,
      // bottomButtonDisabled: false,
    })
    wx.showToast({
      title: "未识别到语音,请大声说话",
      icon: 'success',
      image: '../../images/no_voice.png',
      duration: 1500,
      success: function (res) {

      },
      fail: function (res) {
        console.log(res);
      }
    });
  },

  // 权限询问
  getRecordAuth: function () {
    wx.getSetting({
      success(res) {
        console.log("succ")
        console.log(res)
        if (!res.authSetting['scope.record']) {
          wx.authorize({
            scope: 'scope.record',
            success() {
              // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
              console.log("succ auth")
            }, fail() {
              console.log("fail auth")
            }
          })
        } else {
          console.log("record has been authed")
        }
      }, fail(res) {
        console.log("fail")
        console.log(res)
      }
    })
  },

  loginCoolead(text) {
    if (text.indexOf("登录") != -1) {
      wx.request({
        url: 'https://ed.coolead.com/api/auth/tokenForApp',
        header: {
          'Content-Type': 'application/json'
        },
        method: "POST",
        data: {
          "grantType": "password",
          "userName": "duzhen",
          "password": "000000"
        },
        success(res) {
          console.log(res)
          util.showTips("登录成功")
        },
        fail(err) {
          console.log(err)
          util.showToast("登录失败")
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

    console.log("onHide")
    try {
      wx.removeStorageSync('historyRecords')
    } catch (e) {
      // Do something when catch error
      console.log("清除缓存失败:")
    }
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("onUnload")
    try {
      wx.removeStorageSync('historyRecords')
    } catch (e) {
      // Do something when catch error
      console.log("清除缓存失败:")
    }
  },


});
