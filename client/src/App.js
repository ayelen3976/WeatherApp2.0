import './App.css';
import React, {useState, useEffect} from 'react';
import  Nav from './Components/Navbar'
import Cards from './Components/Card'
import axios from 'axios';
function App() {
  const [clima, setClima] = useState([])
const [search, setSearch] = useState('')

  useEffect(()=> {
    axios.get('http://localhost:4000/api/weather').then(response=>{ 
             setClima(response.data)
             console.log(clima)
         }).catch(err =>{console.log(err)}
         )},[]); 

         const  filtered = clima.filter(clima =>{
          return clima.nombre.toLowerCase().includes(search.toLowerCase())
        })

  return (
    <div className="App">
    <Nav handleChange={e => setSearch(e.target.value)}/>
    <Cards clima={filtered} setClima={setClima}/>
    </div>
  );
}

export default App;
