import React from "react";
import Navigation from "../Navigation";
import Sublink from "./Menu/Sublink";
import './../nbspcss.css';
import Message from "../Message";
import { Helmet } from "react-helmet";



const Document = () => {
        return(
            <>  
            <Helmet>
                    <meta charset="UTF-8"/>
                    <meta name="description" content=""/>
                    <meta name="keywords" content="WebTemplate, WebDesign, HTML, CSS, JavaScript"/>
                    <meta name="author" content="Ankit"/>

            </Helmet>
                <Navigation/>
                <div className="row container-fluid">
                    <div className="col-xxl-2 col-lg-2 col-md-0 col-sm-0  showhidden">
                        <Sublink/>
                    </div>
                    <div className="col-xxl-10 col-lg-10 col-md-12 col-sm-12 ">
                        {/* start page */}
                        <div className="my-5">
                            <h1 className="h1css  display-5 my-5">Getting started with HTML</h1>
                            <h2 className="">Introduction</h2>
                            <p>HTML(Hypertext Markup Language) make content of website page. uses a markup system composed of elements which represent specific content.Markup means show of content of webpage.Visual representations are defined by Cascading Style Sheets(CSS) and realized by browsers.CSS useful for making design.</p>
                            
                        </div>
                        <div className="my-5 py-5">
                            <h2 className="">Element insight</h2>
                            <p>The &lt;p&gt; This is use for common paragraph.</p>
                            <p>&lt;p&gt;  opent tag for starting.</p>
                            <p>&lt;/p&gt; close tag for ending.</p>
                            <p> slash (/) use for closing tag. </p>
                        </div>
                        <div className="my-5"> 
                            <h2 className="">Creating simple page</h2>
                            <p>Once created, this file can be opened in any web browser.</p>
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
                            <p className="my-1">
                                <span className="spangap">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <span className="text-info">&lt;</span>
                                <span className="text-success">head</span>
                                <span className="text-info">&gt;</span>
                            </p>
                            <p className="my-1">
                                <span className="spangap">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <span className="spangap">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <span className="text-info">&lt;</span>
                                <span className="text-success">meta</span>
                                <span className="text-success"> charset= </span>
                                <span className="text-secondary">"UTF-8"</span>
                                <span className="text-info">/&gt;</span>
                            </p>
                            <p className="my-1">
                                <span className="spangap">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <span className="spangap">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <span className="text-info">&lt;</span>
                                <span className="text-success">title</span>
                                <span className="text-info">&gt;</span>
                                <span className="text-secondary">code</span>
                                <span className="text-info">&lt;</span>
                                <span className="text-success">/title</span>
                                <span className="text-info">&gt;</span>
                            </p>
                            
                            <p className="my-1">   
                                <span className="spangap">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <span className="text-info">&lt;</span>
                                <span className="text-success">/head</span>
                                <span className="text-info">&gt;</span>
                            </p>
                            {/* head end */}

                            {/* head start */}
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
                                <span className="text-secondary">Frist text</span>
                                <span className="text-info">&lt;</span>
                                <span className="text-success">/h2</span>
                                <span className="text-info">&gt;</span>
                            </p>
                            <p className="my-1">
                                <span className="spangap">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <span className="spangap">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <span className="text-info">&lt;</span>
                                <span className="text-success">p</span>
                                <span className="text-info">&gt;</span>
                                <span className="text-secondary">Hello! World</span>
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
                            {/* start use tag */}
                        <div className="mx-1 my-4">
                            <div className="row ">
                                <div className="col-xxl-1 col-lg-1 col-md-12 col-sm-12 px-1">
                                    <h6 className="px-1">Tag</h6>
                                </div>
                                
                                <div className="col-xxl-11 col-lg-11 col-md-12 col-sm-12 px-1 ">
                                    <h6 className="px-5">use</h6>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-xxl-1 col-lg-1 col-md-12 col-sm-12 px-1">
                                    <h6 className="py-1">&lt;!DOCTYPE&gt;</h6>
                                </div>
                                
                                <div className="col-xxl-11 col-lg-11 col-md-12 col-sm-12 px-1 ">
                                    <p className="px-5">Use this tag in HTML5. Show this document of window of browser. </p>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-xxl-1 col-lg-1 col-md-12 col-sm-12 px-1">
                                    <h6 className="py-1">&lt;html&gt;</h6>
                                </div>
                                
                                <div className="col-xxl-11 col-lg-11 col-md-12 col-sm-12 px-1 ">
                                    <p className="px-5"> All tag use in html tag</p>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-xxl-1 col-lg-1 col-md-12 col-sm-12 px-1">
                                    <h6 className="py-1">&lt;head&gt;</h6>
                                </div>
                                
                                <div className="col-xxl-11 col-lg-11 col-md-12 col-sm-12 px-1 ">
                                    <p className="px-5"> All tag use in html tag</p>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-xxl-1 col-lg-1 col-md-12 col-sm-12 px-1">
                                    <h6 className="py-1">&lt;Meta&gt;</h6>
                                </div>
                                
                                <div className="col-xxl-11 col-lg-11 col-md-12 col-sm-12 px-1 ">
                                    <p className="px-5"> All tag use in html tag</p>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-xxl-1 col-lg-1 col-md-12 col-sm-12 px-1">
                                    <h6 className="py-1">&lt;title&gt;</h6>
                                </div>
                                
                                <div className="col-xxl-11 col-lg-11 col-md-12 col-sm-12 px-1 ">
                                    <p className="px-5"> Title tag is use for give title name of web page.</p>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-xxl-1 col-lg-1 col-md-12 col-sm-12 px-1">
                                    <h6 className="py-1">&lt;body&gt;</h6>
                                </div>
                                
                                <div className="col-xxl-11 col-lg-11 col-md-12 col-sm-12 px-1 ">
                                    <p className="px-5"> Body tag is use for content of web page . which that is show of  user. </p>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-xxl-1 col-lg-1 col-md-12 col-sm-12 px-1">
                                    <h6 className="py-1">&lt;h1&gt;</h6>
                                </div>
                                
                                <div className="col-xxl-11 col-lg-11 col-md-12 col-sm-12 px-1 ">
                                    <p className="px-5">h1 tag is use for title of paragraph .</p>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-xxl-1 col-lg-1 col-md-12 col-sm-12 px-1">
                                    <h6 className="py-1">&lt;p&gt;</h6>
                                </div>
                                
                                <div className="col-xxl-11 col-lg-11 col-md-12 col-sm-12 px-1 ">
                                    <p className="px-5"> p tag is use for any write of paragraph. </p>
                                </div>
                            </div>
                        </div>
                        
                    {/* end page */}
                    </div>

                </div>
                <Message/>
            </>

        )
}


export default Document;


