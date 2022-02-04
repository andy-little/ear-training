import "./App.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import SidebarBtn from "./components/Sidebar/SidebarBtn/SidebarBtn";
import { Routes, Route } from "react-router-dom";
import { Melodic, ErrorPage } from "./pages";
function App() {
    return (
        <>
            <SidebarBtn />
            <Sidebar />
            <Routes>
                <Route exact path="/" element={<Melodic />} />

                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </>
    );
}

export default App;
