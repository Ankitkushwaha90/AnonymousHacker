import React, {useState} from "react";

const Navigation = () => {
        const [show1, setShow1] = useState(false);
        const [show, setShow] = useState(false);
        return(
            <>
                <nav class="navbar navbar-expand-lg navbar-dark position-sticky  top-0 bg-dark py-0 zindexnav">
                  <div class="container-fluid">
                  <button 
                    class="navbar-toggler m-0"
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                    onClick={()=> setShow1(!show1)}
                    >
                      
                      <span class="navbar-toggler-icon"></span>
                    </button>

                    <a class="navbar-brand px-3 ms-auto" href="/">Getstarted</a>
                    
                    <button 
                    class="navbar-toggler"
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                    onClick={()=> setShow(!show)}
                    >
                      
                      <span class="navbar-toggler-icona">menu</span>
                    </button>
                    {/* SECONDS =================== */}
                    
                    <div class={`showhiddenmax collapse navbar-collapse ${show? "show" : ""}`} >
                      <ul class="navbar-nav mx-5 mb-2 mb-lgop-0 showhiddenmax">
                        <li class="nav-item ">
                          <a class="nav-link" href="/css/introduction">Introduction</a>
                        </li>
                      </ul>
                    </div>

                    {/* subnavbar seconds ends */}
                    
                    <div class={`collapse navbar-collapse  ${show1? "show" : ""}`} >
                      <ul class="navbar-nav mx-5 mb-2 mb-lgop-0 ">
                        <li class="nav-item">
                          <a   class="nav-link activeinhtml"  aria-current="page" href="/html/introduction">HTML</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link activeincss" href="/css/introduction">CSS</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link activeinjavascript" href="/javascript/introduction">JAVASCRIPT</a>
                        </li>
                        <li class="nav-item activeinphp">
                          <a class="nav-link" href="/php/introduction">PHP</a>
                        </li>
                        <li class="nav-item activeinpython">
                          <a class="nav-link" href="/python/introduction">PYTHON</a>
                        </li>
                        <li class="nav-item activeinc">
                          <a class="nav-link" href="/c/introduction">C</a>
                        </li>
                        
                      </ul>
                      <div className="ms-auto">
                        <a href="/" className="btn mx-1 btn-outline-success">HOME</a>
                        {/* <a href="#course" className="btn ms-auto btn-outline-success">COURSE</a> */}
                      </div>
                    </div>
                    

                  </div>
                </nav>
            </>
        );
}

export default Navigation;