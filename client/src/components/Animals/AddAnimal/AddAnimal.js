import { useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Error404 from "../../Error404";
import AnimalForm from "../AnimalForm";

const AddAnimal = () => {
  const { authenticated } = useAuth();
  const navigate = useNavigate();

  const [animal, setAnimal] = useState({
    type: "",
    breed: "",
    name: "",
    age: "",
    description: "",
  });

  const placeholders = {
    type: "Dog, Cat...",
    breed: "Lablador, Husky...",
    name: "Elf, Jackie...",
    age: "1, 2...",
    description: "Describe dog...",
  };
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
    const data = await res.json();
    if (res.status !== 201) {
      console.log("asd");
    } else {
      navigate("/animals");
    }
  }
  return (
    <>
      {authenticated === true ? (
        <div className="relative sm:top-30 p-6 mt-10 w-screen bg-white-100 flex items-center justify-center">
          <AnimalForm
            animal={animal}
            placeholders={placeholders}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            buttonText="Create Animal"
          />
        </div>
      ) : (
        <Error404 />
      )}
    </>
  );
};

export default AddAnimal;
