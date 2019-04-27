let http = require('http')
let url = require('url')
let fs = require('fs')

let server = http.createServer((req, res) => {
  let pathname = url.parse(req.url).pathname
  fs.readFile(pathname.substring(1), (err, data) => {
    if (err) {
      res.writeHead(404, {
        'Content-Type': 'text/html'
      })
    } else {
      res.writeHead(200, {
        'Content-Type': 'text/html'
      })
      res.write(data.toString())
    }
    res.end()
  })
})
server.listen(3000, '127.0.0.1', () => {
  console.log('服务器已开始运行')
})
