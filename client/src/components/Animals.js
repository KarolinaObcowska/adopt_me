import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import Golden from "../images/golden.jpg";
import { Link } from "react-router-dom";

const Animals = () => {
  const [animals, setAnimals] = useState([]);
  useEffect(() => {
    async function fetchAnimals() {
      const res = await fetch("http://localhost:8080/animal");
      const data = await res.json();
      setAnimals(data.animals);
    }
    fetchAnimals();
  }, []);
  return (
    <>
    {!animals ? (
      <Spinner />
    ) : (
      <div
      className="w-screen flex mt-28 px-6 justify-center items-center mb-20"
      aria-label="Animals for adopt"
    >
      <div className="flex flex-row justify-center items-center flex-wrap md:w-4/5 w-screen">
        {animals.map((animal) => (
          <div className="rounded-lg flex-1" key={animal._id}>
            <div className="bg-gray-200 rounded-lg mx-6 mb-6">
              <img
                src={Golden}
                alt="golden retriver"
                className="w-full h-48 transition object-cover duration-300 rounded-t-lg sm:h-56 opacity-80 hover:opacity-100"
              />
              <div className="px-8 py-3 mb-1 ">
                <div className="mb-4 text-5xl font-bold text-green-700 uppercase text-center">
                  <span>{animal.name}</span>
                </div>
                <p className="text-xs">
                  {animal.breed}
                  <br />
                  {animal.age}years old
                </p>
              </div>
              <Link
                to={`/animals/${animal._id}`}
                className="flex w-full h-12 text-xl justify-center items-center font-extrabold text-gray-100 transition duration-300 bg-yellow-400 rounded-b-lg hover:bg-yellow-500"
              >
                See more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    )
  }
  </>
    
  );
};

export default Animals;
