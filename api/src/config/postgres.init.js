/* const Sequelize = require('sequelize')
const sequelize = new Sequelize('weather', 'postgres', 'postgres', {
    host: 'localhost', 
    dialect: 'postgres'
});
sequelize.authenticate()
.then(()=>{
    console.log('conect')})
    .catch(err=>{
        console.log('nope')
    });

    const Weather = sequelize.define('weather', {
        id:{
            type: Sequelize.SMALLINT, primaryKey:true, autoIncrement:true },
            nombre:Sequelize.STRING,
            presion:Sequelize.STRING,
            humedad:Sequelize.STRING,
            tmax:Sequelize.STRING,
            tmin:Sequelize.STRING,
            latitud:Sequelize.STRING,
            longitud:Sequelize.STRING,
    })
    Weather.sync({force:true}).then(() =>{console.log("table craeted")})
    .catch(err=>{console.log('noo table')
 return true ;
});
   

module.exports = sequelize;  */ 