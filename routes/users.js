const express = require('express');
// const router = express.Router();
const router = require('express-promise-router')();

const UsersController = require('../controllers/users');

const Controller = new UsersController();



router.route('/')
    .get(Controller.getAllUsers.bind(UsersController))
    .post(Controller.newUser.bind(UsersController));

router.route('/:userId')
    .get(Controller.getUser.bind(UsersController))
    .put(Controller.updateUser.bind(UsersController));
    // .delete(UsersController.deleteUser);

module.exports = router;
