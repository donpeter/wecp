const mongoose = require('mongoose');

const config = require('../config/config');

//Database config
mongoose.Promise = global.Promise;
mongoose.connect(config.db, {
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected to database');
});

module.exports = db;
