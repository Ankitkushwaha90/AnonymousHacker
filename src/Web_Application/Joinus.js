import React from "react";

const Join = () => {
        return(
            <>
            <div className="py-5" id="joinus">
                <div  className="my-4 mx-4 bg-light" >
                    <div className="" >
                        <h2 className="text-center">JOIN US</h2>
                        <hr className="mx-auto w-25"/>
                        <p className="text-center">Follow us on social networks</p>
                    </div>
                    <div className="d-flex p-5 justify-content-center flex-wrap container">
                    <i class="bgclippath bg-info px-4 py-3 m-2 fa-3x fab fa-facebook-f"></i>
                    <i class="bgclippath bg-info px-4 py-3 m-2 fa-3x  fab fa-twitter"></i>
                    <i class="bgclippath bg-info px-4 py-3 m-2 fa-3x   fab fa-google-plus-square"></i>
                    <i class="bgclippath bg-info px-4 py-3 m-2 fa-3x bg-info fab fa-instagram-square"></i>
                    </div>
                </div>
            </div>
            
            </>
        )
}
export default Join;