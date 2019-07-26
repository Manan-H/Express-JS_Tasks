const express = require("express");
const cookieParser = require('cookie-parser');
const app = express();

let users = require("./users");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
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

app.get('/', (req, res) => {
    let printedTime = req.cookies["Current_Time"];
    res.render('index', { printedTime });
    res.end();
})

app.get('/myroute/:param', (req, res) => {
    let enteredParam = req.params.param;
    //let enteredQueries = JSON.stringify(req.query);
    let enteredQueries = req.query;
    res.render('params', { enteredParam, enteredQueries });
})

app.get('/form', (req, res) => {
    res.render('form');
})

app.post('/form', (req, res) => {
    let user = req.body;
    user.userId = "123";
    users.push(user);
    res.redirect('/result');
})

app.get('/result', (req, res) => {
    let user = users.find((user) => {
        return user.userId === "123";
    })
    res.render('result', {Username: user.username })
})

app.get('/time', (req, res) => {
    let currentDate = new Date();
    let currentTime = `${currentDate.getHours()} : ${currentDate.getMinutes()}`;
    res.send({Time: currentTime});
})

app.get('/users', (req, res) => {
    res.send(users);
})


module.exports = app;