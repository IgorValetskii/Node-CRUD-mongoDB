const Race = require('../models/races');
const Stage = require('../models/stages');
const User = require('../models/user');

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

}

module.exports = Service;
