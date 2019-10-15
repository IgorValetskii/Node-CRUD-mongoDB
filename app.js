const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./swagger');
const swaggerJSDoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0', // Specification (optional, defaults to swagger: '2.0')
        info: {
            title: 'Hello World', // Title (required)
            version: '1.0.0', // Version (required)
        },
    },
    // Path to the API docs
    apis: ['./routes/users.js', './routes/leagues.js', './routes/stages.js', './routes/races.js']
};

// Initialize swagger-jsdoc -> returns validated swagger spec in json format
const swaggerSpec = swaggerJSDoc(options);


// app.get('/api-docs.json', (req, res) => {
//     res.setHeader('Content-Type', 'application/json');
//     res.send(swaggerSpec);
// });

app.post('/api/login', (req, res) => {
    const admin = {
        id: 1,
        username: 'brad',
        email: 'brad@gmail.com'
    };
    jwt.sign({admin}, 'secretkey', {expiresIn: '1d'}, (err, token) => {
        res.json({token});
    })
});

function verifyToken(req, res, next) {
    //Get auth header value
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
    } else {
        res.sendStatus(403);
    }
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (err) {
            res.sendStatus(403);

        }
        next();
    });
}

//Routes
const users = require('./routes/users');
const leagues = require('./routes/leagues');
const stages = require('./routes/stages');
const races = require('./routes/races');

//Middlewares
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

//Routes
app.use('/users', verifyToken, users);
app.use('/leagues', verifyToken, leagues);
app.use('/stages', verifyToken, stages);
app.use('/races', verifyToken, races);

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

async function start() {
    try {
        await mongoose.connect('mongodb+srv://Igor:1q2w3e4r@cluster0-cmtpz.mongodb.net/users', {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });

        app.listen(3000, () => {
            console.log('Example app listening on port 3000!');
        });
    } catch (e) {
        console.log(e);

    }
}

start();
