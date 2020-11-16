const Sequelize = require('sequelize')
//nos conectamos con la base de datos
const sequelize = new Sequelize('weather', 'postgres', 'postgres', {
    host: 'localhost', 
    dialect: 'postgres'
});

const db = {};
db.Sequelize = Sequelize; 
db.Sequelize = sequelize;

//y tambien con las rutas 
db.weather = require('../modelos/weather')(sequelize, Sequelize);
module.exports = db;