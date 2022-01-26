import {useState, useContext} from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { ModalContext } from '../../context/modalContext';

const ResetPassword = () => {
    const { handleModal } = useContext(ModalContext);
    const navigate = useNavigate();
    const {id, tokenId} = useParams();
    const [data, setData] = useState({
        password: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData({
          [name]: value,
        });
      };

    const resetPassword = async (event) => {
        event.preventDefault();
        const response = await fetch(`http://localhost:8080/auth/password-reset/${id}/${tokenId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
        });
        const res = await response.json()
        handleModal(res.msg)
        if (res.status !== 200) {
          navigate('/auth/login')

        } 
    }





  return (
    <div className="fixed top-20 sm:top-36 p-6 mt-3 w-screen bg-white-100 flex items-center justify-center h-screen">
    <form className="w-full h-full max-w-lg" onSubmit={resetPassword}>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="email"
          >
            E-mail
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="password"
            type="password"
            aria-label="Your e-mail"
            value={data.password}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button
          type="submit"
          className="bg-yellow-400 p-2 w-full rounded-md text-white uppercase"
        >
          Send E-mail
        </button>
      </div>
    </form>
  </div>
  )
};

export default ResetPassword;
