const router = require('express-promise-router')();

const RacesController = require('../controllers/races');
const controller = new RacesController();



router.route('/')
    .get(controller.getAllRaces.bind(RacesController))
    .post(controller.addRace.bind(RacesController));

router.route('/:racesId')
    .get(controller.getRace.bind(RacesController))
    .put(controller.updateRace.bind(RacesController))
    .delete(controller.deleteRace.bind(RacesController));

// router.route('/:racesId/users')
//     .post(controller.addRaceUser.bind(RacesController))
//     .get(controller.getRaceUsers.bind(RacesController));

router.route('/:season/stages')
    .get(controller.getRaceStages.bind(RacesController));

module.exports = router;
