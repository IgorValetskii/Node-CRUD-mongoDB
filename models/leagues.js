const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const leagueSchema = new Schema({
    title : {
        type: String,
        required: true
    },
    description : String,
    season : String,
    users: [{
        type: Schema.Types.ObjectId,
        ref : 'user'
    }]
});

const League = mongoose.model('league', leagueSchema);
module.exports = League;
