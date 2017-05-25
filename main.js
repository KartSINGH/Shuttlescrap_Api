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
    response.send('ok');

})

app.use('/register', require('./models/user.js'));
app.use('/laptop', require('./models/laptop.js'));

app.listen(8888, function () {
    console.log('Server Running');
})