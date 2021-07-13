const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
let app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', (req, res, next) => {
    console.log(req.url);
    next();
});

app.post('/results', (req, res) => {
    if (req.body.name == 'Jake') {
        res.send(`${req.body.name}, you're definitely hot.`)
    } else if (req.body.name == 'Garrett') {
        res.send(`${req.body.name}, you're definitely hot.`)
    } else if (req.body.name == 'Josh') {
        res.send(`${req.body.name}, you're definitely hot.`)
    } else if (req.body.lovers < 10) {
        res.send(`Sorry, ${req.body.name}, you're not hot.`)
    } else if (req.body.lovers > 50) {
        res.send(`Jesus, ${req.body.name}, please get tested. Hot, but seriously.`)
    } else {
        res.send(`${req.body.name}, you're definitely hot.`)
    }

    fs.appendFileSync('hotLog.txt',`${req.body.name} had a body count of ${req.body.lovers} on ${new Date}\n`);
    
})

app.use(express.static(path.join(__dirname, '../public')))



app.listen(3000);