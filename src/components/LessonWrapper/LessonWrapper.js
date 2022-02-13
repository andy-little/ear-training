import React from "react";
import "./LessonWrapper.scss";
import { useLessonContext } from "../../contexts/LessonContext";

const LessonWrapper = ({ children }) => {
    const { toggleLesson } = useLessonContext();
    return (
        // <LessonContextProvider>
        <main className="page-wrapper">
            <div className="lesson-grid">
                {children}
                <div className="lesson-wrapper-prev">
                    <button
                        type="button"
                        className="btn "
                        onClick={toggleLesson}
                    >
                        Prev
                    </button>
                </div>
                <div className="lesson-wrapper-next">
                    <button
                        type="button"
                        className="btn"
                        onClick={toggleLesson}
                    >
                        Next
                    </button>
                </div>
            </div>
        </main>
        // </LessonContextProvider>
    );
};

export default LessonWrapper;
