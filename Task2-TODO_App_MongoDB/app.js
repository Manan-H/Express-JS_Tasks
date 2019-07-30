const express = require("express");
const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.set('view engine', 'pug');
app.set('views', 'views');


const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

mongoose.connect("mongodb://localhost/todoDB", {useNewUrlParser: true})
		.then( ()=>{console.log('MongoDB has started working...')} )
		.catch(e=>console.log(e));



require("./model.js");
let todoList = mongoose.model('todoList');

let todos = require('./todos.json');

todos.forEach( (item)=>{
    new todoList(item).save()
    .then(()=>console.log("OK"))
    .catch(e=>console.log(e));
});


app.get('/', (req, res) => {
    
    todoList.find({}).then((todos) => res.render("todos", { "todoList": todos }) )
})


app.post('/', (req, res) => {

    let newTodo = {
        todoTitle: req.body.todoTitle
    }
    new todoList(newTodo).save();
    res.redirect('/');
})


app.get('/edit/:id', (req, res) => {
    todoList.find({_id: req.params.id}).then(todo => res.render("edit", { "todo": todo }))
})


app.post('/edit/:id', (req, res) => {
    todoList.findByIdAndUpdate(req.params.id, {todoTitle: req.body.todoTitle}, {new: true}, (err, todo) => {
            if (err) return res.status(500).send(err);
            return res.redirect('/');
        })
})


app.get('/delete/:id', (req, res) => {
    todoList.findByIdAndRemove(req.params.id, (err, todo) => {
        if (err) return res.status(500).send(err);
        return res.redirect('/');
    });
})

module.exports = app;