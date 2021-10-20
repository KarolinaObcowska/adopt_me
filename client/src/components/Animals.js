import React from "react";
import Golden from "../images/golden.jpg";
import Border from "../images/border.jpg";
import Husky from "../images/husky.jpg";
import Lablador from "../images/lablador.jpg";
import American from "../images/american.jpg";
import Amstaff from "../images/amstaff.jpg";

const Animals = () => {
  return (
    <div className="w-screen flex px-6 justify-center items-center mb-20">
      <div className="flex items-center flex-row justify-center intems-center flex-wrap md:w-4/5 w-screen">
        <div className="rounded-lg w-96 md:min-w-60">
          <div className="bg-gray-200 rounded-lg mx-6 mb-6">
            <img
              src={Golden}
              alt="golden retriver"
              className="w-full h-48 transition object-cover duration-300 rounded-t-lg sm:h-56 opacity-80 hover:opacity-100"
            />

            <div className="px-10 py-6 mb-10">
              <div className="mb-4 text-3xl font-bold text-green-700 uppercase text-center">
                Jackie
              </div>
              <span className="text-sm">Golden Retriver, 3 years old</span>
            </div>
            <button className="w-full h-12 text-lg font-extrabold text-gray-100 transition duration-300 bg-yellow-400 rounded-b-lg hover:bg-yellow-500">
              See more
            </button>
          </div>
        </div>
        <div className="rounded-lg w-96 md:min-w-60">
          <div className="bg-gray-200 rounded-lg mx-6 mb-6">
            <img
              src={Border}
              alt=""
              className="w-full h-48 transition object-cover duration-300 rounded-t-lg sm:h-56 opacity-80 hover:opacity-100"
            />

            <div className="px-10 py-6 mb-10 ">
              <div className="mb-4 text-3xl font-bold text-green-700 uppercase text-center">
                Elisse
              </div>
              <span className="text-sm">Border Colie, 2 years old</span>
            </div>
            <button className="w-full h-12 text-lg font-extrabold text-gray-100 transition duration-300 bg-yellow-400 rounded-b-lg hover:bg-yellow-500">
              See more
            </button>
          </div>
        </div>
        <div className="rounded-lg w-96 md:min-w-60">
          <div className="bg-gray-200 rounded-lg mx-6 mb-6">
            <img
              src={American}
              alt=""
              className="w-full h-48 transition object-cover duration-300 rounded-t-lg sm:h-56 opacity-80 hover:opacity-100"
            />
            <div className="px-10 py-6 mb-10">
              <div className="mb-4 text-3xl font-bold text-green-700 uppercase text-center">
                Luna
              </div>
              <span className="text-sm">American bull, 4 years old</span>
            </div>
            <button className="w-full h-12 text-lg font-extrabold text-gray-100 transition duration-300 bg-yellow-400 rounded-b-lg hover:bg-yellow-500">
              See more
            </button>
          </div>
        </div>
        <div className="rounded-lg w-96 md:min-w-60">
          <div className="bg-gray-200 rounded-lg mx-6 mb-6">
            <img
              src={Amstaff}
              alt=""
              className="w-full h-48 transition object-cover duration-300 rounded-t-lg sm:h-56 opacity-80 hover:opacity-100"
            />
            <div className="px-10 py-6 mb-10">
              <div className="mb-4 text-3xl font-bold text-green-700 uppercase text-center">
                Jack
              </div>
              <span className="text-sm">Amstaff, 6 years old</span>
            </div>
            <button className="w-full h-12 text-lg font-extrabold text-gray-100 transition duration-300 bg-yellow-400 rounded-b-lg hover:bg-yellow-500">
              See more
            </button>
          </div>
        </div>
        <div className="rounded-lg w-96 md:min-w-60">
          <div className="bg-gray-200 rounded-lg mx-6 mb-6">
            <img
              src={Husky}
              alt=""
              className="w-full h-48 transition object-cover duration-300 rounded-t-lg sm:h-56 opacity-80 hover:opacity-100"
            />
            <div className="px-10 py-6 mb-10">
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
        <div className="rounded-lg w-96 md:min-w-60">
          <div className="bg-gray-200 rounded-lg mx-6 mb-6">
            <img
              src={Lablador}
              alt=""
              className="w-full h-48 transition object-cover duration-300 rounded-t-lg sm:h-56 opacity-80 hover:opacity-100"
            />
            <div className="px-10 py-6 mb-10">
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
