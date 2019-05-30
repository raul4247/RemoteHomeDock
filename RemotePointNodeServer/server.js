var express = require('express')
var app = express()
var os = require('os')

var PORT = 3000
var ip = os.networkInterfaces()['Wi-Fi'][3].address;


app.get('/', function (req, res) {
    res.send('Up and Running!')
})

app.listen(3000, function () {
    console.log('Remote Point running on ' + ip + ':' + PORT)
})