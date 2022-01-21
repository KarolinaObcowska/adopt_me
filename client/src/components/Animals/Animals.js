import React, { useEffect, useState } from "react";
import Spinner from "../Spinner";
import Golden from "../../images/golden.jpg";
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
                  <div className="px-8 py-3">
                    <div className="text-5xl font-bold text-green-700 uppercase text-center">
                      <span>{animal.name}</span>
                    </div>
                  </div>
                  <Link
                    to={`/animals/${animal._id}`}
                    className="flex w-full h-12 text-md justify-center items-center uppercase font-light text-white rounded-b-lg bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600"
                  >
                    See more
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Animals;
