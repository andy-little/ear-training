import React, { useContext, createContext, useState, useEffect } from "react";
import { Lesson1A, Lesson1B, Lesson1C } from "../pages/Lessons/LessonOne";

const lessons = [<Lesson1A />, <Lesson1B />, <Lesson1C />];

const LessonContext = createContext();

export const LessonContextProvider = ({ children }) => {
    const [lessonNumber, setLessonNumber] = useState(0);

    const [lesson, setLesson] = useState(lessons[lessonNumber]);

    const toggleLesson = (e) => {
        if (
            e.target.textContent.toLowerCase() === "next" &&
            lessonNumber < lessons.length - 1
        ) {
            setLessonNumber((prevState) => prevState + 1);
        } else if (
            e.target.textContent.toLowerCase() === "prev" &&
            lessonNumber > 0
        ) {
            setLessonNumber((prevState) => prevState - 1);
        } else {
            console.error(
                "changeLesson function needs a value of either prev or next"
            );
        }
    };
    useEffect(() => {
        setLesson(lessons[lessonNumber]);
    }, [lessonNumber]);

    return (
        <LessonContext.Provider
            value={{
                lesson,
                toggleLesson,
                lessonNumber,
                totalLessons: lessons.length,
            }}
        >
            {children}
        </LessonContext.Provider>
    );
};

export const useLessonContext = () => {
    return useContext(LessonContext);
};
