const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: String,
    email: String,
    password: String
});

let User = mongoose.model('user', userSchema, 'user');
module.exports = User;