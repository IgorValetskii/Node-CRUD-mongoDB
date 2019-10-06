const Service = require('../services/leagues');
const service = new Service();




class Controller {
    constructor() {

    }

    async getAllLeagues(req, res, next) {
        const result = await service.getAllLeagues();
        res.status(200).json(result);
    }

    async getLeague(req, res, next) {
        const {leagueId} = req.params;
        const result = await service.getLeague(leagueId);
        res.status(201).json(result);
    }

    async addLeague(req, res, next) {
        const {leagueId} = req.params;
        const body = req.body;
        const result = await service.addLeague(body, leagueId);
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

}

module.exports = Controller;
