const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todo-app',{
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.set('useCreateIndex', true);
mongoose.Promise = Promise;

module.exports.Todo = require("./todo");