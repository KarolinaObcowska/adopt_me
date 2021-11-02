import React, {useState} from 'react'
const Modal = ({show, msg}) => {

    const [showModal, setShowModal] = useState(show)
    function handleClick() {
        setShowModal(false)
        window.location.reload()
    }
    return (
<>
{showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-1/2 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="mx-auto flex pt-5">
                  <h3 className="text-1xl text-center font-semibold">
                    {msg}
                  </h3>
                  
                </div>
                <div className="flex items-center justify-end p-6">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleClick}
                  >
                    Close
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
        
    )
}

export default Modal
