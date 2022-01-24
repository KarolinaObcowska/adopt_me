import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Animals from "./Animals/Animals";
import Hero from "./Hero";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import AddAnimal from "./Animals/AddAnimal/AddAnimal";
import UpdateAnimal from "./Animals/UpdateAnimal/UpdateAnimal";
import Animal from "./Animals/Animal";
import Footer from "./Footer";
import MobileNavbar from "./Navbar/MobileNavbar";
import Error404 from "./Error404";

const Layout = () => {
  return (
    <div className="overflow-y-scroll h-screen">
      <Navbar />
      <MobileNavbar />
      <Routes>
        <Route path="/" exact element={<Hero />} />
        <Route path="/animals/add" exact element={<AddAnimal />} />
        <Route path="/animals" exact element={<Animals />} />
        <Route path="/animals/:id" exact element={<Animal />} />
        <Route path="/animals/:id/update" exact element={<UpdateAnimal />} />
        <Route path="/auth/signup" exact element={<SignUpForm />} />
        <Route path="/auth/login" exact element={<LoginForm />} />
        <Route path="*" exact element={<Error404 />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Layout;
