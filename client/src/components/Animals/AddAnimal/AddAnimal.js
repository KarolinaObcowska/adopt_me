import { useState, useContext } from "react";
import UserContext from "../../../utils/auth-context";
import { useNavigate } from "react-router-dom";
import Modal from "../../Modal";
import Error404 from "../../Error404"
import AnimalForm from "../AnimalForm";

const AddAnimal = () => {
  const { token } = useContext(UserContext);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState();
  const [animal, setAnimal] = useState({
    type: "",
    breed: "",
    name: "",
    age: "",
    description: "",
  });
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setAnimal({
      ...animal,
      [name]: value,
    });
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const { type, breed, name, age, description } = animal;    
    const res = await fetch("http://localhost:8080/animal", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(animal),
    });
    const data =  await res.json();
    if (res.status !== 201) {
      setShowModal(true);
      setMessage(data.msg);
    } else {
      navigate("/animals");
    }
  }
  return (
    <>
    {token && token === true ? (
    <div className="fixed top-16 sm:top-30 p-6 mt-3 w-screen bg-white-100 flex items-center justify-center h-screen">
    {showModal ? (
        <Modal show={true} msg={message} />
      ) : (
          <AnimalForm animal={animal} handleSubmit={handleSubmit} handleChange={handleChange} buttonText='Create Animal'/>
          ) }
        </div>
    ) : (
      <Error404 />
    )}
    </>
  );
};

export default AddAnimal;
