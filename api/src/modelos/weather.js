module.exports = (sequelize, Sequelize) =>{
const Weather = sequelize.define('weather', {
    id:{
        type: Sequelize.SMALLINT, primaryKey:true, autoIncrement:true },
        nombre: Sequelize.STRING,
        presion: Sequelize.STRING,
        humedad: Sequelize.STRING,
        tmax: Sequelize.STRING,
        tmin: Sequelize.STRING,
        latitud: Sequelize.STRING,
        longitud: Sequelize.STRING
    
})
return Weather;
}