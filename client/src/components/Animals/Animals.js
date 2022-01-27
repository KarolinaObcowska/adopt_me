import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner";
import SearchBar from "../SearchBar/SearchBar";
import AnimalList from "./AnimalList/AnimalList";

const Animals = () => {
  const {pageNumber} = useParams; 

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [animalList, setAnimalList] = useState([]);
  const [animalDefaultList, setAnimalDefaultList] = useState([]);

  const [pages, setPages] = useState(1);


  useEffect(() => {
    async function fetchAnimals() {
      setLoading(true);
      const res = await fetch("http://localhost:8080/animal");
      const data = await res.json();
      console.log(res)
      setPages(data.pages)
      setAnimalDefaultList(data.animals);
      setAnimalList(data.animals);
      setLoading(false);
    }
    fetchAnimals();
  }, []);

  const updateInput = async (input) => {
    setLoading(true);
    const filteredAnimalList = animalDefaultList.filter((animal) => {
      return animal.breed.toLowerCase().includes(input.toLowerCase());
    });
    setInput(input);
    setAnimalList(filteredAnimalList);
    setLoading(false);
  };

  console.log(input);
  return (
    <div className="mt-10">
      <SearchBar input={input} updateInput={updateInput} />
      {loading ? (
        <Spinner />
      ) : animalList ? (
        <AnimalList animalList={animalList}  pages={pages} setPages={setPages} pageNumber={pageNumber}/>
      ) : (
        <p>It looks like all animals have been adopted! :)</p>
      )}
    </div>
  );
};

export default Animals;
