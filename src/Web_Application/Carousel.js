import React from "react";
import './Carousel.css';


const Carousel = () =>{
      return(
        <>
        {/* <!-- carosel start  --> */}
   <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item  active">
        <img src="./img/carousel/1.jpg" class="d-block w-100" alt="..."/>
        <div class="carousel-caption pb-5 mb-5 d-none d-md-block">
          <h5>PROGRAMMING COURCES AVAILABLE</h5>
          <p>All about programming language </p>
          
          <a  href="#course" className="btn btn-outline-primary ">Get Started</a>
        </div>
      </div>
      <div class="carousel-item">
        <img src="./img/carousel/2.jpg" class="d-block w-100" alt="..."/>
            <div class="carousel-caption pb-5 mb-5 d-none d-md-block">
              <h5 className=''>Web Development Course </h5>
              <p>Web Development course javascript, php</p>
              <a  href="#course" className="btn btn-outline-primary ">Get Started</a>
            </div>
      </div>
      <div class="carousel-item">
        <img src="./img/carousel/3.jpg" class="d-block w-100" alt="..."/>
        <div class="carousel-caption pb-5 mb-5 d-none d-md-block">
          <h3 className=''>Programming Course</h3>
          <p className="">Awesome All Programming Tutorial c# .Net Framework</p>
          <a  href="#course" className="btn btn-outline-primary ">Get Started</a>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
   {/* <!-- carosel end  --> */}

        
        </>
      )
}
export default Carousel;