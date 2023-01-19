import React from "react";
import Navigation from "./Web_Application/Navigation";
import Carousel from "./Web_Application/Carousel";
import About from "./Web_Application/About";
import Download from "./Web_Application/Download";
import Reviews from "./Web_Application/Reviews";
import Service from "./Web_Application/Service";
import Programming from "./Web_Application/Programming";
import Team from "./Web_Application/Team";
import OurWorks from "./Web_Application/OurWorks";
import Join from "./Web_Application/Joinus";
import Contact from "./Web_Application/Contacts";
import Footer from "./Web_Application/footer";


const Home = () => {
    return(
        <>
            <Navigation/>
            <Carousel/>
            <About/>
            <Download/>
            <Programming/>
            <Reviews/>
            <Service/>
            <Team/>
            <OurWorks/>
            <Join/>
            <Contact/>
            <Footer/>
        </>
    )
}

export default Home;