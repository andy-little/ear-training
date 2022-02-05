import React from "react";
import "./ErrorPage.scss";
import { Link } from "react-router-dom";

const ErrorPage = ({ message }) => {
    return (
        <div className="page-wrapper">
            <section className="error-page">
                <h1 className="error-header">Error</h1>
                <p className="error-text">{message}</p>
                <Link to="/">
                    <button className="btn error-btn">Home</button>
                </Link>
            </section>
        </div>
    );
};

export default ErrorPage;
