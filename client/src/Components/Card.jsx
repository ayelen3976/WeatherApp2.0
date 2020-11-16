import React, {useState, useEffect} from 'react';
import { MapContainer, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import axios from 'axios';
import {Card} from 'react-bootstrap'
import './Card.css'
function Cards({clima}) {

/* const [clima, setClima] = useState([])


 useEffect(()=> {
   axios.get('http://localhost:4000/api/weather').then(response=>{ 
            setClima(response.data)
            console.log(clima)
        }).catch(err =>{console.log(err)}
        )},[]);  */
 
   
 return(
<div className='Carde'>   

{clima.map( clim =>(

<Card key={clim.id} className='carde' >
<MapContainer center={[clim.latitud, clim.longitud]} zoom={13}  style={{height: '300px', width: "100%"}}>
<TileLayer
attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
/>
</MapContainer>
  <Card.Body>
    <Card.Title>{clim.nombre}</Card.Title>
    <Card.Text>
    <p> Humedad: {clim.humedad}</p>
  <p> Presion : {clim.presion}</p>
  <p> Max: {clim.tmax}C</p>
  <p> Min: {clim.tmin}C</p>
    </Card.Text>
   </Card.Body>
    </Card>
    ))}

</div>
  )

}
export default Cards;
