import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Spinner from "./Spinner";
import Golden from "../images/golden.jpg";
import g1 from "../images/golden1.jpg";
import g2 from "../images/golden2.jpg";
import g3 from "../images/golden3.jpg";
import g4 from "../images/golden4.jpg";
import g5 from "../images/golden5.jpg";
import g6 from "../images/golden6.jpg";

const Animal = () => {
  const [animal, setAnimal] = useState();
  const { id } = useParams();

  useEffect(() => {
    async function fetchAnimalById() {
      const response = await fetch(`http://localhost:8080/animal/${id}`);
      const data = await response.json();
      setAnimal(data.animal);
    }
    fetchAnimalById();
  }, [id]);

  return (
    <>
      {!animal ? (
        <Spinner />
      ) : (
        <div className="w-screen flex mt-28  sm:px-24 justify-center">
          <div className="flex-1 mb-20 grid grid-cols-1 md:grid-cols-2 mx-6 sm:ml-0 sm:w-4/5 w-screen">
            <div className="px-6">
              <img
                src={Golden}
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
                <Link
                to={{ pathname: 'https://www.schroniskowroclaw.pl/' }} target="_blank"
                  type="submit"
                  className="bg-gradient-to-r from-yellow-400 text-center to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 p-2 w-1/2 rounded-md text-white uppercase"
                >
                  
                  Adopt {animal.name}
                </Link>
              </div>
            </div>
            <div className="container mx-auto md:mt-0 mt-6 px-6">
              <div className="flex flex-row flex-wrap -mx-2">
                <div className="w-full md:w-1/2 h-64 md:h-auto mb-4 px-2">
                  <img
                    className="object-cover w-full h-full"
                    src={g1}
                    alt="dog"
                  />
                </div>
                <div className="w-full md:w-1/2 mb-4 px-2">
                  <div className="flex flex-col sm:flex-row md:flex-col -mx-2">
                    <div className="w-full sm:w-1/2 md:w-full h-48 xl:h-64 mb-4 sm:mb-0 md:mb-4 px-2">
                      <img
                        className="object-cover w-full h-full"
                        src={g6}
                        alt="dog"
                      />
                    </div>
                    <div className="w-full sm:w-1/2 md:w-full h-48 xl:h-64 px-2">
                      <img
                        className="object-cover w-full h-full"
                        src={g3}
                        alt="dog"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-1/3 h-32 md:h-48 mb-4 sm:mb-0 px-2">
                  <img
                    className="object-cover w-full h-full"
                    src={g4}
                    alt="dog"
                  />
                </div>
                <div className="w-full sm:w-1/3 h-32 md:h-48 mb-4 sm:mb-0 px-2">
                  <img
                    className="object-cover w-full h-full"
                    src={g5}
                    alt="dog"
                  />
                </div>
                <div className="w-full sm:w-1/3 h-32 md:h-48 px-2">
                  <img
                    className="object-cover w-full h-full"
                    src={g2}
                    alt="dog"
                  />
                </div>
              </div>
            </div>
            <div className="m-6 md:hidden flex justify-center items-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 p-2 w-full rounded-md text-white uppercase"
              >
                Adopt {animal.name}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Animal;
