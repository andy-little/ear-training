import React from "react";
import Expandable from "../../components/Expandable/Expandable";
import "./Tutorial.scss";

const Tutorial = () => {
    return (
        <article className="tutorial">
            <h1>Tutorial</h1>
            <Expandable title="What Is Relative Pitch">
                <p>text goes here</p>
            </Expandable>
            <Expandable title="Why interval recognition isn’t enough?">
                <p>
                    You may have practiced recognising intervals before. You may
                    well have been taught that the first two notes of starters
                    is the interval of a fifth, or that or that the first two
                    notes of… but in the key of x there are y intervals of z.
                    and they all sound different. introducing SomthingMethod
                </p>
            </Expandable>
            <Expandable title="Getting Started">
                <p>text goes here</p>
            </Expandable>
        </article>
    );
};

export default Tutorial;
