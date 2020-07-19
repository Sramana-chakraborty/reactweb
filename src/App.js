import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import { Switch, Route, Redirect } from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';

const App =() =>
{

return(
  <div>
    <Navbar/>
    <switch>
      <Route exact path="/" component = {Home}/>
      <Route  exact path="/about" component = {About}/>
      <Route exact path="/service" component = {Service}/>
      <Route exact path="/contact" component = {Contact}/>  
      <Redirect to="/"/>
    </switch>
    <Footer/>
  </div>
);
};

export default App;
