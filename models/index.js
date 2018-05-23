const Sequelize = require('sequelize');
const config = require("../config/databaseConfig");

var fs = require('fs');
var path = require('path');
var basename = path.basename(__filename);

var db = {};

// Create Database Connection
const sequelize = new Sequelize(
    config.dbname,
    config.dbuser,
    config.dbpassword,
    {
        host: "localhost",
        dialect: "mysql",
        operatorsAliases: false,

        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
    }
);

fs
    .readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        var model = sequelize['import'](path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;