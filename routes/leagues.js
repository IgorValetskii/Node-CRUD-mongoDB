const express = require('express');
// const router = express.Router();
const router = require('express-promise-router')();

const LeaguesController = require('../controllers/leagues');

const controller = new LeaguesController();



router.route('/leagues')
    .get(controller.getAllLeagues.bind(LeaguesController))
    .post(controller.addLeague.bind(LeaguesController));

router.route('/leagues/:leaguesId')
    .get(controller.getLeague.bind(LeaguesController));
    // .put(Controller.updateUser.bind(UsersController))
    // .delete(Controller.deleteUser.bind(UsersController));

module.exports = router;
