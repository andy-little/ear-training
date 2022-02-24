import React, { useState } from "react";
import LessonWrapper from "../../components/LessonWrapper/LessonWrapper";
import "./Lesson.scss";

import { useLessonContext } from "../../contexts/LessonContext";

const Lesson = () => {
    const { lesson } = useLessonContext();
    return (
        <LessonWrapper>
            <div className="lesson-title">
                <h1>Getting Started</h1>
            </div>
            <div className="lesson-content">{lesson}</div>
        </LessonWrapper>
    );
};

export default Lesson;
