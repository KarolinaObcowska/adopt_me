import { useState } from "react";

const UpdateImages = ({ id, navigate }) => {
  const [images, setImages] = useState([]);

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
    const res = await fetch(`/animal/${id}/images`, {
      method: "POST",
      body: formData,
    });
    if (res.status === 200) {
      navigate(`/animals/${id}`);
    } else {
      console.log("fail");
    }
  }

  return (
    <form
      className="w-full h-full max-w-lg lg:mb-20 mb-5"
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
  );
};

export default UpdateImages;
