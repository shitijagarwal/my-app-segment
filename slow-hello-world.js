const port = 80
require('http')
  .createServer((req, res) => {
    console.log('url:', req.url)
    console.log('now we will slow down and block and consume CPU...')
    for (var i=0; i< 100000000; i++) {}
    res.end('hello shitij')
  })
  .listen(port, (error)=>{
    console.log(`server is running on ${port}`)
  })
