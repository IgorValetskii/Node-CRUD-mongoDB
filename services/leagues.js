const User = require('../models/user');
const League = require('../models/leagues');

class Service {
    constructor() {

    }

    async getAllLeagues() {
        const leagues = await League.find({});
        return leagues;
    }

    async getLeague(userId) {
        const league = await League.findById(userId);
        return league;
    }

    async addLeague(body) {
        const newLeague = await new League(body);
        console.log('newLeague', newLeague);
        const league = await newLeague.save();

        return league;
    }

    async updateLeague(leaguesId, newLeague) {
        const result = await League.findByIdAndUpdate(leaguesId, newLeague, {new: true});
        return result;
    }

    async deleteLeague(leaguesId) {
        const result = await League.findByIdAndDelete(leaguesId);
        console.log(result);
        return result;
    }

    async addLeagueUser(body, leaguesId) {

        const league = await League.findById(leaguesId);
        console.log(league);
        league.users.push(body._id);
        await league.save();
        return league;
    }

    async getLeagueUsers(leaguesId) {
        const league = await League.findById(leaguesId).populate('users');
        return league;
    }

}

module.exports = Service;
