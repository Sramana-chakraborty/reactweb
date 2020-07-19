import React, { useState } from 'react';
const Contact = () =>
{
    const [data, setdata]= useState({
        name:'',
        phone:'',
        email:'',
        message:'',
    })

    const InputEvent = (event) =>{
        const {name, value} = event.target;
        setdata((preVal) => {

            return{
                ...preVal,
                [name]:value,

            };
        });
        
        
    };

    const formSubmit = (e) =>{
        e.preventDefault();
        alert(`My name is ${data.name}. My phone no is ${data.phone}. My email id is ${data.email}. My message is ${data.message}`)

    };


    return(

        <>
        <div className="m-5">
            <h1 className="text-center">Contact Us</h1>
            <div className="container contact_div">
                <div className="row">
                <div className="con-md-6 col-10 mx-auto">
             
                <form onSubmit={formSubmit}>

                <div class="form-group">
    <label for="exampleFormControlInput1">Name</label>
    <input type="textl" class="form-control" id="exampleFormControlInput1"
    name="name"
    value={data.name}
    onChange={InputEvent}
    
     placeholder="your name"/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Phone</label>
    <input type="number" class="form-control" id="exampleFormControlInput1" 
     name="phone"
    value={data.phone}
    onChange={InputEvent}
    placeholder="your no"/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" 
     name="email"
    value={data.email}
    onChange={InputEvent}
    placeholder="name@example.com"/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea class="form-control" id="exampleFormControlTextarea1"
    
    name="message"
    value={data.message}
    onChange={InputEvent}
     rows="3"></textarea>
  </div><br></br>
  <div className="col-12">
  <button class="btn btn-outline-primary" type="submit">Submit form</button>
  </div>

  

</form>
                

                </div>

                </div>
            </div>


        </div>
        
        </>

    );

    
};

export default Contact;