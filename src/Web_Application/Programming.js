import React from "react";
import './Programming.css';

const Programming = () =>{
      return(
        <>
        
    {/* <!-- our Course start --> */}
    <div class="Course my-5 pt-5 container" id="course" >
        <div class="text-center text-dark">
            <h2 className="pt-3">Programming Course</h2>
            <hr class="w-25 my-2 mx-auto"/>
            <p>Get Start</p>
        </div>
        
 
        <div class="row">
            <div class="col-xxl-4 col-lg-4 col-md-6 col-sm-12">
                <div class="">
                    <div class="mx-auto px-auto my-3 card  text-center" >
                    <i class="fa-10x fab fa-html5"></i>
                        <div class="card-body text-center">
                            <h5 class="card-title">HTML5</h5>
                            <a href="/html/introduction" class="btn btn-outline-info">Get start</a> 
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xxl-4 col-lg-4 col-md-6 col-sm-12">
                <div class="">
                    <div class="mx-auto px-auto my-3 card text-center" >
                    <i class="fa-10x fab fa-css3"></i>
                        <div class="card-body text-center">
                            <h5 class="card-title">CSS3</h5>
                            <a href="/css/introduction" class="btn btn-outline-info">Get start</a> 
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xxl-4 col-lg-4 col-md-6 col-sm-12">
                <div class="">
                    <div class="mx-auto px-auto my-3 card text-center" >
                    <i class="fa-10x fab fa-js"></i>
                        <div class="card-body text-center">
                            <h5 class="card-title">JAVASCRIPT</h5>
                            <a href="/javascript/introduction" class="btn btn-outline-info">Get start</a> 
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xxl-4 col-lg-4 col-md-6 col-sm-12">
                <div class="">
                    <div class="mx-auto px-auto my-3 card text-center" >
                    <i class="fa-10x fab fa-python"></i>
                        <div class="card-body text-center">
                            <h5 class="card-title">PYTHON</h5>
                            <a href="/python/introduction" class="btn btn-outline-info">Get start</a> 
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xxl-4 col-lg-4 col-md-6 col-sm-12">
                <div class="">
                    <div class="mx-auto px-auto my-3 card text-center" >
                    <i class="fa-10x fab fa-java"></i>
                        <div class="card-body text-center">
                            <h5 class="card-title">JAVA</h5>
                            <a href="/html/introduction" class="btn btn-outline-info">Get start</a> 
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xxl-4 col-lg-4 col-md-6 col-sm-12">
                <div class="">
                    <div class="mx-auto px-auto my-3 card text-center" >
                    <i class="fa-10x fab fa-cuttlefish"></i>
                        <div class="card-body text-center">
                            <h5 class="card-title">C</h5>
                            <a href="/c/introduction" class="btn btn-outline-info">Get start</a> 
                        </div>
                    </div>
                </div>
            </div>
           
         
        </div>
    </div>

        </>
      )
}
export default Programming;