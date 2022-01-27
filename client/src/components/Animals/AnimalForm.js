const AnimalForm = ({
  handleChange,
  handleSubmit,
  buttonText,
  animal,
  placeholders,
}) => {
  
  return (
    <form className="relative w-full h-full max-w-lg" onSubmit={handleSubmit}>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="animal type"
          >
            Animal
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-yellow-500"
            id="type"
            type="text"
            name="type"
            aria-label="animal type label"
            placeholder={placeholders.type}
            value={animal.type}
            onChange={handleChange}
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
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-yellow-500"
            id="breed"
            name="breed"
            type="text"
            placeholder={placeholders.breed}
            aria-label="breed label"
            value={animal.breed}
            onChange={handleChange}
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
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-yellow-500"
            id="name"
            name="name"
            type="text"
            placeholder={placeholders.name}
            aria-label="animal name label"
            value={animal.name}
            onChange={handleChange}
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
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-yellow-500"
            id="age"
            name="age"
            type="number"
            placeholder={placeholders.age}
            aria-label="age label"
            value={animal.age}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="describe"
          >
            Description
          </label>
          <textarea
            className="appearance-none block w-full h-44 bg-gray-200 overflow-scrollY text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-yellow-500"
            type="text"
            name="description"
            placeholder={placeholders.description}
            aria-label="describe label"
            value={animal.description}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="flex justify-center items-center">
        <button
          type="submit"
          className="bg-yellow-400 p-2 w-full rounded-md text-white uppercase"
        >
          {buttonText}
        </button>
      </div>
    </form>
  );
};

export default AnimalForm;
