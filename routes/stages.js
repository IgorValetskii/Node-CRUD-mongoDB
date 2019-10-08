const router = require('express-promise-router')();

const StagesController = require('../controllers/stages');
const controller = new StagesController();



router.route('/stages')
    .get(controller.getAllStages.bind(StagesController))
    .post(controller.addStage.bind(StagesController));

router.route('/stages/:stagesId')
    .get(controller.getStage.bind(StagesController))
    .put(controller.updateStage.bind(StagesController))
    .delete(controller.deleteStage.bind(StagesController));

module.exports = router;