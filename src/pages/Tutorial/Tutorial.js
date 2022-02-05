import React from "react";
import Expandable from "../../components/Expandable/Expandable";
import "./Tutorial.scss";

const Tutorial = () => {
    return (
        <div className="page-wrapper">
            <article className="tutorial">
                <h1>Tutorial</h1>
                <p>welcome</p>
                <Expandable
                    title="What Is Relative Pitch"
                    bodyHTML={<p>text goes here</p>}
                />
                <Expandable
                    title="Why interval recognition isn’t enough?"
                    bodyHTML={
                        <p>
                            You may have practiced recognising intervals before.
                            You may well have been taught that the first two
                            notes of starters is the interval of a fifth, or
                            that or that the first two notes of… but in the key
                            of x there are y intervals of z. and they all sound
                            different. introducing SomthingMethod
                        </p>
                    }
                />
                <Expandable
                    title="Getting Started"
                    bodyHTML={<p>text goes here</p>}
                />
            </article>
        </div>
    );
};

export default Tutorial;
