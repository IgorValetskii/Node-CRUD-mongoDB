const router = require('express-promise-router')();

const LeaguesController = require('../controllers/leagues');
const controller = new LeaguesController();



router.route('/')
    .get(controller.getAllLeagues.bind(LeaguesController))
    .post(controller.addLeague.bind(LeaguesController));



router.route('/:leaguesId')
    .get(controller.getLeague.bind(LeaguesController))
    .put(controller.updateLeague.bind(LeaguesController))
    .delete(controller.deleteLeague.bind(LeaguesController));

router.route('/:leaguesId/users')
    .post(controller.addLeagueUser.bind(LeaguesController))
    .get(controller.getLeagueUsers.bind(LeaguesController));

router.route('/:leaguesId/users')
    .get(controller.getLeagueUsers.bind(LeaguesController))
    .post(controller.addLeagueUser.bind(LeaguesController));

module.exports = router;
