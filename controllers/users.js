// const User = require('../models/user');
const Service = require('../services/users');
const service = new Service();




class Controller {
    constructor() {

    }

    async getAllUsers(req, res, next) {
        const result = await service.getAllUsers();
        res.status(200).json(result);
    }

    async getUser(req, res, next) {
        const {userId} = req.params;
        const result = await service.getUser(userId);
        res.status(201).json(result);
    }

    async addUser(req, res, next) {
        const body = req.body;
        const result = await service.addUser(body);
        res.status(201).json(result);

    }


    async updateUser(req, res, next) {
        const {userId} = req.params;
        const newUser = req.body;
        const result = await service.updateUser(userId,newUser);
        res.status(200).json(result);
    }

    async deleteUser(req, res, next){
        const {userId} = req.params;
        const result = await service.deleteUser(userId);
        if (result) res.status(200).send('User successfully deleted');
    }

    // async getUserLeagues(req,res){
    //     const {userId} = req.params;
    //     console.log(req.params);
    //     const result = await service.getUserleagues(userId);
    //     res.status(201).json(result);
    // }

    // async addUserLeague(req,res){
    //     const {userId} = req.params;
    //     console.log(userId);
    //     const body = req.body;
    //     const result = await service.addLeague(body, userId);
    //     res.status(201).json(result);
    //
    // }
}

module.exports = Controller;
