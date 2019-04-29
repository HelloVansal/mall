var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var Goods = require('./../models/goods')

// 连接mongodb数据库
mongoose.connect('mongodb://127.0.0.1:27017/dumall')

// 判断是否连接成功
mongoose.connection.on('connected', () => {
  console.log('MongoDB 连接成功')
})
mongoose.connection.on('error', () => {
  console.log('MongoDB 连接失败')
})
mongoose.connection.on('disconnected', () => {
  console.log('MongoDB 连接断开')
})

/* GET users listing. */
router.get('/', function (req, res, next) {
  Goods.find({}, (err, doc) => {
    if (err) {
      res.json({
        status: '1',
        msg: err.message
      })
    } else {
      res.json({
        status: '0',
        msg: '',
        result: {
          count: doc.length,
          list: doc
        }
      })
    }
  })
  res.send('respond with a resource')
})

module.exports = router
