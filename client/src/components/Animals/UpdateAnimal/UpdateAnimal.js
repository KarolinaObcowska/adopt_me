import AnimalForm from "../AnimalForm";
import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ModalContext } from "../../../context/modalContext";
import AnimalGallery from "../AnimalGallery/AnimalGallery";
import UpdateImages from "./UpdateImages";
import { useAuth } from "../../../hooks/useAuth";
import Error404 from "../../Error404";

const UpdateAnimal = () => {
  const { authenticated } = useAuth();
  const { handleModal } = useContext(ModalContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const [item, setItem] = useState({});
  const [updateAnimal, setUpdateAnimal] = useState({
    type: "",
    breed: "",
    name: "",
    age: "",
    description: "",
  });

  useEffect(() => {
    async function fetchAnimalById() {
      const response = await fetch(`http://localhost:8080/animal/${id}`);
      const data = await response.json();
      setItem(data.animal);
    }
    fetchAnimalById();
  }, [item, id]);

  function handleChangeInput(event) {
    const { name, value } = event.target;
    setUpdateAnimal({
      ...updateAnimal,
      [name]: value,
    });
  }

  async function handleUpdateAnimal(event) {
    event.preventDefault();
    const { type, breed, name, age, description } = updateAnimal;
    const res = await fetch(`http://localhost:8080/animal/${id}`, {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateAnimal),
    });
    const data = await res.json();
    if (res.status !== 200) {
      handleModal(data.msg);
    } else {
      navigate(`/animals/${id}`);
    }
  }

  async function deleteAnimal(e, image) {
    const img = {
      name: image,
    };
    e.preventDefault();
    const res = await fetch(`http://localhost:8080/animal/${id}/images`, {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(img),
    });
    const data = await res.json();
    if (res.status !== 200) {
      handleModal(data.msg);
    }
  }

  return (
    <>
      {authenticated ? (
        <div className="px-5 flex flex-col lg:flex-row gap-5 w-screen lg:items-start md:items-center justify-center mt-10 mb-20">
          <div className="lg:flex flex-col">
            <div className="flex flex-col justify-center">
              <img
                src={
                  item.images && item.images.length > 0
                    ? item.images[0]
                    : item.avatar
                }
                className="m-auto border-4 border-solid border-yellow-400 inline ms:ml-0 h-60 w-60 sm:h-60 sm:w-60 rounded-full mb-4 object-cover"
                alt=""
              />
              <span className="text-center inline ml-6 text-5xl font-bold text-green-700">
                {item.name}
              </span>
              <UpdateImages navigate={navigate} id={id} />
            </div>
            <AnimalForm
              buttonText="Update"
              placeholders={item}
              handleChange={handleChangeInput}
              handleSubmit={handleUpdateAnimal}
              animal={updateAnimal}
            />
          </div>
          <div className="lg:w-1/2 w-full">
            <AnimalGallery images={item.images} clickHandler={deleteAnimal} />
          </div>
        </div>
      ) : (
        <Error404 />
      )}
    </>
  );
};

export default UpdateAnimal;
