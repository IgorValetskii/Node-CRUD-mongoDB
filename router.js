const Controller = require('./controller');

const express = require('express');
const router = new express.Router();

const instController = new Controller();

router.get('/users', instController.getAllUsers.bind(instController));
router.get('/users/:id', instController.getUser.bind(instController));
router.post('/users', instController.addUser.bind(instController));
router.put('/users', instController.updateUser.bind(instController));
router.delete('/users/:id',instController.deleteUser.bind(instController));


// function router(app){
//     app.get('/users', instController.getAllUsers.bind(instController));
//     app.get('/users/:id', instController.getUser.bind(instController));
//     app.post('/users', instController.addUser.bind(instController));
//     app.put('/users', instController.updateUser.bind(instController));
//     app.delete('/users/:id',instController.deleteUser.bind(instController));
// }





module.exports = router;

