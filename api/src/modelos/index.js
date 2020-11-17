const Sequelize = require('sequelize')
require('dotenv').config();
//nos conectamos con la base de datos
/* const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.USERNAME, process.env.PASSWORD, {
    host:process.env.DATABASE_URL,
    dialect: 'postgres',
}); */ 
const sequelize = new Sequelize('weather','postgres', 'postgres', {
    host:'localhost',
    dialect: 'postgres',
});  

const db = {};
db.Sequelize = Sequelize; 
db.Sequelize = sequelize;

//y tambien con las rutas 
db.weather = require('../modelos/weather')(sequelize, Sequelize);
module.exports = db;