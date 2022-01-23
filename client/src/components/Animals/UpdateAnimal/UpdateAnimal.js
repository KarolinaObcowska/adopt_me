import AnimalForm from "../AnimalForm";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Golden from "../../../images/golden.jpg";
import { useNavigate } from "react-router-dom";

const UpdateAnimal = () => {
  const { id } = useParams()
  const navigate = useNavigate();
  const [item, setItem] = useState({});
  const [files, setFiles] = useState([])
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
  };

  function handleImageChange(event) {
    const images = [...files];
    images.push(...event.target.files);
    setFiles(images)
  }

  async function handleUploadImages(event) {
    event.preventDefault();
    const fileData = new FormData();
    files.forEach((file) => fileData.append('files', file))
    const res = await fetch(`/animal/${id}/upload`, {
      method: "POST",
      credentials: "include",
      body: fileData
    })
    console.log(files)
    if (res.status === 200) {
      navigate(`/animals/${id}`)
    } else {
      console.log('fail')
    }
  }

  async function handleUpdateAnimal(event) {
    event.preventDefault();
    const { type, breed, name, age, description } = updateAnimal;    
    const res = await fetch(`http://localhost:8080/animal/${id}`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateAnimal),
    });
    const data =  await res.json();
    if (res.status !== 200) {
      console.log("fails")
    } else {
      navigate("/animals");
    }
  }

  return (
  <div className="flex lg:flex-row flex-col gap-6 w-screen justify-center items-center px-32 mt-10">
          <div className="relative w-screen h-full max-w-lg justify-center">
          <img
                src={Golden}
                className="border-4 border-solid border-yellow-400 inline ms:ml-0 h-44 w-44 sm:h-60 sm:w-60 rounded-full object-cover"
                alt=""
              />
              <span className="inline ml-6 text-5xl font-bold text-green-700">
                {item.name}
              </span>
            <form className="w-full h-full max-w-lg mt-6" onSubmit={handleUploadImages}>
            <div className="lex flex-wrap -mx-3 mb-1">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="describe"
                >
                  Images (max. 10)
                </label>
                <input
                multiple
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-yellow-500"
                  id="grid-password"
                  type="file"
                  name="images"
                  aria-label="upload animal's images"
                  onChange={handleImageChange}
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
          <AnimalForm buttonText='Update' placeholders={item} handleChange={handleChangeInput} handleSubmit={handleUpdateAnimal} animal={updateAnimal} />
          
        </div>
  );
};

export default UpdateAnimal;
