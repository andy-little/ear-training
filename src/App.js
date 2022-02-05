import "./App.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import SidebarBtn from "./components/Sidebar/SidebarBtn/SidebarBtn";
import { Routes, Route } from "react-router-dom";
import { Melodic, Tutorial, ErrorPage } from "./pages";
function App() {
    return (
        <>
            <SidebarBtn />
            <Sidebar />
            <Routes>
                <Route exact path="/" element={<Melodic />} />
                <Route exact path="/tutorial" element={<Tutorial />} />
                {/* <ErrorPage message="This page is currently under construction. Please check back later." /> */}

                <Route
                    path="*"
                    element={
                        <ErrorPage message="The page you are looking for does not exist" />
                    }
                />
            </Routes>
        </>
    );
}

export default App;
