import React from "react";
import Navigation from "../Navigation";
import Sublink from "./Menu/Sublink";


const Document = () => {
        return(
            <>  
                <Navigation/>
                <div className="row container-fluid">
                    <div className="col-xxl-2 col-lg-2 col-md-0 col-sm-0 ">
                        <Sublink/>
                    </div>
                    <div className="col-xxl-10 col-lg-10 col-md-12 col-sm-12 ">
                        <div className="my-5">
                            <h6 className="display-4">I C am h2 elements i am display-4</h6>
                        </div>
                    </div>
                </div>
            </>
        )
}


export default Document;