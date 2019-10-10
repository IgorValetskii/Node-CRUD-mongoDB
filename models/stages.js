const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stageSchema = new Schema({
    title : String,
    description : String,
    location : String,
    league: {
        type: Schema.Types.ObjectId
}
});

const Stage = mongoose.model('stage', stageSchema);
module.exports = Stage;
