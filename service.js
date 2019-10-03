const fs = require('fs');
// const shortid = require('shortid');

class Service {
    constructor() {
        this.users = JSON.parse(fs.readFileSync('./usersData.json', 'utf8'));
    }

    getAllUsers() {
        return this.users;
    }

    getUser(req, res) {
        const user = this.users.find(c => c.id === JSON.parse(req.params.id));
        if (!user) {
            res.status(404).send('The user with the given ID was not found')
        }
        return user;
    }

    addUser(req, res) {
        const id = Math.floor (Math.random() * 1000);
        const user = {};
        user.id = id;
        // user.id = shortid.generate();
        // user.name = JSON.stringify(req.body).split(':')[1].split('"')[1].split('\\')[0];
        user.name = req.body.name;
        this.users.push(user);

        this.updateJSONFile(this.users,user, res);
    }

    deleteUser(req,res){

        const user = this.users.find(c => c.id === JSON.parse(req.params.id));
        if(user){
            const indexOfUser = this.users.findIndex(el => el.id === JSON.parse(req.params.id));
            this.users.splice(indexOfUser,1);
            this.updateJSONFile2(this.users, res);
        }

        else{
            res.status(404).send('The user with the given ID was not found')
        }
    }

    updateUser(req,res){
        // console.log(req.body.id);
        // console.log(req.body.name);
        //
        // console.log(req.body);
       this.users.map(el =>{
           console.log(el.id);
           console.log(req.body.id);
           if(el.id === req.body.id) {
                el.name = req.body.name;
                res.send(el);
           }
        });


        this.updateJSONFile2(this.users,res);
    }

    updateJSONFile2(users, res) {
        fs.writeFile('./usersData.json', JSON.stringify(users), err => {
            if (err) return res.status(404).send(err);
            res.send(users);
        })
    }

    updateJSONFile(users,user, res) {
        fs.writeFile('./usersData.json', JSON.stringify(users), err => {
            if (err) return res.status(404).send(err);
            res.send(user);
        })
    }
}

module.exports = Service;
