import React from "react";

const OurWorks = () => {
        return(
            <>
            
   {/* <!-- our works start --> */}
   <div class="works my-1 pt-1 container" id="Work">
       <div class="text-center  text-dark"  >
           <h2 className="pt-5">OUR WORKS</h2>
           <hr class="w-25 my-2 mx-auto"/>
           <p>What we are proud of</p>
       </div>
       <div class="workmenu">
           <ul class="d-flex my-5 justify-content-center  flex-wrap">
               <li class="mx-2 d-block"><a class="text-dark active" href="#">ALL</a></li>
               <li class="mx-2 d-block"><a class="text-dark" href="#">WEBSITES</a></li>
               <li class="mx-2 d-block"><a class="text-dark" href="#">WEB DESIGN</a></li>
               <li class="mx-2 d-block"><a class="text-dark" href="#">APPS DEVELOPMENT</a></li>
               <li class="mx-2 d-block"><a class="text-dark" href="#">GRAPHIC DESIGN</a></li>
               <li class="mx-2 d-block"><a class="text-dark" href="#">RESPONSIVE</a></li>
           </ul>
       </div>

       <div class="row">
        <div class="col-xxl-4 col-lg-4 col-md-6 col-sm-12">
            <figure><img src="./img/ourwork/1.png" class="img-fluid"/></figure>
        </div>
        <div class="col-xxl-4 col-lg-4 col-md-6 col-sm-12">
            <figure><img src="./img/ourwork/2.png" class="img-fluid"/></figure>
        </div>
        <div class="col-xxl-4 col-lg-4 col-md-6 col-sm-12">
            <figure><img src="./img/ourwork/3.png" class="img-fluid"/></figure>
        </div>

        <div class="col-xxl-4 col-lg-4 col-md-6 col-sm-12">
            <figure><img src="./img/ourwork/4.jpg" class="img-fluid"/></figure>
        </div>
        <div class="col-xxl-4 col-lg-4 col-md-6 col-sm-12">
            <figure><img src="./img/ourwork/5.jpg" class="img-fluid"/></figure>
        </div>
        <div class="col-xxl-4 col-lg-4 col-md-6 col-sm-12">
            <figure><img src="./img/ourwork/6.png" class="img-fluid"/></figure>
        </div>

        <div class="col-xxl-4 col-lg-4 col-md-6 col-sm-12">
            <figure><img src="./img/ourwork/7.png" class="img-fluid"/></figure>
        </div>
        <div class="col-xxl-4 col-lg-4 col-md-6 col-sm-12">
            <figure><img src="./img/ourwork/8.jpg" class="img-fluid"/></figure>
        </div>
        <div class="col-xxl-4 col-lg-4 col-md-6 col-sm-12">
            <figure><img src="./img/ourwork/9.png" class="img-fluid"/></figure>
        </div>
       </div>
   </div>
   {/* <!-- our works end  --> */}
            </>
        )
}
export default OurWorks;