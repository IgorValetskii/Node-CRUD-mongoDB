const User = require('../models/user');
const League = require('../models/leagues');

class Service {
    constructor(){

    }

    async getAllUsers(){
        const users = await User.find({});
        return users;
    }

    async getUser(userId){
        const user = await User.findById(userId);
        return user;
    }

    async addUser(body){
        const newUser = await new User(body);

        const user = await newUser.save();
        
        return user;
    }

    async updateUser(userId, newUser){
        const result = await User.findByIdAndUpdate(userId, newUser, {new: true});
        return result;
    }

    async deleteUser(userId){
        const result = await User.findByIdAndDelete(userId);
        console.log(result);
        return result;
    }

    // async addLeague(body, userId){
    //     const newLeague = await new League(body);
    //     console.log('newLeague',newLeague);
    //     const user = await User.findById(userId);
    //     newLeague.users = user;
    //     const league = await newLeague.save();
    //
    //     user.leagues.push(newLeague);
    //     await user.save();
    //     return league;
    // }

    // async getUserleagues(userId){
    //     // const user = await User.findById(userId).populate('leagues');
    //     const user = await User.findById(userId);
    //     console.log(user.leagues);
    //     // user.leagues.forEach(i => {
    //     //     console.log(i)
    //     // });
    //     // const a = user.leagues.[0];
    //     // console.log(a);
    //     return user;
    // }
}

module.exports = Service;
