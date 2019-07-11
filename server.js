const express = require('express')
const path = require('path')
const port = process.env.PORT || 8080
const app = express()

// Create a static website
app.use(express.static(path.join(__dirname, '/dist/')))

// Capture all requests (SPA routes) and send to index.html
app.get(/.*/, function (req, res) {
  res.sendfile(path.join(__dirname, '/dist/index.html'))
})

app.listen(port)
