import AnimalForm from "../AnimalForm";
import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Golden from "../../../images/golden.jpg";

import UserContext from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Modal from "../../Modal";
import Error404 from "../../Error404"

const UpdateAnimal = () => {
  const { id } = useParams()
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState();
  const [item, setItem] = useState();
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
  useEffect(() => {
    async function fetchAnimalById() {
      const response = await fetch(`http://localhost:8080/animal/${id}`);
      const data = await response.json();
      setItem(data.animal);
    }
    fetchAnimalById();
  }, [id]);

  async function handleSubmit(event) {
    event.preventDefault();
    const { type, breed, name, age, description } = animal;    
    const res = await fetch(`http://localhost:8080/animal/${id}`, {
      method: "PUT",
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
  <div className="flex lg:flex-row flex-col gap-6 w-screen justify-center items-center px-32 mt-10">
          <div className="relative w-screen h-full max-w-lg justify-center">
          <img
                src={Golden}
                className="border-4 border-solid border-yellow-400 inline ms:ml-0 h-44 w-44 sm:h-60 sm:w-60 rounded-full object-cover"
                alt=""
              />
              <span className="inline ml-6 text-5xl font-bold text-green-700">
                {item.name}
              </span>
            <form className="w-full h-full max-w-lg mt-6">
            <div className="lex flex-wrap -mx-3 mb-1">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="describe"
                >
                  Images (max. 10)
                </label>
                <input
                multiple
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-yellow-500"
                  id="grid-password"
                  type="file"
                  name="files"
                  aria-label="upload animal's images"
                  // value={images}
                  // onChange={}
                />
              </div>
            </div>
            <button
                type="submit"
                className="bg-yellow-400 p-2 w-full rounded-md text-white uppercase"
              >
                Add Images
              </button>
            </form>
            </div>
          <AnimalForm buttonText='Update' placeholders={item} handleChange={handleChange} handleSubmit={handleSubmit} animal={animal} />
          
        </div>
  );
};

export default UpdateAnimal;
