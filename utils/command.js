const cmd = require('node-cmd');
module.exports = {
    instantShutdown: function () {
        return cmd.runSync('shutdown /s /f /t 0');
    },

    cancelShutdown: function () {
        return cmd.runSync('shutdown /a');
    },

    shutdown30: function () {
        cmd.runSync('shutdown /a');
        return cmd.runSync('shutdown /s /f /t 1800');
    },

    shutdown45: function () {
        cmd.runSync('shutdown /a');
        return cmd.runSync('shutdown /s /f /t 2700');
    },

    reduceVol: function (value) {
        return cmd.runSync('nircmd.exe setsysvolume ' + value)
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

