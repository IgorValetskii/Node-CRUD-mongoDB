const User = require('../models/user');

class Controller {
    constructor() {

    }

    async getAllUsers(req, res, next) {
        const body = req.body;

        const users = await User.find({});
        res.status(200).json(users);
    }

    async newUser(req, res, next) {
        const newUser = await new User(req.body);
        const user = await newUser.save();
        res.status(201).json(user);

    }

    async getUser(req, res, next) {
        const {userId} = req.params;
        const user = await User.findById(userId);
        res.status(201).json(user);
    }


    async updateUser(req, res, next) {

        const {userId} = req.params;
        const newUser = req.body;

        const result = await User.findByIdAndUpdate(userId, newUser, {new: true});
        res.status(200).json(result);
    }

}

module.exports = Controller;