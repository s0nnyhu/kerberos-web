const express = require('express');
const app = express();
app.use(express.static('public'));

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

const cmd = require('./utils/command')

app.get('/', function (req, res) {
    res.sendFile('public/index.html', { root: __dirname });
});

app.post('/shutdown/instant', function (req, res) {
    let resCmd = cmd.instantShutdown();
    if (resCmd.err) {
        res.send('Error');
    }
    res.send(' Submitted Successfully!');
});

app.post('/shutdown/30', function (req, res) {
    let resCmd = cmd.shutdown30();
    if (resCmd.err) {
        res.send('Error');
    }
    res.send(' Submitted Successfully!');
});

app.post('/shutdown/45', function (req, res) {
    let resCmd = cmd.shutdown45();
    if (resCmd.err) {
        res.send('Error');
    }
    res.send(' Submitted Successfully!');
});

app.post('/kill/firefox', function (req, res) {
    let resCmd = cmd.killFirefox();
    if (resCmd.err) {
        res.send('Error');
    }
    res.send(' Submitted Successfully!');
});


app.post('/others/reduce-vol/30', function (req, res) {
    let resCmd = cmd.reduceVol30();
    if (resCmd.err) {
        res.send('Error');
    }
    res.send(' Submitted Successfully!');
});


app.post('/others/mute', function (req, res) {
    let resCmd = cmd.mute();
    if (resCmd.err) {
        res.send('Error');
    }
    res.send(' Submitted Successfully!');
});

app.post('/others/unmute', function (req, res) {
    let resCmd = cmd.unmute();
    if (resCmd.err) {
        res.send('Error');
    }
    res.send(' Submitted Successfully!');
});

const server = app.listen(5000, "192.168.0.10" || "localhost", () => {
    console.log('Node server is running..');
});