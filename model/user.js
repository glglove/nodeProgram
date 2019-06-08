const mongoose = require('mongoose');
const users = new mongoose.Schema({
    name: {
        type: String,
    },
    pwd: {
        type: String,

    }
})

let Users =  mongoose.model('Users', users);

module.exports = Users