import { useState, createContext, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ModalContext } from "../context/modalContext";

const AnimalContext = createContext(null);



export const AnimalProvider = ({children}) => {
    const { handleModal } = useContext(ModalContext);
    const navigate = useNavigate();

    const [defaultAnimalList, setDefaultAnimalsList] = useState([])
    const [animal, setAnimal] = useState({})
    const [loading, setLoading] = useState(false)

    const fetchAllAnimals = async () => {
        setLoading(true)
        const res = await fetch("http://localhost:8080/animal");
        const data = await res.json();
        setLoading(false);
        if (!data) {
            handleModal(res.msg)
        } else {
            setDefaultAnimalsList(data.animals);
        }
    }

    const fetchAnimalById = async(id) => {
        setLoading(true)
        const res = await fetch(`http://localhost:8080/animal/${id}`);
        const data = await res.json();
        setLoading(false)
        if (!data) {
            handleModal(res.msg)
        } else {
            setAnimal(data.animal)
        }
    }

    const handleAdoptAnimal = async (e, id) => {
        e.preventDefault();
        await fetch(`http://localhost:8080/animal/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
        window.location.href = "http://localhost:3000/animals";
        window.open("https://www.schroniskowroclaw.pl/", "_blank");
    }

    const createAnimal = async (e, form) => {
        e.preventDefault()
        const res = await fetch("http://localhost:8080/animal", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
        });
        const data = await res.json();
        if (res.status !== 201) {
          handleModal(res.msg)
        } else {
          navigate("/animals");
        }
    }

    const updateAnimal = async (e, form, id) => {
        e.preventDefault();
        const res = await fetch(`http://localhost:8080/animal/${id}`, {
            method: "PATCH",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
          });
        const data = await res.json();
        if (res.status !== 201) {
            handleModal(res.msg);
        } else {
            navigate("/animals");
        }
    }

    const uploadAnimalImages = async (e, form, id) => {
        e.preventDefault();
        const formData = new FormData();
        for (let i = 0; i < form.length; i++) {
            formData.append("images", form[i]);
          }
          const res = await fetch(`/animal/${id}/images`, {
            method: "POST",
            body: formData,
          });
          if (res.status !== 200) {
            handleModal(res.msg)
          } else {
            navigate("/animals");
          }
    }

    const deleteAnimalImage = async (e, id, image) => {
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
        if(res.status !== 200) {
            handleModal(res.msg)
        } else {
            navigate(`/animals/${id}`)
        }
    };

    return (
        <AnimalContext.Provider value={{ 
            fetchAllAnimals, 
            fetchAnimalById, 
            handleAdoptAnimal, 
            deleteAnimalImage, 
            createAnimal, 
            updateAnimal, 
            loading, 
            defaultAnimalList, 
            uploadAnimalImages, 
            setAnimal, 
            animal 
        }} >
            {children}
        </AnimalContext.Provider>
    )
}

export const useApi = () => useContext(AnimalContext)