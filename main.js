var express = require('express')
var bodyparser = require('body-parser')
var app = express()

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
    extended: true
}))

app.get('/', (request, response) => {
    resonse.send("API is working!")
})

app.use('/register', require('./models/user.js'));
app.use('/laptop', require('./models/laptop.js'));
app.use('/zone_data', require('./models/zones.js'));
app.use('/ac', require('./models/ac.js'));
app.use('/mobiles', require('./models/mobiles.js'));
app.use('/hospitals', require('./models/hospitals.js'));

app.listen(8886, function () {
    console.log('Server Running');
})