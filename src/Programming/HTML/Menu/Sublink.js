import React from "react";
import './html.css';

const Sublink = () => {
    return(
        <>
            <div className="text-dark bg-light position-sticky "style={{ top : "50px" }}>
            <div className="my-5  showhidden zindexsub "  >
               <h6 className="text-center py-3">HTML</h6>
               <p className="text-center">
                   <ul className=" ">
                       <li className="d-block"><a className="nav-link text-dark" href="/html/introduction">Introduction</a></li>
                       <li className="d-block"><a className="nav-link text-dark" href="/html/heading">Heading</a></li>
                       <li className="d-block"><a className="nav-link text-dark" href="/html/Paragraph">Paragraph</a></li>
                       <li className="d-block"><a className="nav-link text-dark" href="/html/Textformatting">Textformatting</a></li>
                       <li className="d-block"><a className="nav-link text-dark" href="/html/Anchorsandhyperlinks">Anchor</a></li>
                       <li className="d-block"><a className="nav-link text-dark" href="">All tags</a></li>
                       <li className="d-block"><a className="nav-link text-dark" href="">All tags</a></li>
                       <li className="d-block"><a className="nav-link text-dark" href="">All tags</a></li>
                    </ul>
               </p>
           </div>
            </div>
           
        </>
    )
}

export default Sublink;