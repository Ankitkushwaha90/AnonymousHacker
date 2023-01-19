import React from "react";

const Nav_header = () => {
        return(
            <>
            <div className="header my-1 ">
                <div className="container d-flex">
                    <div className="me-auto">
                        <a href="/"><button className="btn btn-outline-success mx-1">HOME</button></a>
                        <a href="/Course"><button className="btn btn-outline-success mx-1">COURSE</button></a>
                        
                    </div>
                    <div className="ms-auto">
                        
                    </div>
                </div>
            </div>
            </>
        )
}

export default Nav_header;