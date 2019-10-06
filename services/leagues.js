const User = require('../models/user');
const League = require('../models/leagues');

class Service {
    constructor(){

    }

    async getAllLeagues(){
        const leagues = await League.find({});
        return leagues;
    }

    async getLeague(userId){
        const league = await League.findById(userId);
        return league;
    }

    // async addLeague(body, leagueId){
    //     const newLeague = await new League(body);
    //     console.log('newLeague',newLeague);
    //     const user = await User.findById(leagueId);
    //     newLeague.users = user;
    //     const league = await newLeague.save();
    //
    //     user.leagues.push(newLeague);
    //     await user.save();
    //     return league;
    // }

    async updateUser(userId, newUser){
        const result = await User.findByIdAndUpdate(userId, newUser, {new: true});
        return result;
    }

    async deleteUser(userId){
        const result = await User.findByIdAndDelete(userId);
        console.log(result);
        return result;
    }
}

module.exports = Service;
