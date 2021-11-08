import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Animals from "./Animals";
import Hero from "./Hero";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import AddAnimalForm from "./AddAnimalForm";
import Animal from "./Animal";
import Footer from "./Footer";
import MobileNavbar from "./MobileNavbar";
import Error404 from "./Error404";

const Layout = ({isAuthenticated, setIsAuthenticated}) => {
  
  return (
    <div className="overflow-y-scroll h-full">
      <Router>
        <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>
        <MobileNavbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>
        <Switch>
          <Route path="/" exact component={Hero} />
          <Route path="/animals/add" exact component={AddAnimalForm} />

          <Route path="/animals" exact component={Animals} />
          <Route path="/animals/:id" exact component={Animal} />
          <Route path="/auth/signup" exact component={SignUpForm} />
          <Route path="/auth/login" exact component={LoginForm} />
          {/* <Route path="/animals/:id/addimages" exact /> */}
          <Route path="*" exact component={Error404} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default Layout;
