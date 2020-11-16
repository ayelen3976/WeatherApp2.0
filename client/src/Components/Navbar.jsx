import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'
import { Navbar, Form, Button} from 'react-bootstrap'
 function Nav(props){


   
     return (
         <div>
  <Navbar className="nav" bg="dark" variant="dark">
    <Navbar.Brand href="#home">
    WeatherApp 
    </Navbar.Brand>
    <div className='formweb'>
    <Form className='form' inline>
      <input type="text" placeholder="Search" className="mr-sm-2"   onChange={props.handleChange}/> 
      <Button variant="outline-info" >Search</Button> 
    </Form>
    </div>
  </Navbar>
  </div>
     )
 }
 export default Nav;