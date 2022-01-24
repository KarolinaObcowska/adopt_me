import AnimalForm from "../AnimalForm";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AnimalGallery from "../AnimalGallery/AnimalGallery";

const UpdateAnimal = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState({});
  const [images, setImages] = useState([]);
  const [updateAnimal, setUpdateAnimal] = useState({
    type: "",
    breed: "",
    name: "",
    age: "",
    description: "",
  });

  useEffect(() => {
    async function fetchAnimalById() {
      const response = await fetch(`http://localhost:8080/animal/${id}`);
      const data = await response.json();
      setItem(data.animal);
    }
    fetchAnimalById();
  }, [id]);

  function handleChangeInput(event) {
    const { name, value } = event.target;
    setUpdateAnimal({
      ...updateAnimal,
      [name]: value,
    });
  }

  function handleImageChange(event) {
    const files = [...images];
    files.push(...event.target.files);
    setImages(files);
  }

  async function handleUploadImages(event) {
    event.preventDefault();
    const formData = new FormData();
    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }
    const res = await fetch(`/animal/${id}/upload`, {
      method: "POST",
      body: formData,
    });
    if (res.status === 200) {
      navigate(`/animals/${id}`);
    } else {
      console.log("fail");
    }
  }

  async function handleUpdateAnimal(event) {
    event.preventDefault();
    const { type, breed, name, age, description } = updateAnimal;
    const res = await fetch(`http://localhost:8080/animal/${id}`, {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateAnimal),
    });
    if (res.status !== 200) {
      console.log("fails");
    } else {
      navigate("/animals");
    }
  }

  return (
    <div className="px-5 flex flex-col lg:flex-row gap-6 w-screen items-center lg:items-baseline justify-center mt-10 mb-20">
        <div className="w=1/2 md:flex flex-col">
        <div className="flex flex-col justify-center">
          <img
          src={item.images && item.images.length > 0 ? item.images[0] : item.avatar}
          className="m-auto border-4 border-solid border-yellow-400 inline ms:ml-0 h-44 w-44 sm:h-60 sm:w-60 rounded-full mb-4 object-cover"
          alt=""
        />
        <span className="text-center inline ml-6 text-5xl font-bold text-green-700">
          {item.name}
        </span>
        <form
          className="w-full h-full max-w-lg my-6"
          onSubmit={handleUploadImages}
          encType="multipart/form-data"
        >
          <div className="flex flex-wrap -mx-3 mb-1">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="describe"
              >
                Images (max. 10)
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-yellow-500"
                type="file"
                name="images"
                aria-label="upload animal's images"
                onChange={handleImageChange}
                placeholder="Choose Images"
                multiple
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-yellow-400 p-2 w-full rounded-md text-white uppercase"
          >
            Add Images
          </button>
        </form>
        </div>
      <AnimalForm
        buttonText="Update"
        placeholders={item}
        handleChange={handleChangeInput}
        handleSubmit={handleUpdateAnimal}
        animal={updateAnimal}
      />
      </div>
      <div className="md:w-1/2 w-full">
      <AnimalGallery images={item.images} />
      </div>
    </div>
  );
};

export default UpdateAnimal;
