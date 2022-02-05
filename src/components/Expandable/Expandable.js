import React, { useState, useRef } from "react";
import "./Expandable.scss";
import { IoIosArrowDropdown } from "react-icons/io";

const Expandable = ({ title, bodyHTML }) => {
    const bodyRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen((prevState) => {
            return !prevState;
        });
        if (bodyRef.current.style.maxHeight) {
            bodyRef.current.style.maxHeight = null;
        } else {
            console.log(bodyRef.current.scrollHeight);
            bodyRef.current.style.maxHeight = `${bodyRef.current.scrollHeight}px`;
        }
    };
    return (
        <section>
            <h2 className="expandable-heading" onClick={handleClick}>
                {title}
                <IoIosArrowDropdown
                    className={`expandable-dropdown-icon ${isOpen && "show"}`}
                />
            </h2>

            <div
                ref={bodyRef}
                className={`expandable-body ${isOpen && "show"}`}
            >
                {bodyHTML}
            </div>
        </section>
    );
};

export default Expandable;
