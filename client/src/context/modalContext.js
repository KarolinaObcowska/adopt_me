import { createContext } from "react";
import Modal from "../components/Modal";
import useModal from "../hooks/useModal";

let ModalContext;
const { Provider } = (ModalContext = createContext())

const ModalProvider = ({ children }) => {
    const {visible, handleModal, content, closeModal } = useModal();
    console.log(children)
    return (
        <Provider value={{ visible, handleModal, content, closeModal }}>
            <Modal />
            {children}
        </Provider>
    )
}

export { ModalContext, ModalProvider }