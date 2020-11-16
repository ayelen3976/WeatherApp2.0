const { Router } = require('express');
const router = new Router();
const modelos = require('../modelos');

router.get("/", (req, res )=>{
   
    return modelos.weather.findAll({})
     .then(clima =>{
     res.json(clima)
    })
    .catch(err =>{
        res.status(404, err)
    })


}); 

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

router.delete('/:id' , (req,res) => {
    modelos.weather.destroy({
        where: {
          id: req.params.id
        }
      }).then(() => {
        res.json("Done");
      });
});

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
