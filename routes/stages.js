const router = require('express-promise-router')();

const StagesController = require('../controllers/stages');
const controller = new StagesController();

/**
 * @swagger
 * tags:
 * - name: Stages
 *   description: Requests connected with stages data
 */

/**
 * @swagger
 * definitions:
 *   Stage:
 *     type: object
 *     properties:
 *       title:
 *         type: string
 *         example: stage1
 *       description:
 *         type: string
 *         example: description
 *       location:
 *         type: string
 *         example: liverpool
 *       league:
 *         type: string
 *         example: 5d9dacd0ed1b960f48fd8a8c
 *   LeagueId:
 *     type: object
 *     properties:
 *       leagueId:
 *         type: string
 *         example: 5d9dacd0ed1b960f48fd8a8c
 */

router.route('/')

/**
 * @swagger
 * /stages:
 *  get:
 *    tags: [Stages]
 *    summary: Get all stages
 *    description: Use to request all stages
 *    responses:
 *      '200':
 *        description: All stages object
 *      '404':
 *        description: Returns error message
 */

    .get(controller.getAllStages.bind(StagesController))
    .post(controller.addStage.bind(StagesController));

router.route('/:stagesId')
    .get(controller.getStage.bind(StagesController))
    .put(controller.updateStage.bind(StagesController))
    .delete(controller.deleteStage.bind(StagesController));

module.exports = router;
