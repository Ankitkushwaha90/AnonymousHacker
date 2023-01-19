import React from "react";

const Team = () => {
        return(
            <>
            
   {/* <!-- OUR TEAM START --> */}
   <div class="my-5 container"  id="team">
    <div class="text-center pt-5">
        <h2 class="pt-3">OUT TEAM</h2>
        <hr class="w-25 mx-auto "/>
        <p>Meat our experts</p>
    </div>
    <div class="row mx-auto text-center">
        <div class="col-xxl-3 col-lg-3 col-md-6 col-sm-12 text-center">
           
            <div class="mx-auto  my-3 px-auto card text-center" >
                <img src="./img/team/11.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">App Development</h5>
                  {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                  <a href="#" class="btn btn-outline-info">Go somewhere</a>
                </div>
              </div>
        </div>
        <div class="col-xxl-3 col-lg-3 col-md-6 col-sm-12">
            <div class="mx-auto px-auto my-3 card" >
                <img src="./img/team/10.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                    
                  <h5 class="card-title">Web Development</h5>
                  {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                  <a href="#" class="btn btn-outline-info">Go somewhere</a>
                </div>
              </div>
        </div>
        <div class="col-xxl-3 col-lg-3 col-md-6 col-sm-12">
            <div class="mx-auto my-3 px-auto card" >
                <img src="./img/team/9.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">GUI Development</h5>
                  {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                  <a href="#" class="btn btn-outline-info">Go somewhere</a>
                </div>
              </div>
        </div>
        <div class="col-xxl-3 col-lg-3 col-md-6 col-sm-12">
            <div class="card my-3 mx-auto px-auto " >
                <img src="./img/team/12.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                    
                  <h5 class="card-title">Web Design</h5>
                  {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                  <a href="#" class="btn btn-outline-info">Go somewhere</a>
                </div>
              </div>
        </div>
    </div>

   </div>
   {/* <!-- OUR TEAM END  --> */}

            </>
        )
}

export default Team;