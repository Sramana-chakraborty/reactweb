import React from 'react';
import web from '../src/images/img1.jpg';
import { NavLink } from 'react-router-dom';
const Common = (props) =>
{

    return(

        <>
        <section id="header" className="home-header">
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-md-10 mx-auto">
                    <div className="row">

                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 text-home">

    <h1>{props.name} <span className="brand-name">{props.brand}</span></h1>
                    
                    <h2 className="my-3 para">
                        {props.para1}
                    </h2>
                    <div className="mt-3">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                    </div>
                    <div className="mt-3">
                        <NavLink to = {props.visit} className="home-botton">{props.btname}</NavLink>
                    </div>
                    </div>

                    <div className="col-lg-6 pt-5  order-1 order-lg-2 header-img">

                    <img src={props.imgsrc} className="home-img-class" alt="home-img"></img>
                    </div>
                    </div>


                    </div>
                    </div>
                    </div>

        </section>
        </>

    );

    
};

export default Common;