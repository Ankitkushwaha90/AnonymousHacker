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
          <Route exact path="/trynowcreateweb999/html/document" component={HTML} />
          <Route path="/trynowcreateweb999/css/introduction" component={CSS} />
          <Route exact path="/trynowcreateweb999/javascript/introduction" component={JAVASCRIPT} />
          <Route path="/trynowcreateweb999/php/introduction" component={PHP} />
          <Route path="/trynowcreateweb999/c/introduction" component={C} />
          <Route path="/trynowcreateweb999/python/introduction" component={PYTHON} />
          {/* html sublink start */}
          <Route path="/trynowcreateweb999/html/introduction" component={introduction}/>
          <Route path="/trynowcreateweb999/html/heading" component={Heading}/>
          <Route path="/trynowcreateweb999/html/Paragraph" component={Paragraphs}/>
          <Route path="/trynowcreateweb999/html/Textformatting" component={TextFormating}/>
          <Route path="/trynowcreateweb999/html/Anchorsandhyperlinks" component={Anchorsandhyperlinks}/>
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
