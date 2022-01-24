import React, { useEffect, useState } from "react";
import Spinner from "../Spinner";
import SearchBar from "../SearchBar/SearchBar";
import AnimalList from "./AnimalList/AnimalList";

const Animals = () => {
  const [input, setInput] = useState('')
  const [animalList, setAnimalList] = useState([])
  const [animalDefaultList, setAnimalDefaultList] = useState([]);

  useEffect(() => {
    async function fetchAnimals() {
      const res = await fetch("http://localhost:8080/animal");
      const data = await res.json();
      setAnimalDefaultList(data.animals);
    }
    fetchAnimals();
  }, []);

  const updateInput = async (input) => {
    if (input === '') {
      setAnimalList(animalDefaultList)
    } else {
      const filteredAnimalList = animalDefaultList.filter(animal => {
        return animal.breed.toLowerCase().includes(input.toLowerCase());
      });
      setInput(input);
      setAnimalList(filteredAnimalList)
    }
  }

  return (
    <div className="mt-10">
    <SearchBar 
      input={input}
      onChange={updateInput}
    />
      {!animalList ? (
        <Spinner />
      ) : (
        <AnimalList animalList={animalDefaultList} />
      )}
    </div>
  );
};

export default Animals;
