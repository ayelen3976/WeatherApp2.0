const { Router } = require('express');
const router = new Router();
const modelos = require('../modelos');
  
/* ruta para obtener los climas de mi base da datos */
router.get("/", (req, res )=>{
   
    return modelos.weather.findAll({})
     .then(clima =>{
     res.json(clima)
    })
    .catch(err =>{
        res.status(404, err)
    })


}); 
//Agrega datos a mi base de datos con el methodo post en postman
router.post('/', (req, res) => {
	const { nombre, presion, humedad , tmax, tmin, latitud, longitud } = req.body;
    return modelos.weather.create({ nombre: nombre, presion:presion,  humedad:   humedad,  tmax: tmax, tmin:tmin, latitud:latitud, longitud:longitud })

        .then(clima => {
            res.status(201).json(clima)
        })
        .catch(err => {
            res.status(404, err)
        });
});
//elimino la ciudad con su clima por id 
router.delete('/:id' , (req,res) => {
    modelos.weather.destroy({
        where: {
          id: req.params.id
        }
      }).then(() => {
        res.json("Done");
      });
});
//y con el put edito los datos de alguna ciudad con su clima
router.put('/:id', (req, res) => {
    const { nombre, presion, humedad , tmax, tmin, latitud, longitud } = req.body;
    modelos.weather.update({ nombre: nombre, presion:presion,    humedad: humedad,  tmax: tmax, tmin:tmin,    latitud:latitud,     longitud:longitud } , {
        where: {
            id: req.params.id
        }
    }).then(result => {
   res.status(200).json(result);
    }).catch(err => {
        res.status(400, err)
    });
});


module.exports = router;
