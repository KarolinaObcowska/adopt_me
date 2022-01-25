import {CgCloseO} from "react-icons/cg";
import { useParams } from "react-router-dom";

const AnimalGallery = ({ images, clickHandler, specificStyles }) => {

  const { id } = useParams()

  async function deleteAnimal (e, image) {
    const img = {
      name: image
    }
    e.preventDefault();
    const res = await fetch(`http://localhost:8080/animal/${id}/images`, {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(img),
    })
    if (res.status === 200) {
      console.log('hello')
    }

  }
  return (
    <>
      {images && (
        <div className="container mx-auto md:mt-0 mt-6 px-6">
          <div className="flex flex-wrap w-full -mx-5 overflow-hidden">
            {images.map((image, index) => (
              <figure key={index} className={`relative my-5 px-5 w-100 lg:w-1/2 sm:w-1/2`}>
                <img
                  className="object-cover h-full w-full"
                  src={image}
                  alt="dog"
                /> 
                  <button 
                    className={`absolute top-1 right-6 text-red-600 animate-pulse ${specificStyles}`}
                    onClick={e => deleteAnimal(e,image)}>
                    <CgCloseO size={20}/>
                  </button>

              </figure>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default AnimalGallery;
