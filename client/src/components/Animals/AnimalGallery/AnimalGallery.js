import React from 'react';

const AnimalGallery = ({images}) => {
  return (
      <>
      {images && (
            <div className="container mx-auto md:mt-0 mt-6 px-6">
            <div className="flex flex-wrap -mx-5 overflow-hidden">
              {images.map((image) => (
                <div className="my-5 px-5 w-1/2 overflow-hidden">
                  <img
                    className="object-cover w-full h-full"
                    src={image}
                    alt="dog"
                  />
                </div>
              ))}
            </div>
          </div>
          )
      }
      </>
  );
};

export default AnimalGallery;
