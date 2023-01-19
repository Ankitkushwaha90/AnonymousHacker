import React from "react";

const Somefunfact = () => {
    return(
        <>
        
   {/* <!-- SOME FUN FACTS  START --> */}
   <div class="my-5 bg-dark py-5 text-white text-center">
       <div class="text-center text-white my-5">
           <h2 class="">SOME FUN FACTS</h2>
           <hr class="w-25 mx-auto "/>
           <p>Before anyone is not told</p>
       </div>

       <div class="row counter-container container mx-auto mb-5">
        <div class="col-xxl-3 col-lg-3 col-md-6 col-sm-12">
            <div class="text-center m-5">
                <i class="fa-3x fas fa-users"></i>
             <h1 class="display-4 counter" data-target="1500"></h1>
             <h4 class="text-white">Clients Worked With</h4>
            </div>
            
        </div>
        <div class="col-xxl-3 col-lg-3 col-md-6 col-sm-12">
            <div class="text-center m-5">
                <i class="fa-3x fas fa-project-diagram"></i>
             <h1 class="display-4 counter" data-target="2100"></h1>
             <h4 class="text-white">Complete Project</h4>
            </div>
            
        </div>
        <div class="col-xxl-3 col-lg-3 col-md-6 col-sm-12">
            <div class="text-center m-5">
                <i class="fa-3x fas fa-trophy"></i>
             <h1 class="display-4 counter" data-target="1600"></h1>
             <h4 class="text-white">Winning Awards</h4>
            </div>
            
        </div>
        <div class="col-xxl-3 col-lg-3 col-md-6 col-sm-12">
            <div class="text-center m-5">
                <i class="fa-3x fas fa-mug-hot"></i>
             <h1 class="display-4 counter" data-target="2400"></h1>
             <h4 class="text-white">Cups of coffee drinking</h4>
            </div>
            
        </div>
       </div>
   </div>
   {/* <!-- SOME FUN FACTS END  --> */}
        </>
    )

}

const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
    //console.log(couter);
    counter.innerHTML = 0;
    const updateCounter = () =>{
        const targetCount = +counter.getAttribute('data-target');
        // console.log(targetCount);
        const startingCount = Number(counter.innerHTML);

        const incr = targetCount /100;

        if(startingCount < targetCount){
            counter.innerHTML = `${Math.round(startingCount + incr)}`;
            setTimeout(updateCounter, 10);
        }
    }

    updateCounter();

})
export default Somefunfact;