const express = require('express');
const app = express();
app.use(express.static('public'));

app.use(express.static('node_modules/tw-elements'))

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

const cmd = require('./utils/command')
const network = require('./utils/network')

app.get('/', function (req, res) {
    res.sendFile('public/index.html', { root: __dirname });
});

app.post('/shutdown/instant', function (req, res) {
    let resCmd = cmd.instantShutdown();
    if (resCmd.err) {
        res.json({ status: 'nok' })
    }
    res.json({ status: 'ok' })
});

app.post('/shutdown/30', function (req, res) {
    let resCmd = cmd.shutdown30();
    if (resCmd.err) {
        res.json({ status: 'nok' })
    }
    res.json({ status: 'ok' })
});

app.post('/shutdown/45', function (req, res) {
    let resCmd = cmd.shutdown45();
    if (resCmd.err) {
        res.json({ status: 'nok' })
    }
    res.json({ status: 'ok' })
});

app.post('/kill/firefox', function (req, res) {
    let resCmd = cmd.killFirefox();
    if (resCmd.err) {
        res.json({ status: 'nok' })
    }
    res.json({ status: 'ok' })
});


app.post('/others/reduce-vol/20', function (req, res) {
    let resCmd = cmd.reduceVol20();
    if (resCmd.err) {
        res.json({ status: 'nok' })
    }
    res.json({ status: 'ok' })
});


app.post('/others/mute', function (req, res) {
    let resCmd = cmd.mute();
    if (resCmd.err) {
        res.json({ status: 'nok' })
    }
    res.json({ status: 'ok' })
});

app.post('/others/unmute', function (req, res) {
    let resCmd = cmd.unmute();
    if (resCmd.err) {
        res.json({ status: 'nok' })
    }
    res.json({ status: 'ok' })
});


const server = app.listen(5000, network.getIpAdress() || "localhost", () => {
    console.log('Node server is running..');
});