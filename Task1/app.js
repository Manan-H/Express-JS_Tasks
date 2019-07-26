const express = require("express");
const cookieParser = require('cookie-parser');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('cors')());
app.use(cookieParser());
app.use(express.static('public'));
app.set('view engine', 'pug');
app.set('views', 'views')


app.use('/', (req, res, next) => {
    let currentDate = new Date();
    let currentTime = `${currentDate.getHours()} : ${currentDate.getMinutes()} : ${currentDate.getSeconds()}`
    res.cookie('Current_Time', currentTime);
    next();
})

app.use('/', require('./routes/index'));

module.exports = app;