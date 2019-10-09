const router = require('express-promise-router')();

const UsersController = require('../controllers/users');
const Controller = new UsersController();



router.route('/')
    .get(Controller.getAllUsers.bind(UsersController))
    .post(Controller.addUser.bind(UsersController));

router.route('/:userId')
    .get(Controller.getUser.bind(UsersController))
    .put(Controller.updateUser.bind(UsersController))
    .delete(Controller.deleteUser.bind(UsersController));

router.route('/:userId/races')
    .get(Controller.getUserRaces.bind(UsersController));
//     .post(Controller.addUserLeague.bind(UsersController));
router.route('/:userId/leagues')
    .get(Controller.getUserLeagues.bind(UsersController));
module.exports = router;
