import React, { useState, useRef, useEffect } from "react";
import "./Expandable.scss";
import { IoIosArrowDropdown } from "react-icons/io";

const Expandable = ({ title, children }) => {
    const bodyRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // this is expensive. Is there a better way to do this?
        // if not perhaps use a debouncer
        const handleResize = () => {
            if (isOpen) {
                bodyRef.current.style.maxHeight = `${bodyRef.current.scrollHeight}px`;
            } else {
                bodyRef.current.style.maxHeight = null;
            }
        };
        window.addEventListener("resize", handleResize);
        return () => {
            document.removeEventListener("resize", handleResize);
        };
    }, [isOpen]);

    const handleClick = () => {
        setIsOpen((prevState) => {
            return !prevState;
        });
        if (bodyRef.current.style.maxHeight) {
            bodyRef.current.style.maxHeight = null;
        } else {
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
                {children}
            </div>
        </section>
    );
};

export default Expandable;
