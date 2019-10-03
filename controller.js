// const Service = require('./service');
// const service = new Service();

const ServiceMongo = require('./serviceMongo');
const serviceMongo = new ServiceMongo();

class Controller {

    getAllUsers(req, res) {
        // res.send(service.getAllUsers());


       serviceMongo.getAllUsers(req,res);
    }

    getUser(req, res) {
        // res.send(service.getUser(req, res));

        serviceMongo.getUser(req, res);
    }

    addUser(req, res) {

        // service.addUser(req, res);

        serviceMongo.addUser(req, res);
    }

    updateUser(req,res){

        // service.updateUser(req,res);

        serviceMongo.updateUser(req,res);
    }

    deleteUser(req, res){
        // service.deleteUser(req,res);

        serviceMongo.deleteUser(req,res)
    }

}

module.exports = Controller;
