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
        console.log(req.params);
        const result = await service.getLeague(leagueId);
        res.status(201).json(result);
    }

    async addLeague(req, res, next) {
        // const {leagueId} = req.params;
        const body = req.body;
        const result = await service.addLeague(body);
        res.status(201).json(result);

    }


    async updateLeague(req, res, next) {
        console.log(req.params);
        const {leaguesId} = req.params;
        const newLeague = req.body;
        console.log(req.body);
        const result = await service.updateLeague(leaguesId, newLeague);
        res.status(200).json(result);
    }

    async deleteLeague(req, res, next) {
        const {leaguesId} = req.params;
        const result = await service.deleteLeague(leaguesId);
        if (result) res.status(200).send('User successfully deleted');
    }

    async addLeagueUser(req, res) {
        const {leaguesId} = req.params;
        console.log(req.params);
        console.log(req.params.leaguesId);
        const body = req.body;
        console.log(body);
        const result = await service.addLeagueUser(body, leaguesId);
        res.status(201).json(result);

    }

    async getLeagueUsers(req, res) {
        const {leaguesId} = req.params;
        console.log(req.params);
        const result = await service.getLeagueUsers(leaguesId);
        res.status(201).json(result);
    }

}

module.exports = Controller;
