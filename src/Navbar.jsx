import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () =>{
    return(

        <div>
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-md-10 mx-auto">

                
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink className="navbar-brand" to="/">Sramana Tech</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item ">
        <NavLink exact className="nav-link" to="/">Home <span class="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink exact className="nav-link" to="/about">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink exact className="nav-link" to="/service">Service</NavLink>
</li>
        <li className="nav-item">
        <NavLink exact className="nav-link" to="/contact">Contact</NavLink>
      </li>
     
    </ul>
  </div>
</nav>
</div>
                 
            </div>


</div>
</div>
       
    );
};

export default Navbar;