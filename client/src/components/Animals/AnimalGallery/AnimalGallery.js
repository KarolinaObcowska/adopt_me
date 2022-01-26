import { CgCloseO } from "react-icons/cg";

const AnimalGallery = ({ images, clickHandler, specificStyles }) => {
  return (
    <div className="container mx-auto md:mt-0 mt-6 px-6 text-center">
      {images ? (
        <div className="flex flex-wrap w-full -mx-5 overflow-hidden">
          {images.map((image, index) => (
            <figure
              key={index}
              className={`relative my-5 px-5 w-100 lg:w-1/2 sm:w-1/2`}
            >
              <img
                className="object-cover h-full w-full"
                src={image}
                alt="dog"
              />
              <button
                className={`absolute top-1 right-6 text-red-600 animate-pulse ${specificStyles}`}
                onClick={(e) => clickHandler(e, image)}
              >
                <CgCloseO size={20} />
              </button>
            </figure>
          ))}
        </div>
      ) : (
        <h2>This animal has not had any images yet.</h2>
      )}
    </div>
  );
};

export default AnimalGallery;
