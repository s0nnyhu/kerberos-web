const cmd = require('node-cmd');
module.exports = {
    instantShutdown: function () {
        return cmd.runSync('shutdown /s /f /t 0');
    },

    shutdown30: function () {
        return cmd.runSync('shutdown /s /f /t 1800');
    },

    shutdown45: function () {
        return cmd.runSync('shutdown /s /f /t 2700');
    },

    reduceVol30: function () {
        return cmd.runSync('nircmd.exe setsysvolume 15000')
    },

    killFirefox: function () {
        return cmd.runSync('taskkill /IM firefox.exe');
    },

    mute: function () {
        return cmd.runSync('nircmd.exe mutesysvolume 1');
    },

    unmute: function () {
        return cmd.runSync('nircmd.exe mutesysvolume 0');
    }
}

