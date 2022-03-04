import React from "react";
import EarTrainerHeader from "../../../components/EarTrainerHeader/EarTrainerHeader";
import Piano from "../../../components/Piano/Piano";
import EarTrainerFooter from "../../../components/EarTrainerFooter/EarTrainerFooter";
import HelpModal from "../../../components/HelpModal/HelpModal";
const Lesson1C = () => {
    return (
        //<div className="page-wrapper">
        //<article className="ear-trainer-container">
        <article className="piano-wrapper">
            <div className="ear-trainer">
                {/* <EarTrainerHeader /> */}
                <Piano />
                <EarTrainerFooter />
                <HelpModal />
            </div>
        </article>
        //</article>
        //</div>
    );
};

export default Lesson1C;
