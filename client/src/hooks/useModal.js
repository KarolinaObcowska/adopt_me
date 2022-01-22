import { useState } from "react";

const useModal = () => {
    const [visible, setVisible] = useState(false)
    const [content, setContent] = useState("")

    const handleModal = (content = false) => {
        setVisible(true);
        if (content) {
            setContent(content);

        }
    }

    const closeModal = () => {
        setVisible(false)
    }
    return {handleModal, content, visible, closeModal }
}

export default useModal;