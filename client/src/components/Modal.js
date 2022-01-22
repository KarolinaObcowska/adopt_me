import { useContext, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalContext } from '../context/modalContext';

const Modal = () => {

const modalRoot = document.querySelector("#modal")
const el = document.createElement("div"); 

useEffect(() => {
  modalRoot.appendChild(el);
  return () => {
    modalRoot.removeChild(el)
  }
}, [el])




const { content, closeModal, visible} = useContext(ModalContext);
if(visible) {
  console.log(content)
  return createPortal(<><div
    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
  >
    <div className="relative w-1/2 my-6 mx-auto max-w-3xl">
      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
        <div className="mx-auto flex pt-5">
          <h2 className="text-xl text-center text-green-800">{content}</h2>
        </div>
        <div className="flex items-center justify-end pb-6">
          <button
            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
  <div
    className="opacity-40 fixed inset-0 z-40 bg-gray-900"></div>
    </>, document.querySelector("#modal"))
} else return null;

}


export default Modal;
