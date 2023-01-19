import React from "react";

import './../node_modules/bootstrap/js/dist/carousel';
// import Nav_header from "./Web_Application/Nav_header";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import HTML from "./Programming/HTML/Document";
import CSS from "./Programming/CSS/Document";
import JAVASCRIPT from "./Programming/JAVASCRIPT/Document";
import PHP from "./Programming/PHP/Document";
import PYTHON from "./Programming/PYTHON/Document";
import C from "./Programming/C/Document";
import introduction from "./Programming/HTML/Document";
import Heading from "./Programming/HTML/Heading";
import Paragraphs from "./Programming/HTML/Paragraphs";
import TextFormating from "./Programming/HTML/Textformatting";
import Anchorsandhyperlinks from "./Programming/HTML/Anchorsandhyperlinks";
import { Helmet } from "react-helmet";
import Img from'./img/1.jpg'



const App = () =>{
      return(
        <>
        <Helmet>
          <link rel="icon" href="./img/Hacker.jpg"></link>
        </Helmet>
        
        {/* <Nav_header/> */}
        <Switch>
          <Route exact path="/trynowcreateweb999/" component={Home} />
          <Route exact path="/" component={Home} />
          <Route exact path="/html/document" component={HTML} />
          <Route path="/css/introduction" component={CSS} />
          <Route exact path="/javascript/introduction" component={JAVASCRIPT} />
          <Route path="/php/introduction" component={PHP} />
          <Route path="/c/introduction" component={C} />
          <Route path="/python/introduction" component={PYTHON} />
          {/* html sublink start */}
          <Route path="/html/introduction" component={introduction}/>
          <Route path="/html/heading" component={Heading}/>
          <Route path="/html/Paragraph" component={Paragraphs}/>
          <Route path="/html/Textformatting" component={TextFormating}/>
          <Route path="/html/Anchorsandhyperlinks" component={Anchorsandhyperlinks}/>
          <Route path="hello.jpg" component="{Img}"/>
          {/* html sublink end */}
        </Switch>
        <Helmet>
        
           {/* <link rel="icon" href="hello.jpg"></link> */}
        </Helmet>
        
        </>
      )
}
export default App;