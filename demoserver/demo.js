let user = require('./User')
console.log(user.userName)

let http = require('http')
let url = require('url')
let util = require('util')
let server = http.createServer((req, res) => {
  res.stautsCode = 200
  let strUrl = util.inspect(url.parse(req.url))
  res.end(strUrl)
})
server.listen(3000, '127.0.0.1', () => {
  console.log('服务器以开始运行')
})
