import {useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { ModalContext } from '../../context/modalContext';


const ReqResetPassword = () => {
    const { handleModal } = useContext(ModalContext);
    const [data, setData] = useState({
        email: ""
    });
    const navigate = useNavigate();

    const handleChange = (event) => {
      const { name, value } = event.target;
      setData({
        [name]: value,
      });
    };

    const handleResetPasssowrd = async (event) => {
        event.preventDefault();
        const response = await fetch('http://localhost:8080/auth/password-reset', {
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


  return <div className="fixed top-20 sm:top-36 p-6 mt-3 w-screen bg-white-100 flex items-center justify-center h-screen">
  <form className="w-full h-full max-w-lg" onSubmit={handleResetPasssowrd}>
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
          name="email"
          type="email"
          aria-label="Your e-mail"
          value={data.email}
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
};

export default ReqResetPassword;
