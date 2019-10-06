const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');

// mongoose.Promise = global.Promise;
//Routes
// const router = require('./router');
const users = require('./routes/users');
const leagues = require('./routes/leagues');

//Middlewares
app.use(bodyParser.urlencoded({
   extended: false
}));
app.use(bodyParser.json());

//Routes
app.use(users);
app.use(leagues);


// router(app);


async function start() {
    try {
        await mongoose.connect('mongodb+srv://Igor:1q2w3e4r@cluster0-cmtpz.mongodb.net/users', {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });

        app.listen(3000,  () => {
            console.log('Example app listening on port 3000!');
        });
    }catch (e) {
        console.log(e);

    }
}

start();
