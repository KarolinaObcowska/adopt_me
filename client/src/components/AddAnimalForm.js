import React, { useState, useContext } from "react";
import UserContext from "../utils/auth-context";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";

const AddAnimalForm = () => {
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

  async function handleAddAnimal(event) {
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
    console.log(data)
    if (res.status !== 201) {
      setShowModal(true);
      setMessage(data.msg);
    } else {
      navigate("/animals");
    }
  }
  return (
    <>
    {token && (
      showModal ? (
        <Modal show={true} msg={message} />
      ) : (
<div className="fixed top-16 sm:top-30 p-6 mt-3 w-screen bg-white-100 flex items-center justify-center h-screen">
          <form className="w-full h-full max-w-lg" onSubmit={handleAddAnimal}>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="animal type"
                >
                  Animal
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="type"
                  type="text"
                  name="type"
                  aria-label="animal type label"
                  placeholder="Dog etc."
                  value={animal.type}
                  onChange={handleChange}
                />
              </div>
              <div className="w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="breed"
                >
                  Breed
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="breed"
                  name="breed"
                  type="text"
                  aria-label="breed label"
                  value={animal.breed}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="animal name"
                >
                  Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="name"
                  name="name"
                  type="text"
                  aria-label="animal name label"
                  value={animal.name}
                  onChange={handleChange}
                />
              </div>
              <div className="w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="age"
                >
                  Age
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="age"
                  name="age"
                  type="text"
                  aria-label="age label"
                  value={animal.age}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="describe"
                >
                  Description
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="text"
                  name="description"
                  aria-label="describe label"
                  value={animal.description}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              {/* <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="images"
                >
                  Images
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="images"
                  name="images"
                  type="file"
                  aria-labelledby="images label"
                />
              </div> */}
            </div>
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="bg-yellow-400 p-2 w-full rounded-md text-white uppercase"
              >
                Add animal
              </button>
            </div>
          </form>
        </div>
        ) 
      )}
      {
        navigate('/auth/login')
      }
    </>
  );
};

export default AddAnimalForm;
