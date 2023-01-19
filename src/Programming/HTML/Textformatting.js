import React from "react";
import Navigation from "../Navigation";
import Sublink from "./Menu/Sublink";
import './../nbspcss.css';
import Message from "../Message";



const TextFormating = () => {
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
                            <h1 className="display-5 my-5">Text Formating</h1>
                            <h2>Highlighting</h2>
                        </div>
                        <div className="HTML Paragraphs">
                            &lt;p&gt;This is use for &lt;marks&gt;hight light content &lt;/marks&gt; hightlight &lt;/p&gt;<br/>
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

                            {/*  */}

                            
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
                                <span className="text-secondary">This is <span className="my-1">
                                <span className="spangap">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <span className="spangap">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <span className="text-info">&lt;</span>
                                <span className="text-success">marks</span>
                                <span className="text-info">&gt;</span>
                                <span className="text-secondary">This is  paragraph</span>
                                <span className="text-info">&lt;</span>
                                <span className="text-success">/marks</span>
                                <span className="text-info">&gt;</span>
                            </span> paragraph</span>
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

                        <div className="my-5"> 
                            <h2> Bold, Italic, and Underline </h2>
                            <h4>Bold</h4>
                            <p>&lt;strong&gt;Bold Text Here&lt;/strong&gt;</p>
                            <p>or</p>
                            <p>&lt;b&gt;Bold Text Here&lt;/b&gt;</p>
                            <h4>Italic</h4>
                            <p>&lt;em&gt;Bold Text Here&lt;/em&gt;</p>
                            <p>or</p>
                            <p>&lt;i&gt;Bold Text Here&lt;/i&gt;</p>
                            <h4>Underlined text</h4>
                            <p>&lt;p&gt;Hello!&lt;u&gt;this main line&lt;/u&gt;world&lt;/p&gt;</p>
                        </div>
                        <div className="my-5"> 
                            <h2>For Example </h2>
                            <p></p>
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

                            {/*  */}

                            
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
                                <span className="text-secondary">blod</span>
                                <span className="text-info">&lt;</span>
                                <span className="text-success">/h1</span>
                                <span className="text-info">&gt;</span>
                            </p>
                            <p className="my-1">
                                <span className="spangap">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <span className="spangap">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <span className="text-info">&lt;</span>
                                <span className="text-success">strong</span>
                                <span className="text-info">&gt;</span>
                                <span className="text-secondary">This is  paragraph</span>
                                <span className="text-info">&lt;</span>
                                <span className="text-success">/strong</span>
                                <span className="text-info">&gt;</span>
                            </p>
                            <p className="my-1">
                                <span className="spangap">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <span className="spangap">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <span className="text-info">&lt;</span>
                                <span className="text-success">b</span>
                                <span className="text-info">&gt;</span>
                                <span className="text-secondary">This is  paragraph</span>
                                <span className="text-info">&lt;</span>
                                <span className="text-success">/b</span>
                                <span className="text-info">&gt;</span>
                            </p>

                            <p className="my-1">
                                <span className="spangap">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <span className="spangap">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <span className="text-info">&lt;</span>
                                <span className="text-success">h1</span>
                                <span className="text-info">&gt;</span>
                                <span className="text-secondary">Italic</span>
                                <span className="text-info">&lt;</span>
                                <span className="text-success">/h1</span>
                                <span className="text-info">&gt;</span>
                            </p>
                            <p className="my-1">
                                <span className="spangap">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <span className="spangap">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <span className="text-info">&lt;</span>
                                <span className="text-success">em</span>
                                <span className="text-info">&gt;</span>
                                <span className="text-secondary">This is  paragraph</span>
                                <span className="text-info">&lt;</span>
                                <span className="text-success">/em</span>
                                <span className="text-info">&gt;</span>
                            </p>
                            <p className="my-1">
                                <span className="spangap">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <span className="spangap">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <span className="text-info">&lt;</span>
                                <span className="text-success">i</span>
                                <span className="text-info">&gt;</span>
                                <span className="text-secondary">This is  paragraph</span>
                                <span className="text-info">&lt;</span>
                                <span className="text-success">/i</span>
                                <span className="text-info">&gt;</span>
                            </p>
                            <p className="my-1">
                                <span className="spangap">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <span className="spangap">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <span className="text-info">&lt;</span>
                                <span className="text-success">h1</span>
                                <span className="text-info">&gt;</span>
                                <span className="text-secondary">Under line text</span>
                                <span className="text-info">&lt;</span>
                                <span className="text-success">/h1</span>
                                <span className="text-info">&gt;</span>
                            </p>
                            <p className="my-1">
                                <span className="spangap">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <span className="spangap">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <span className="text-info">&lt;</span>
                                <span className="text-success">p</span>
                                <span className="text-info">&gt;</span>
                                <span className="text-secondary">This is <span className="my-1">
                                <span className="spangap">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <span className="spangap">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <span className="text-info">&lt;</span>
                                <span className="text-success">u</span>
                                <span className="text-info">&gt;</span>
                                <span className="text-secondary">main text paragraph</span>
                                <span className="text-info">&lt;</span>
                                <span className="text-success">/u</span>
                                <span className="text-info">&gt;</span>
                            </span> paragraph</span>
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


export default TextFormating;


