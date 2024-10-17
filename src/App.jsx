import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import style from "./styles/style.module.css";
import { useState } from "react";

const App = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <BrowserRouter>
            <Header showModal={showModal} setShowModal={setShowModal} />
            <div className={`${style['root-container']} ${showModal && style['modal-open']}`}>
                <Routes>
                    <Route path={'/'} element={<HomePage />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

