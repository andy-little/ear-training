import React from "react";
import { useEarTrainingContext } from "../EarTrainingContext";
import EarTrainerHeader from "../components/EarTrainerHeader/EarTrainerHeader";
import Piano from "../components/Piano/Piano";
import EarTrainerFooter from "../components/EarTrainerFooter/EarTrainerFooter";
import StartModal from "../components/StartModal/StartModal";
import HelpModal from "../components/HelpModal/HelpModal";

const Melodic = () => {
    const { isStartOpen } = useEarTrainingContext();
    return (
        <article className="ear-trainer-container">
            {isStartOpen && <StartModal />}
            <div className="ear-trainer">
                <EarTrainerHeader />
                <Piano />
                <EarTrainerFooter />
                <HelpModal />
            </div>
        </article>
    );
};

export default Melodic;
