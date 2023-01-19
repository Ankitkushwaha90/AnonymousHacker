import React from "react";
import Navigation from "../Navigation";
import Sublink from "./Menu/Sublink";
import './../nbspcss.css';
import Message from "../Message";



const Paragraphs = () => {
        return(
            <>  
                <Navigation/>
                <div className="row container-fluid">
                    <div className="col-xxl-2 col-lg-2 col-md-0 col-sm-0  showhidden">
                        <Sublink/>
                    </div>
                    <div className="col-xxl-10 col-lg-10 col-md-12 col-sm-12 ">
                        {/* start page */}
                        <div className="my-5">
                            {/* <h1 className="my-5">Getting started with HTML</h1> */}
                            <h2>Paragraphs</h2>
                            
                        </div>
                        <div className="HTML Paragraphs">
                            &lt;p&gt;This is paragraph.&lt;/p&gt;<br/>
                            &lt;p&gt;This is another paragraph.&lt;/p&gt;
                        </div>
                        <div className="my-5"> 
                            <h2>For Example </h2>
                        </div>
                        <div className="bg-dark  p-3">
                            <div className="tttt">
                            <p className="my-1">
                                <span className="text-info">&lt;</span>
                                <span className="text-danger">!DOCTYPE html</span>
                                <span className="text-info">&gt;</span>
                            </p>
                            <p className="my-1">
                                <span className="text-info">&lt;</span>
                                <span className="text-success">html lang="en"</span>
                                <span className="text-info">&gt;</span>
                            </p>
                            {/* head start */}
                            
                            {/* head end */}

                            {/* body start */}
                            <p className="my-1">
                                <span className="spangap">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <span className="text-info">&lt;</span>
                                <span className="text-success">body</span>
                                <span className="text-info">&gt;</span>
                            </p>
                            <p className="my-1">
                                <span className="spangap">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <span className="spangap">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <span className="text-info">&lt;</span>
                                <span className="text-success">p</span>
                                <span className="text-info">&gt;</span>
                                <span className="text-secondary">This is paragraph</span>
                                <span className="text-info">&lt;</span>
                                <span className="text-success">/p</span>
                                <span className="text-info">&gt;</span>
                            </p>
                            <p className="my-1">
                                <span className="spangap">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <span className="spangap">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <span className="text-info">&lt;</span>
                                <span className="text-success">p</span>
                                <span className="text-info">&gt;</span>
                                <span className="text-secondary">This is another paragraph </span>
                                <span className="text-info">&lt;</span>
                                <span className="text-success">/p</span>
                                <span className="text-info">&gt;</span>
                            </p>
                            
                            <p className="my-1">   
                                <span className="spangap">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <span className="text-info">&lt;</span>
                                <span className="text-success">/body</span>
                                <span className="text-info">&gt;</span>
                            </p>
                            {/* head end */}
                            <p className="my-1 nbspcss1">
                                <span className="text-info">&lt;</span>
                                <span className="text-success">/html</span>
                                <span className="text-info">&gt;</span>
                            </p>
                            </div>

                        </div>
                            {/* start tag */}
                            <div className="my-5 py-3"></div>
                            {/* end tag */}
                        
                    {/* end page */}
                    </div>

                </div>
                <Message/>
            </>

        )
}


export default Paragraphs;


