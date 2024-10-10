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
            <div className={style['root-container']}>
                <Header showModal={showModal} setShowModal={setShowModal} />
                <Routes>
                    {!showModal && <Route path='/' element={<HomePage />}></Route>}
                </Routes>
            </div>
        </BrowserRouter>
    )
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

