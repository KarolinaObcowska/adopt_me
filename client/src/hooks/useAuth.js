import { useState, createContext, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookie from "universal-cookie"
import { ModalContext } from "../context/modalContext";

const AuthContext = createContext(null);

const cookies = new Cookie();

export const AuthProvider = ({children}) => {
    const { handleModal } = useContext(ModalContext);

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
        if (!data.user) {
            handleModal(data.msg)
          } else {
            setAuthenticated(true)
            navigate('/animals/page/1')
          }
    }

    const logout = async() => {
        await fetch("http://localhost:8080/auth/logout", {
            method: "POST",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            },
        });
        cookies.remove('jwt')
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
        if (data.status !== 'success') {
            handleModal(data.msg)
        } else {
            setAuthenticated(true)
            navigate('/animals/page/1')
        }
    }

    return (
        <AuthContext.Provider value={{ authenticated, setAuthenticated, login, logout, signup, checkLogin }} >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)