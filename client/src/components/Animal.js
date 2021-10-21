import React from "react";
import Golden from "../images/golden.jpg";
import g1 from '../images/golden1.jpg'
import g2 from '../images/golden2.jpg'
import g3 from '../images/golden3.jpg'
import g4 from '../images/golden4.jpg'
import g5 from '../images/golden5.jpg'
import g6 from '../images/golden6.jpg'

const Animal = () => {
  return (
    <div className="w-screen flex mt-28 mb-16 sm:px-24 justify-center">
      <div className="flex-1 mb-20 grid grid-cols-1 md:grid-cols-2 mx-6 sm:ml-0 sm:w-4/5 w-screen">
        <div className="px-6">
          <img
            src={Golden}
            className="inline ms:ml-0 h-44 w-44 sm:h-60 sm:w-60 rounded-full object-cover"
            alt=""
          />
          <span className="inline ml-6 text-3xl font-bold text-green-700">
            JACKIE
          </span>
          <p className="my-4 text-center text-md text-gray-600 font-light">
            Golden Retriver, 3 years old
          </p>
          <div className="text-justify">
            <p className="tab text-md text-gray-600 font-light">
              The Golden Retriever, an exuberant Scottish gundog of great
              beauty, stands among America's most popular dog breeds. They are
              serious workers at hunting and field work, as guides for the
              blind, and in search-and-rescue, enjoy obedience and other
              competitive events, and have an endearing love of life when not at
              work.
            </p>
            <p className="tab text-md text-gray-600 font-light">
              The Golden Retriever is a sturdy, muscular dog of medium size,
              famous for the dense, lustrous coat of gold that gives the breed
              its name. The broad head, with its friendly and intelligent eyes,
              short ears, and straight muzzle, is a breed hallmark. In motion,
              Goldens move with a smooth, powerful gait, and the feathery tail
              is carried, as breed fanciers say, with a 'merry action.'
            </p>
          </div>
        </div>
        <div className="container grid mt-8 sm:mt-0 grid-cols-2 grid-flow-row gap-1 px-6">
    <div className="w-full rounded">
        <img src={g3}
            alt="asd" />
    </div>
    <div className="w-full rounded">
        <img src={g2}
            alt="asd" />
    </div>
    <div className="w-full rounded">
        <img src={g1}
            alt="asd" />
    </div>
    <div className="w-full rounded">
        <img src={g4}
            alt="asd" />
    </div>
    <div className="w-full rounded">
        <img src={g5}
            alt="asd" />
    </div>
    <div className="w-full rounded">
        <img src={g6}
            alt="asd" />
    </div>
</div>
      </div>
    </div>
  );
};

export default Animal;
