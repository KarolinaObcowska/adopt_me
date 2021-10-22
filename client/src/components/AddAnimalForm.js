import React from "react";

const AddAnimalForm = () => {
  return(
    <div className="fixed top-16 sm:top-30 p-6 mt-3 w-screen bg-white-100 flex items-center justify-center h-screen">
      <form className="w-full h-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="animal type"
            >
              Animal
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="animal"
              type="text"
              name="animal"
              aria-label="animal type label"
              placeholder="Dog etc."
            />
          </div>
          <div className="w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="breed"
            >
              Breed
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="breed"
              name="breed"
              type="text"
              aria-label="breed label"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="animal name"
            >
              Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="name"
              name="name"
              type="password"
              aria-label="animal name label"
            />
          </div>
          <div className="w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="age"
            >
              Age
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="age"
              name='age'
              type="password"
              aria-label="age label"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="describe"
            >
              Describe
            </label>
            <textarea
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="password"
              name="describe"
              aria-label="describe label"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="images"
            >
              Images
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="images"
              name="images"
              type="file"
              aria-labelledby="images label"
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="bg-yellow-400 p-2 w-full rounded-md text-white uppercase"
          >
            Add animal
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAnimalForm;
