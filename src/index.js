import React from "react";
import ReactDOM from "react-dom";
//import "./style/sanitise.css";
import "./style/index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { EarTrainingContextProvider } from "./EarTrainingContext";
import { LessonContextProvider } from "./contexts/LessonContext";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <EarTrainingContextProvider>
            <LessonContextProvider>
                <Router>
                    <App />
                </Router>
            </LessonContextProvider>
        </EarTrainingContextProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
