import React, { useEffect, useState } from "react";
import Spinner from "../Spinner";
import SearchBar from "../SearchBar/SearchBar";
import AnimalList from "./AnimalList/AnimalList";

const Animals = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [animalList, setAnimalList] = useState([]);
  const [animalDefaultList, setAnimalDefaultList] = useState([]);

  useEffect(() => {
    async function fetchAnimals() {
      setLoading(true);
      const res = await fetch("http://localhost:8080/animal");
      const data = await res.json();
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
        <AnimalList animalList={animalList} />
      ) : (
        <p>It looks like all animals have been adopted! :)</p>
      )}
    </div>
  );
};

export default Animals;
