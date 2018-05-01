const path = require('path');
const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        root: rootPath,
        app: {
            name: 'WeCP',
        },
        port: process.env.PORT || 3000,
        db: 'mongodb://mongo/wecp-development',
    },

    test: {
        root: rootPath,
        app: {
            name: 'wecp',
        },
        port: process.env.PORT || 3000,
        db: `mongodb://${process.env.MONGO_URL}/${process.env.MONGO_DB}` || 'mongodb://localhost/wecp-test',
    },

    production: {
        root: rootPath,
        app: {
            name: 'wecp',
        },
        port: process.env.PORT || 3000,
        db: `mongodb://${process.env.MONGO_URL}/${process.env.MONGO_DB}` || 'mongodb://localhost/wecp-production',
    },
};

module.exports = config[env];