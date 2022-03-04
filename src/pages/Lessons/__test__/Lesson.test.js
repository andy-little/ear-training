import Lesson from "../Lesson";
import { render, screen } from "@testing-library/react";
import { EarTrainingContextProvider } from "../../../EarTrainingContext";
import { LessonContextProvider } from "../../../contexts/LessonContext";
import { BrowserRouter as Router } from "react-router-dom";

const MockLesson = () => {
    return (
        <EarTrainingContextProvider>
            <LessonContextProvider>
                <Router>
                    <Lesson />
                </Router>
            </LessonContextProvider>
        </EarTrainingContextProvider>
    );
};

test("check page has next and prev buttons", () => {
    render(<MockLesson />);
    const nextBtn = screen.getByRole("button", { name: /next/i });
    expect(nextBtn).toBeInTheDocument();
});
