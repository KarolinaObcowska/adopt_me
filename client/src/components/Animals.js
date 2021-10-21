import React from "react";
import Golden from "../images/golden.jpg";
import Border from "../images/border.jpg";
import Husky from "../images/husky.jpg";
import Lablador from "../images/lablador.jpg";
import American from "../images/american.jpg";
import Amstaff from "../images/amstaff.jpg";

const Animals = () => {
  return (
    <div className="w-screen flex mt-28 px-6 justify-center items-center mb-20">
      <div className="flex flex-row justify-center items-center flex-wrap md:w-4/5 w-screen">
        <div className="rounded-lg flex-1">
          <div className="bg-gray-200 rounded-lg mx-6 mb-6">
            <img
              src={Golden}
              alt="golden retriver"
              className="w-full h-48 transition object-cover duration-300 rounded-t-lg sm:h-56 opacity-80 hover:opacity-100"
            />

            <div className="px-8 py-3 mb-1 ">
              <div className="mb-4 text-3xl font-bold text-green-700 uppercase text-center">
                Jackie
              </div>
              <span className="text-xs">G.Retriver, 3 years old</span>
            </div>
            <button className="w-full h-12 text-lg font-extrabold text-gray-100 transition duration-300 bg-yellow-400 rounded-b-lg hover:bg-yellow-500">
              See more
            </button>
          </div>
        </div>
        <div className="rounded-lg flex-1">
          <div className="bg-gray-200 rounded-lg mx-6 mb-6">
            <img
              src={Border}
              alt=""
              className="w-full h-48 transition object-cover duration-300 rounded-t-lg sm:h-56 opacity-80 hover:opacity-100"
            />

            <div className="px-8 py-3 mb-1 ">
              <div className="mb-4 text-3xl font-bold text-green-700 uppercase text-center">
                Elisse
              </div>
              <span className="text-xs">Border Colie, 2 years old</span>
            </div>
            <button className="w-full h-12 text-lg font-extrabold text-gray-100 transition duration-300 bg-yellow-400 rounded-b-lg hover:bg-yellow-500">
              See more
            </button>
          </div>
        </div>
        <div className="rounded-lg flex-1">
          <div className="bg-gray-200 rounded-lg mx-6 mb-6">
            <img
              src={American}
              alt=""
              className="w-full h-48 transition object-cover duration-300 rounded-t-lg sm:h-56 opacity-80 hover:opacity-100"
            />
            <div className="px-8 py-3 mb-1 ">
              <div className="mb-4 text-3xl font-bold text-green-700 uppercase text-center">
                Luna
              </div>
              <span className="text-xs">American bull, 4 years old</span>
            </div>
            <button className="w-full h-12 text-lg font-extrabold text-gray-100 transition duration-300 bg-yellow-400 rounded-b-lg hover:bg-yellow-500">
              See more
            </button>
          </div>
        </div>
        <div className="rounded-lg flex-1">
          <div className="bg-gray-200 rounded-lg mx-6 mb-6">
            <img
              src={Amstaff}
              alt=""
              className="w-full h-48 transition object-cover duration-300 rounded-t-lg sm:h-56 opacity-80 hover:opacity-100"
            />
            <div className="px-8 py-3 mb-1 ">
              <div className="mb-4 text-3xl font-bold text-green-700 uppercase text-center">
                Steven
              </div>
              <span className="text-xs">Amstaff, 4 years old</span>
            </div>
            <button className="w-full h-12 text-lg font-extrabold text-gray-100 transition duration-300 bg-yellow-400 rounded-b-lg hover:bg-yellow-500">
              See more
            </button>
          </div>
        </div>
        <div className="rounded-lg flex-1">
          <div className="bg-gray-200 rounded-lg mx-6 mb-6">
            <img
              src={Husky}
              alt=""
              className="w-full h-48 transition object-cover duration-300 rounded-t-lg sm:h-56 opacity-80 hover:opacity-100"
            />
            <div className="px-8 py-3 mb-1 ">
              <div className="mb-4 text-3xl font-bold text-green-700 uppercase text-center">
                Steve
              </div>
              <span className="text-sm">Siberian Husky, 6 years old</span>
            </div>
            <button className="w-full h-12 text-lg font-extrabold text-gray-100 transition duration-300 bg-yellow-400 rounded-b-lg hover:bg-yellow-500">
              See more
            </button>
          </div>
        </div>
        <div className="rounded-lg flex-1">
          <div className="bg-gray-200 rounded-lg mx-6 mb-6">
            <img
              src={Lablador}
              alt=""
              className="w-full h-48 transition object-cover duration-300 rounded-t-lg sm:h-56 opacity-80 hover:opacity-100"
            />
            <div className="px-8 py-3 mb-1 ">
              <div className="mb-4 text-3xl font-bold text-green-700 uppercase text-center">
                Loeon
              </div>
              <span className="text-sm">Lablador, 2 year old</span>
            </div>
            <button className="w-full h-12 text-lg font-extrabold text-gray-100 transition duration-300 bg-yellow-400 rounded-b-lg hover:bg-yellow-500">
              See more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Animals;
