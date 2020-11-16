import './App.css';
import React, {useState, useEffect} from 'react';
import  Nav from './Components/Navbar'
import Cards from './Components/Card'
import axios from 'axios';
function App() {
const [clima, setClima] = useState([])
const [search, setSearch] = useState('')

// llamamos a la data de nuestra api con axios
  useEffect(()=> {
    axios.get('http://localhost:4000/api/weather').then(response=>{ 
             setClima(response.data)
             console.log(clima)
         }).catch(err =>{console.log(err)}
         )},[]); 
//hacemos andar el searchbar para que me renderize las que busco segun el nombre
         const  filtered = clima.filter(clima =>{
          return clima.nombre.toLowerCase().includes(search.toLowerCase())
        })

  return (
    <div className="App">
    {/*  pasamos las funciones y states a nuestros componentes nav y card */}
    <Nav handleChange={e => setSearch(e.target.value)}/>
    <Cards clima={filtered} />
    </div>
  );
}

export default App;
