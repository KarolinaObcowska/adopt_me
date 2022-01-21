import AnimalForm from "../AnimalForm";
import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import UserContext from "../../../utils/auth-context";
import { useNavigate } from "react-router-dom";
import Modal from "../../Modal";
import Error404 from "../../Error404"

const UpdateAnimal = () => {
  const { id } = useParams()
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

  return <div className="relative w-screen  mt-10 mb-40 gap-1 top-16 sm:top-30 p-10 lg:p-1 flex flex-col bg-white-100  items-center justify-center h-screen">
            <form className="w-full h-full max-w-lg">
            <div className="lex flex-wrap -mx-3 mb-2">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="describe"
                >
                  Images
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
          <AnimalForm buttonText='Update' handleChange={handleChange} handleSubmit={handleSubmit} animal={animal} />
          
        </div>;
};

export default UpdateAnimal;
