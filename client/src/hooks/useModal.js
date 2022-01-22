import { useState } from "react";

const useModal = () => {
    const [visible, setVisible] = useState(false)
    const [content, setContent] = useState("")

    const handleModal = (content) => {
        setVisible(visible => !visible);
        setContent(content);
    }

    return {handleModal, content, setContent, visible, setVisible}
}

export default useModal;