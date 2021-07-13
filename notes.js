const express = require('express');
let app = express();

app.get('/', (req, res, next) => {
    res.send("hello");
});

app.listen(3000)

//////////////////

const express = require('express');
const path = require('path');
let app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

app.get('/css/styles.css', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/css/styles.css'))
});

app.listen(3000);

/////////////////////

const express = require('express');
const path = require('path');
let app = express();



app.use(express.static(path.join(__dirname, '../public')))

app.use('/order/:id', (req, res) => {
    let id = req.params.id;
    let email = req.query.email;
    res.send(`Your id is ${id} and your email is ${email}`)
});

app.listen(3000);

////////////////////

const express = require('express');
const path = require('path');
let app = express();

app.use('/', (req, res, next) => {
    console.log(req.originalUrl);
    next();
});

//app.get('/', (req, res) => {
//    res.send('Hello world!')
//})

app.use(express.static(path.join(__dirname, '../public')))



app.listen(3000);

////////////////

const express = require('express');
const path = require('path');
const fs = require('fs');
let app = express();

app.use((req, res, next) => {
    fs.appendFileSync('log.txt',`${req.url}\n`);
    next();
});



app.use(express.static(path.join(__dirname, '../public')))



app.listen(3000);


//////////

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
let app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/results/:id', (req, res) => {
    console.log(req.body.email)
    console.log(req.body.name)
    res.send('thanks')
})

app.use('/results/:id', (req, res) => {
    let id = req.params.id;
    let email = req.query.email;
    res.send(`Your id is ${id} and your email is ${email}`)
});

app.use(express.static(path.join(__dirname, '../public')))



app.listen(3000);