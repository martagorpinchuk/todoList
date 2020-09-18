const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    name: {
        type: String,
        //  unique: true,
        // required: true
    },
    description: {
        type: String
    },
    completed:{
        type: Boolean,
     //   default: false
    }
});

const todoModel  = mongoose.model("Todo", todoSchema);

module.exports = todoModel;