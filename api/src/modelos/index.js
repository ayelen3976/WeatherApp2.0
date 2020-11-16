const Sequelize = require('sequelize')
const sequelize = new Sequelize('weather', 'postgres', 'postgres', {
    host: 'localhost', 
    dialect: 'postgres'
});
const db = {};
db.Sequelize = Sequelize; 
db.Sequelize = sequelize;
db.weather = require('../modelos/weather')(sequelize, Sequelize);
module.exports = db;