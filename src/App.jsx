import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import style from "./styles/style.module.css";

const App = () => {
    return (
        <BrowserRouter>
            <div className={style['root-container']}>
                <Header />
                <Routes>
                    <Route path='/' element={<HomePage />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

