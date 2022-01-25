import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Spinner from "../Spinner";
import AnimalGallery from "./AnimalGallery/AnimalGallery";

const Animal = () => {
  const [animal, setAnimal] = useState();
  const { id } = useParams();

  useEffect(() => {
    async function fetchAnimalById() {
      const response = await fetch(`http://localhost:8080/animal/${id}`);
      const data = await response.json();
      setAnimal(data.animal);
      console.log(data);
    }
    fetchAnimalById();
  }, [id]);

  async function handleAdoptAnimal(event) {
    event.preventDefault();
    await fetch(`http://localhost:8080/animal/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    window.location.href = "http://localhost:3000/animals";
    window.open("https://www.schroniskowroclaw.pl/", "_blank");
  }

  const showFullSizeImage = (img) => {
    img.style.transform = "scale(1.5)"
  }
  return (
    <>
      {!animal ? (
        <Spinner />
      ) : (
        <div className="w-screen flex mt-10  sm:px-24 justify-center">
          <div className="flex-1 mb-20 grid grid-cols-1 md:grid-cols-2 mx-6 sm:ml-0 sm:w-4/5 w-screen">
            <div className="px-6">
              <img
                src={
                  animal.images.length > 0 ? animal.images[0] : animal.avatar
                }
                className="border-4 border-solid border-yellow-400 inline ms:ml-0 h-44 w-44 sm:h-60 sm:w-60 rounded-full object-cover"
                alt=""
              />
              <span className="inline ml-6 text-5xl font-bold text-green-700">
                {animal.name}
              </span>
              <div className="mt-10 text-justify">
                <p className="tab text-md text-gray-600 font-light">
                  {animal.description}
                </p>
              </div>
              <div className="my-6 hidden md:flex justify-center items-center">
                <button
                  onClick={handleAdoptAnimal}
                  className="bg-gradient-to-r m-2 from-yellow-400 text-center to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 p-2 w-1/2 rounded-md text-white uppercase"
                >
                  Adopt
                </button>
                <Link
                  to={`/animals/${id}/update`}
                  className="bg-gradient-to-r m-2 from-yellow-400 text-center to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 p-2 w-1/2 rounded-md text-white uppercase"
                >
                  Update
                </Link>
              </div>
            </div>

            <AnimalGallery images={animal.images} clickHandler={showFullSizeImage} specificStyles='hidden' />

            <div className="m-6 md:hidden flex justify-center items-center">
              <button
                onClick={handleAdoptAnimal}
                className="bg-gradient-to-r from-yellow-400 m-2 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 p-2 w-full rounded-md text-white uppercase"
              >
                Adopt
              </button>
              <Link
                to={`/animals/${id}/update`}
                className="bg-gradient-to-r from-yellow-400 m-2 text-center to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 p-2 w-full rounded-md text-white uppercase"
              >
                Update
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Animal;
