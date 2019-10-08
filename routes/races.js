const router = require('express-promise-router')();

const RacesController = require('../controllers/races');
const controller = new RacesController();



router.route('/races')
    .get(controller.getAllRaces.bind(RacesController))
    .post(controller.addRace.bind(RacesController));

router.route('/races/:racesId')
    .get(controller.getRace.bind(RacesController))
    .put(controller.updateRace.bind(RacesController))
    .delete(controller.deleteRace.bind(RacesController));

router.route('/races/:racesId/users')
    .post(controller.addRaceUser.bind(RacesController))
    .get(controller.getRaceUsers.bind(RacesController));

module.exports = router;
