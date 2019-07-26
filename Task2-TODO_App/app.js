const express = require("express");
const app = express();

let todoList = require("./todos");
let todo_id = 0;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.set('view engine', 'pug');
app.set('views', 'views');


app.get('/', (req, res) => {
    res.render("todos", { todoList });
    res.end();
})

app.post('/', (req, res) => {
    let todo = req.body;
    todo.todoId = todo_id;
    todo_id++;
    todoList.push(todo);
    res.render("todos", { todoList });
    res.end();
})

app.get('/edit/:id', (req, res) => {
    let todo = todoList.find(todo => {
        return todo.todoId == Number(req.params.id);
    })
    res.render("edit", { todo });
})

app.put('/edit/:id', (req, res) => {
    let todo = todoList.find(todo => {
        return todo.todoId === Number(req.params.id);
    })
    todo.todoTitle = req.body.todoTitle;
    res.redirect('/');
})

app.get('/delete/:id', (req, res) => {
    todoList = todoList.filter(todo => {
        return todo.todoId !== Number(req.params.id);
    })
    res.redirect('/');
})

module.exports = app;