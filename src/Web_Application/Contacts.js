import React from "react";

const Contact = () =>{
        return(
            <>
            <div className="p-5 bg-dark text-light" id="contact">
                <div className="">
                    <h2 className="text-center">CONTACTS US</h2>
                    <hr className="mx-auto w-25"/>
                    <p className="text-center">All to contact us</p>
                </div>
                <div className="row">
                    <div className="col-xxl-6 col-lg-6 col-md-12 col-sm-12 my-5">
                        <h2 className="text-white">Our Address</h2>
                        <div className="row">
                            <div className="col-xxl-1 col-lg-1 col-md-1 col-sm-1">
                                <i class="fa-1x fas fa-map-marker-alt"></i>
                            </div>
                            <div className="col-xxl-11 col-lg-11 col-md-11 col-sm-11">
                                <p>100 Limpbiscayne Blvd. (North) 17st Floor ,</p>
                                <p>New World Tower New York ,</p>
                                <p>New York, USA, 33148</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xxl-1 col-lg-1 col-md-1 col-sm-1">
                                <i class="fa-1x fas fa-phone-alt"></i>
                            </div>
                            <div className="col-xxl-11 col-lg-11 col-md-11 col-sm-11">
                                <p>1 -234 -456 -7890</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xxl-1 col-lg-1 col-md-1 col-sm-1">
                            <i class="fa-1x fas fa-envelope"></i>
                            </div>
                            <div className="col-xxl-11 col-lg-11 col-md-11 col-sm-11">
                                <p>ankitkushwaha@gmail.com</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xxl-1 col-lg-1 col-md-1 col-sm-1">
                            <i class="fab fa-instagram"></i>
                            </div>
                            <div className="col-xxl-11 col-lg-11 col-md-11 col-sm-11">
                                <p>ankikushwaha99901</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-lg-6 col-md-12 col-sm-12">
                        <h2 className="text-white">Write to us</h2>
                        <div class="mb-3">
                            <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Your Name"/>
                        </div>
                        <div class="mb-3">
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email"/>
                        </div>
                        <div class="mb-3">
                            <input type="subject" class="form-control" id="exampleFormControlInput1" placeholder="Subject"/>
                        </div>
                        <div class="mb-3">
                            <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Message" rows="3"></textarea>
                        </div>
                        <input className="btn btn-outline-info" text="Send" value="Send"/>
                    </div>
                </div>
            </div>
            
            </>
        )
}

export default Contact;