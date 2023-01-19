import React from "react";


const Contact = () => {
        return(
            <>
            
    {/* <!-- contact us start --> */}
    <div class="text-center text-dark">
            <h2>Contact Us</h2>
            <hr class="w-25 my-2 mx-auto"/>
            <p></p>
        </div>

<section class="contactus" id="contactid">
        
    {/* <div class="container text-center">
        <h1 class="text-center font-weight-bold">CONTACT US</h1>
        <p class="text-capitalize pt-1">We're Here To Help And Answer Any Question You Might Hava We Look Forward To Hearing From You</p>
    </div> */}
    <div class="container ">
        <div class="row">
            <div class="col-lg-8 col-md-8 col-10 offset-lg-2 offset-1 ">
                <form action="/action_page.php">
                    <div class="form-group my-2">                          
                        <input type="text" class="form-control" placeholder="Enter Your Name"  id="username" required autocomplete="off"/>
                    </div>
                    <div class="form-group my-2">                          
                        <input type="email" class="form-control" placeholder="Enter email" id="email" required autocomplete="off"/>
                    </div>
                    <div class="form-group my-2">                          
                        <input type="text" class="form-control" placeholder="Enter Mobile Number" id="mobile" required autocomplete="off"/>
                    </div>

                    <div class="form-group my-2">
                        <textarea class="form-control" rows="4  " id="comment" placeholder="Enter your message"></textarea>
                    </div>
                   <div class="d-flex justify-content-center form-button">
                    <button type="submit" class="btn btn-primary">Submit</button>
                   </div>
                    
                  </form>
            </div>
        </div>
    </div>
</section>
{/* <!-- constact us end --> */}
            </>
        )
}

export default  Contact;