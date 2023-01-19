import React from "react";
import './nbspcss.css';


const Message = () => {
    return(
        <>
            <div className="bg-dark ">
                <div className="row py-5 text-light   responsivecontainer mx-auto">
                    <div className="col-xxl-8 col-lg-8 col-md-12 col-sm-12">
                        <div className="col-lg-12 col-md-12 col-sm-12 d-flex">
                            <div className="col-lg-12 col-md-12 col-sm-12   d-flex">
                                <div className="mx-1"><h6>1060 Comments </h6></div>
                                <div className="mx-3"><h6>Instagram </h6></div>
                                <div className="mx-1"><h6 className="showhidden">Disqus's Privacy Policy </h6></div>
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="column ms-auto">
                                    <div className="">Login</div>
                                    <hr className="w-100 mx-auto"/>
                                </div>
                            </div>
                        <div className="d-flex col-12 col-md-12 col-sm-12">
                            <div className="recommend"><p className="secondary">Recommend&nbsp;85</p></div>
                        </div>
                        <div className="row">
                            <div className="col-lg-2 col-md-2 col-sm-12 messageboxhidden">
                                <div className="img">
                                    <img />
                                </div>
                            </div>
                            <div className="col-lg-10 col-md-12 col-sm-12">
                                <div class="mb-3">
                                    <input type="message" class="form-control" id="exampleFormControlInput1" placeholder="Message"/>
                                </div>
                            </div>
                        </div>
                        <div className="loginwith">
                            <p className="">Log In With</p>
                        </div>
                        <div class="mb-3">
                                    <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Your name"/>
                                </div>
                    </div>





                    <div className="col-xxl-4 col-lg-4 showhidden">
                        
                    </div>
                </div>
            </div>
        </>
    )
}
export default Message;