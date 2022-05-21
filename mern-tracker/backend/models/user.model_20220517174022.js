const mongoos = require('mongoose');

const Schema = mongoos.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    password: {
        type: String,
        required: true,
        minlength: 3
    },
}, {
    timestamps: true,
});
const User = mongoos.model('User', userSchema);
module.exports = User;