const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stageSchema = new Schema({
    title : String,
    description : String,
    location : String,
    leagues: [{
        type: Schema.Types.ObjectId,
        ref : 'league'
    }]
});

const Stage = mongoose.model('stage', stageSchema);
module.exports = Stage;
