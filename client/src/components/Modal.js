import { createPortal } from 'react-dom';

const Modal = ({ visible, handleModal, content }) => visible ? createPortal(
    <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-1/2 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="mx-auto flex pt-5">
                  <h2 className="text-xl text-center text-green-800">{content}</h2>
                </div>
                <div className="flex items-center justify-end pb-6">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            onClick={handleModal}
            className="opacity-40 fixed inset-0 z-40 bg-gray-900"
          ></div>
        </>, document.body
      ) : null;

export default Modal;
