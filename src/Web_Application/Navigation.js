import React, { useState } from "react";
import './../../node_modules/bootstrap/dist/css/bootstrap.min.css';


const Navigation = () =>{
      const [show, setShow ] =useState(false);

      return(
        <>
   <div class=" bg-dark navsticy">
    <nav class="navbar navbar-expand-lg navbar-dark text-white text-uppercase " >
        <div class="container">
          <a class="navbar-brand" href="#">Get Started</a>
          <button 
          class="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
          onClick={() => setShow(!show)}
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class={`collapse navbar-collapse ${show ? "show" : ""}`} >
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#about">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#course">Course</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#team">Team</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#Work">Work</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#joinus">Join_Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact">Contact</a>
              </li>
              
            </ul>
            <div className="mr-3">
              {/* <a href="/" className="btn mx-1 btn-outline-success">HOME</a> */}
              <a href="#course" className="btn mx-1 btn-outline-success">COURSE</a>
            </div>
           
          </div>
        </div>
      </nav>
   </div>

    {/* <!-- navbar end  --> */}
        </>
      )
}
export default Navigation;