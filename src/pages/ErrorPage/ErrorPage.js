import React from "react";
import "./ErrorPage.scss";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="page-wrapper">
            <section className="error-page">
                <h1 className="error-header">Error</h1>
                <p className="error-text">
                    The page you are looking for does not exist
                </p>
                <Link to="/">
                    <button className="btn error-btn">Home</button>
                </Link>
            </section>
        </div>
    );
};

export default ErrorPage;
