import React from "react";

const Footer = () =>{
        return(
            <>
                <div className="bg-secondary px-auto text-white">
                    <div className="container-fluid row  py-5 mx-auto">
                        <div className="col-xxl-4 col-lg-4 col-md-4 col-sm-4">
                            <h2 className="my-3">Useful Links</h2>
                            <ul className=''>
                                <li className="d-block"><a className=" nav-link text-white" href="">About</a></li>
                                <li className="d-block"><a className="nav-link text-white" href="">Services</a></li>
                                <li className="d-block"><a className="nav-link text-white" href="">Press</a></li>
                                <li className="d-block"><a className="nav-link text-white" href="">Copyright</a></li>
                                <li className="d-block"><a className="nav-link text-white" href="">Advertise</a></li>
                                <li className="d-block"><a className="nav-link text-white  " href="">Legal</a></li>
                            </ul>
                        </div>
                        <div className="col-xxl-4 col-lg-4 col-md-4 col-sm-4">
                            <h2>Subscribe</h2>
                            <div className="d-flex my-5">
                                <input type="email" class="w-75 form-control" id="exampleFormControlInput1" placeholder="Email"/><button className="btn btn-outline-info">Subscribe</button>
                            </div>
                            <p className="">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            
                        </div>
                        <div className="col-xxl-4 col-lg-4 col-md-4 col-sm-4">
                            <h2>Recent Tweets</h2>
                            <div className="my-5">
                                <div className="">
                                    <p>@Unika Web Design look now </p>
                                    
                                <p>1 Hour ago</p>
                                </div>
                                <div className="">
                                    <p>@Unika Jarvies Project cheack now</p>
                                    <p>1 Hour ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
}
export default Footer;