import React from "react";

const Button = () => {
    

    return(
            <>
            <div className="mybtncss">
                <button>hello</button>
                <i className="fa-5x fa fa-arrow-up"   >hello </i>
            </div>
            </>
    );

}

    const mybutton = document.getElementById("#myBtn");
    
    window.onscroll = function() {scrollFunction()};
    
    function scrollFunction(){
        if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40){
            // mybutton.style.display="block";
            console.log("hello");
        }else{
            // mybutton.style.display="none";
            console.log("welcome else");
        }
    };
export default Button;