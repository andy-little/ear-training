import React from "react";
import { BsPlayFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Lesson1B = () => {
    return (
        <article className="lesson-slide">
            <h2 className="lesson-slide-title">Cadences</h2>
            <p>
                A cadence is a sequence of chords comprising the close of a
                musical phrase.
            </p>
            <p>
                <button className="btn btn-play" aria-label="play cadence">
                    <div className="svg-wrapper">
                        <BsPlayFill />
                    </div>
                </button>
                Listen to this example of a cadence.
            </p>
            <p>
                We will use cadences in our ear training because their
                resolution leave us with a strong sence of a key. If you were to
                hear another note preceding the cadence you would naturally hear
                that nte in relation to the key of the cadence. We will use this
                to help us develop our{" "}
                <Link to="/tutorial">relative pitch</Link>.
            </p>
        </article>
    );
};

export default Lesson1B;
