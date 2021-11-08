import React, {useState, useEffect} from "react";
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
import UserContext from '../utils/auth-context'
import Error404 from "./Error404";

const Layout = () => {
  const [token, setToken] = useState({
    token: undefined,
  })

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token")
      if (token === null) {
        localStorage.setItem("ayth-token", "");
        token = ""
      } else {
        setToken({
          token,
        })
      }
    }
    checkLoggedIn()
  }, [])

  return (
    <div className="overflow-y-scroll h-full">
      <Router>
        <UserContext.Provider value={{token, setToken}} >
          <Navbar />
          <MobileNavbar />
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
        </UserContext.Provider >
      </Router>
    </div>
  );
};

export default Layout;
