import { Link } from "react-router-dom";
import Pagination from "../../Pagination/Pagination";

const AnimalList = ({ animalList, pages, page, setPage }) => {
  return (
    <div className="items-center flex flex-col">
      <div
        className="w-screen flex mt-10 px-6 justify-center  flex-colsitems-center mb-20"
        aria-label="Animals for adopt"
      >
        <div className="flex flex-row justify-center items-center flex-wrap md:w-4/5 w-screen">
          {animalList.map((animal) => (
            <div className="rounded-lg flex-1" key={animal._id}>
              <div className="bg-gray-200 rounded-lg mx-6 mb-6">
                <img
                  src={
                    animal.images.length > 0 ? animal.images[0] : animal.avatar
                  }
                  alt={`${animal.breed} named ${animal.name}`}
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
      <Pagination page={page} setPage={setPage} pages={pages} />
    </div>
  );
};

export default AnimalList;
