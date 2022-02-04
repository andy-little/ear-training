import React from "react";
import "./Sidebar.scss";
//import logo from "../../logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./sidebarData";
import { Link } from "react-router-dom";
import { useEarTrainingContext } from "../../EarTrainingContext";
import { IoIosLock } from "react-icons/io";

const Sidebar = () => {
    const {
        navState: { isSidebarOpen },
        navDispatch,
    } = useEarTrainingContext();
    console.log(isSidebarOpen);
    return (
        <aside
            className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
        >
            <div className="sidebar-header">
                {/* <img src={logo} className="logo" alt="coding addict" /> */}
                <button
                    type="button"
                    className="close-btn"
                    onClick={() => navDispatch({ type: "CLOSE_SIDEBAR" })}
                >
                    <FaTimes />
                </button>
            </div>
            <ul className="links">
                {links.map((link) => {
                    const { id, url, text, icon, isLocked } = link;
                    return (
                        <li key={id}>
                            <Link
                                className={`sidebar-reactlink ${
                                    isLocked && "disabled"
                                }`}
                                to={url}
                                onClick={() =>
                                    navDispatch({ type: "CLOSE_SIDEBAR" })
                                }
                            >
                                {icon}
                                {text}
                                {isLocked && (
                                    <IoIosLock className="icon-lock" />
                                )}
                            </Link>
                        </li>
                    );
                })}
            </ul>
            {/* <ul className="social-icons">
                {social.map((link) => {
                    const { id, url, icon } = link;
                    return (
                        <li key={id}>
                            <a href={url} target="_blank" rel="noreferrer">
                                {icon}
                            </a>
                        </li>
                    );
                })}
            </ul> */}
        </aside>
    );
};

export default Sidebar;
