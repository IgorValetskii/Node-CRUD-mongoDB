const fs = require('fs');
const mongoose = require('mongoose');

class ServiceMongo {
    constructor() {
        this.userSchema = new mongoose.Schema({
            name: String,
            id: Number
        });

        this.User = mongoose.model('User', this.userSchema);
    }

    async getAllUsers(req, res) {
        try {
            res.send(await this.User.find({}));

        } catch (e) {
            res.status(404).send(e.message)
        }
    }

    async getUser(req, res) {
        try {
            res.send(await this.User.find({id: `${JSON.parse(req.params.id)}`}, (err) => {
                if (err) return console.log(err);
            }))

        } catch (e) {
            res.status(404).send(e.message)
        }

    }

    async addUser(req, res) {
        try {
            const name = req.body.name;
            const id = Math.floor(Math.random() * 1000);
            const user = await new this.User({name: `${name}`, id: `${id}`});

            user.save();
            res.send(user);

        } catch (e) {
            res.status(404).send(e.message)
        }

    }

    async updateUser(req, res) {
        try {
            const query = {'id': req.body.id};
            const info = {'name': req.body.name};

            this.User.findOneAndUpdate(query, info);
            res.send(await this.User.find(query));

        } catch (e) {
            res.status(404).send(e.message)
        }

    }


    async deleteUser(req, res) {
        try {
            res.send(await this.User.findOneAndDelete({id: `${JSON.parse(req.params.id)}`}, (err,doc) =>{
                if (err) res.send(err);
            }));
        } catch (e) {
            res.status(404).send(e.message)
        }

    }

}

module.exports = ServiceMongo;
