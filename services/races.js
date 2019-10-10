const Race = require('../models/races');
const League = require('../models/leagues');
const Stage = require('../models/stages');
const User = require('../models/user');
const mongoose = require('mongoose');

class Service {
    constructor() {

    }

    async getAllRaces() {
        const races = await Race.find({});
        return races;
    }

    async getRace(racesId) {
        const race = await Race.findById(racesId);
        return race;
    }

    async addRace(body) {
        const newRace = await new Race(body);
        const race = await newRace.save();
        console.log('newRace', newRace);
        // await race.leagues.push(body.leagueId);

        return race;
    }

    async updateRace(racesId, newRace) {
        const result = await Race.findByIdAndUpdate(racesId, newRace, {new: true});
        return result;
    }

    async deleteRace(racesId) {
        const result = await Race.findByIdAndDelete(racesId);
        console.log(result);
        return result;
    }

    async getRaceStages(season) {
        // const id = mongoose.Types.ObjectId(id);
        const result = await League.aggregate([
            {
                $match: {season: season}
            },
            // {
            //     $project: {
            //         _id: '$_id',
            //
            //         title: '$title',
            //         description: '$description'
            //     }
            // },
            {
                $lookup: {
                    from: 'stages',
                    localField: '_id',
                    foreignField: 'league',
                    as: 'stagesArr'
                }
            },

            {
                $unwind: {
                    path: '$stagesArr',
                    preserveNullAndEmptyArrays: true
                }
            },

            {
                $project: {
                    'stagesArr._id': '$stagesArr._id',
                    'stagesArr.title': '$stagesArr.title',
                    'stagesArr.description': '$stagesArr.description',
                    'stagesArr.location': '$stagesArr.location'
                }
            },

            {
                $lookup: {
                    from: 'races',
                    localField: 'stagesArr._id',
                    foreignField: 'stage',
                    as: 'stagesArr.racesArr',
                }
            },
            // {
            //     $project: {
            //         'stagesArr.racesArr._id': '$stagesArr.racesArr._id',
            //         'stagesArr.racesArr.title': '$stagesArr.racesArr.title',
            //         'stagesArr.racesArr.description': '$stagesArr.racesArr.description',
            //         'stagesArr.racesArr.location': '$stagesArr.racesArr.location'
            //     }
            // },

        ]);
        return result;
    }


}

module.exports = Service;
