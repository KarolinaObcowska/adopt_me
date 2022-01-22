import { createContext } from "react";
import Modal from "../components/Modal";
import useModal from "../hooks/useModal";

let ModalContext;
const { Provider } = (ModalContext = createContext())

const ModalProvider = ({ children }) => {
    const {visible, setVisible, handleModal, content } = useModal();

    return (
        <Provider value={{ visible, handleModal, setVisible, content }}>
            <Modal />
            {children}
        </Provider>
    )
}

export { ModalContext, ModalProvider }