import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import menuStyle from '../styles/menu.module.css';

const MenuModal = ({ children }) => {
    const elRef = useRef(null);

    if (!elRef.current) {
        elRef.current = document.createElement("div");
    }

    useEffect(() => {
        const modalRoot = document.getElementById("modal");
        modalRoot.append(elRef.current);

        return () => modalRoot.removeChild(elRef.current);
    })

    return createPortal(<nav id={menuStyle['modal-menu']}>{children}</nav>, elRef.current);
}

export default MenuModal;