const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema ({

    todoTitle: {
        type: String
    }

});

mongoose.model('todoList', todoSchema);