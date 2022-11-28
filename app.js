const express = require('express')
const https = require('https')
const fs = require('fs')
const app = express()
const port = 443

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

https.createServer({
  key: fs.readFileSync('./certs/server.key'),
  cert: fs.readFileSync('./certs/server.cert')
}, app).listen(port, () => {
  console.log('Listening...' + port)
})
