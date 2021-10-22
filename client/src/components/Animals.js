import React from "react";
import Golden from "../images/golden.jpg";
import Border from "../images/border.jpg";
import Husky from "../images/husky.jpg";
import Lablador from "../images/lablador.jpg";
import American from "../images/american.jpg";
import Amstaff from "../images/amstaff.jpg";
import { Link } from "react-router-dom";

const Animals = () => {
  return (
    <div
      className="w-screen flex mt-28 px-6 justify-center items-center mb-20"
      aria-label="Animals for adopt"
    >
      <div className="flex flex-row justify-center items-center flex-wrap md:w-4/5 w-screen">
        <div className="rounded-lg flex-1">
          <div className="bg-gray-200 rounded-lg mx-6 mb-6">
            <img
              src={Golden}
              alt="golden retriver"
              className="w-full h-48 transition object-cover duration-300 rounded-t-lg sm:h-56 opacity-80 hover:opacity-100"
            />

            <div className="px-8 py-3 mb-1 ">
              <div className="mb-4 text-5xl font-bold text-green-700 uppercase text-center">
                <span>Jackie</span>
              </div>
              <p className="text-xs">
                G.Retriver
                <br />3 years old
              </p>
            </div>
            <Link
              to="/animal/:id"
              className="flex w-full h-12 text-xl justify-center items-center font-extrabold text-gray-100 transition duration-300 bg-yellow-400 rounded-b-lg hover:bg-yellow-500"
            >
              See more
            </Link>
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
              <div className="mb-4 text-5xl font-bold text-green-700 uppercase text-center">
                <span>Elisse</span>
              </div>
              <p className="text-xs">
                Border Colie
                <br />2 years old
              </p>
            </div>
            <Link
              to="/animal/:id"
              className="flex w-full h-12 text-xl justify-center items-center font-extrabold text-gray-100 transition duration-300 bg-yellow-400 rounded-b-lg hover:bg-yellow-500"
            >
              See more
            </Link>
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
              <div className="mb-4 text-5xl font-bold text-green-700 uppercase text-center">
                <span>Luna</span>
              </div>
              <p className="text-xs">
                American bull
                <br />4 years old
              </p>
            </div>
            <Link
              to="/animal/:id"
              className="flex w-full h-12 text-xl justify-center items-center font-extrabold text-gray-100 transition duration-300 bg-yellow-400 rounded-b-lg hover:bg-yellow-500"
            >
              See more
            </Link>
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
              <div className="mb-4 text-5xl font-bold text-green-700 uppercase text-center">
                <span>Steven</span>
              </div>
              <p className="text-xs">
                Amstaff
                <br />4 years old
              </p>
            </div>
            <Link
              to="/animal/:id"
              className="flex w-full h-12 text-xl justify-center items-center font-extrabold text-gray-100 transition duration-300 bg-yellow-400 rounded-b-lg hover:bg-yellow-500"
            >
              See more
            </Link>
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
              <div className="mb-4 text-5xl font-bold text-green-700 uppercase text-center">
                <span>Steve</span>
              </div>
              <p className="text-sm">
                Siberian Husky
                <br />6 years old
              </p>
            </div>
            <Link
              to="/animal/:id"
              className="flex w-full h-12 text-xl justify-center items-center font-extrabold text-gray-100 transition duration-300 bg-yellow-400 rounded-b-lg hover:bg-yellow-500"
            >
              See more
            </Link>
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
              <div className="mb-4 text-5xl font-bold text-green-700 uppercase text-center">
                <span>Loeon</span>
              </div>
              <p className="text-sm">
                Lablador <br /> 2 year old
              </p>
            </div>
            <Link
              to="/animal/:id"
              className="flex w-full h-12 text-xl justify-center items-center font-extrabold text-gray-100 transition duration-300 bg-yellow-400 rounded-b-lg hover:bg-yellow-500"
            >
              See more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Animals;
