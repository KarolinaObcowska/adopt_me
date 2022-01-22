import { useState, createContext, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookie from "universal-cookie"
import { ModalContext } from "../context/modalContext";

const AuthContext = createContext(null);

const cookies = new Cookie();

export const AuthProvider = ({children}) => {
    const { handleModal, setVisible, setContent } = useContext(ModalContext);

    const [authenticated, setAuthenticated] = useState(false);
    const navigate = useNavigate();

    function checkLogin () {
      const tokenFromCookies = cookies.get('jwt')
      if (!tokenFromCookies) {
        setAuthenticated(false)
      } else {
        setAuthenticated(true);
      }
    };

    const login = async(e, user ) => {
        e.preventDefault()
        const res = await fetch("http://localhost:8080/auth/login", {
            method: "POST",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        const data = await res.json()
        console.log(data)
        if (!data.user) {
            setVisible(true)
            setContent(data.message)
          } else {
            setAuthenticated(true)
            navigate('/animals')
          }
    }

    const logout = async() => {
        const res = await fetch("http://localhost:8080/auth/logout", {
            method: "POST",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            },
        });
        setAuthenticated(false)
        navigate('/')
    }

    const signup = async(e, user) => {
        e.preventDefault()
        const res = await fetch("http://localhost:8080/auth/signup", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        const data = await res.json();
        console.log(data)
        if (data.status !== 'success') {
            setAuthenticated(false)
        } else {
            setAuthenticated(true)
            navigate('/animals')
        }
    }

    return (
        <AuthContext.Provider value={{ authenticated, setAuthenticated, login, logout, signup, checkLogin }} >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)