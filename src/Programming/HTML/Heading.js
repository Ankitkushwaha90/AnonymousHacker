import React from "react";
import Navigation from "../Navigation";
import Sublink from "./Menu/Sublink";
import './../nbspcss.css';
import Message from "../Message";



const Heading = () => {
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
                            <h2>Heading tag</h2>
                            <p>Use by heading h1 to h6 tags .</p>
                            <h2 className="mt-3">Defining a heading:</h2>
                            <p>The &lt;h1&gt;Heading&lt;h1&gt;</p>
                            <p>The &lt;h2&gt;Heading&lt;h2&gt;</p>
                            <p>The &lt;h3&gt;Heading&lt;h3&gt;</p>
                            <p>The &lt;h4&gt;Heading&lt;h4&gt;</p>
                            <p>The &lt;h5&gt;Heading&lt;h5&gt;</p>
                            <p>The &lt;h6&gt;Heading&lt;h6&gt;</p>
                        </div>
                        <div className="my-5"> 
                            <h2>For Example </h2>
                            <p>The &lt;h1&gt;Title of paragraph&lt;h1&gt;</p>
                            <p>The &lt;p&gt;paragraph&lt;p&gt;</p>
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
                                <span className="text-success">h1</span>
                                <span className="text-info">&gt;</span>
                                <span className="text-secondary">Heading h1</span>
                                <span className="text-info">&lt;</span>
                                <span className="text-success">/h2</span>
                                <span className="text-info">&gt;</span>
                            </p>
                            <p className="my-1">
                                <span className="spangap">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <span className="spangap">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <span className="text-info">&lt;</span>
                                <span className="text-success">h2</span>
                                <span className="text-info">&gt;</span>
                                <span className="text-secondary">Heading h2</span>
                                <span className="text-info">&lt;</span>
                                <span className="text-success">/h2</span>
                                <span className="text-info">&gt;</span>
                            </p>
                            <p className="my-1">
                                <span className="spangap">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <span className="spangap">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <span className="text-info">&lt;</span>
                                <span className="text-success">h3</span>
                                <span className="text-info">&gt;</span>
                                <span className="text-secondary">Heading h3</span>
                                <span className="text-info">&lt;</span>
                                <span className="text-success">/h3</span>
                                <span className="text-info">&gt;</span>
                            </p>
                            <p className="my-1">
                                <span className="spangap">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <span className="spangap">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <span className="text-info">&lt;</span>
                                <span className="text-success">h4</span>
                                <span className="text-info">&gt;</span>
                                <span className="text-secondary">Heading h4</span>
                                <span className="text-info">&lt;</span>
                                <span className="text-success">/h4</span>
                                <span className="text-info">&gt;</span>
                            </p>
                            <p className="my-1">
                                <span className="spangap">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <span className="spangap">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <span className="text-info">&lt;</span>
                                <span className="text-success">h5</span>
                                <span className="text-info">&gt;</span>
                                <span className="text-secondary">Heading h5</span>
                                <span className="text-info">&lt;</span>
                                <span className="text-success">/h5</span>
                                <span className="text-info">&gt;</span>
                            </p>
                            <p className="my-1">
                                <span className="spangap">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <span className="spangap">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <span className="text-info">&lt;</span>
                                <span className="text-success">h6</span>
                                <span className="text-info">&gt;</span>
                                <span className="text-secondary">Heading h6</span>
                                <span className="text-info">&lt;</span>
                                <span className="text-success">/h6</span>
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



export default Heading;


