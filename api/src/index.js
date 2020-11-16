const express = require('express');
const morgan = require('morgan');
const cors = require('cors');


//inicializamos
const app = express();
//settings
app.set('port', process.env.PORT || 4000);
// middlewares
app.use(express.urlencoded({ extended:false }));
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use("/api/weather", require("./rutas/"));

//start server
app.listen(app.get('port'), ()=>{
    console.log(`${new Date()} : server escuchamos en el puerto ${app.get('port')}`)
})