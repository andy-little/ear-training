import React from "react";
import "./SidebarBtn.scss";
import { FaBars } from "react-icons/fa";
import { useEarTrainingContext } from "../../../EarTrainingContext";

const SidebarBtn = () => {
    const { navDispatch } = useEarTrainingContext();
    return (
        <button
            type="button"
            onClick={() => {
                navDispatch({ type: "TOGGLE_SIDEBAR" });
            }}
            className="sidebar-toggle"
        >
            <FaBars />
        </button>
    );
};

export default SidebarBtn;
