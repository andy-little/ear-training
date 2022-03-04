import React from "react";

const Lesson1A = () => {
    return (
       <article className="lesson-slide">
            <h2 className="lesson-slide-title">Root, Second & Third</h2>
            <p>
                Let’s start with the key of C. The notes belonging to C major
                are C D E F G A B.
            </p>
            <p>
                We are going to start very simply with the first three notes:
                <ul>
                    <li>C = Root</li>
                    <li>D = Major 2nd</li>
                    <li>E = Major 3rd</li>
                </ul>
            </p>
 
            <p>
                C, D & E are note names. You could also describe these notes as
                being the: the root, major 2nd and major 3rd. The latter
                describes their relationship to the key. Often we shorten these
                names to root, second & third.
            </p>
        </article>
    );
};

export default Lesson1A;
