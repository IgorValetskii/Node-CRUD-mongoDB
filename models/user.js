const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName : String,
    lastName : String,
    userName : String,
    // leagues :[{
    //     type: Schema.Types.ObjectId,
    //     ref: 'league'
    // }
    //
    // ]
});

const User = mongoose.model('user', userSchema);
module.exports = User;
