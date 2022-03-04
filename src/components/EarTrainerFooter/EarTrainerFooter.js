import React, { useState, useRef, useEffect } from "react";
import Score from "./Score/Score";
import SettingsModal from "./SettingsModal/SettingsModal";
import "./EarTrainerFooter.scss";
import { GiMusicalNotes } from "react-icons/gi";
import { MdReplay /* MdSkipNext */ } from "react-icons/md";
import { BiShow, BiHide } from "react-icons/bi";
import { useEarTrainingContext } from "../../EarTrainingContext";

const EarTrainerFooter = () => {
    const {
        replayQuestion,
        isSelectOpen,
        setIsSelectOpen,
        gameDispatch,
        isPianoDisplayNotes,
    } = useEarTrainingContext();

    const [menuLocation, setMenuLocation] = useState({});

    const settingsBtn = useRef(null);

    const [size, setSize] = useState({});
    const handler = () => {
        /* size is only used to trigger getBtnordinates
            this seems backwards but for some reason firing getBtnordinates in the actual event listener is buggy.
            particulary as it often doesn't work with orientation change */
        setSize({ height: window.innerHeight, width: window.innerWidth });
    };

    const getBtnCordinates = () => {
        const btn = settingsBtn.current.getBoundingClientRect();
        const left = btn.left;
        const top = btn.top + 6;
        const width = btn.width - 6;
        setMenuLocation({ left, top, width });
    };
    useEffect(() => {
        window.addEventListener("resize", handler);
        return () => {
            window.removeEventListener("resize", handler);
        };
    }, []);

    useEffect(() => {
        getBtnCordinates();
    }, [size]);

    /* const skipQuestion = () => {
        gameDispatch({ type: "INCORRECT_ANSWER" });
    }; */

    return (
        <footer className="ear-trainer-footer">
            <button
                className="ear-trainer-footer-btn settings-btn"
                aria-label="settings"
                ref={settingsBtn}
                onClick={() => setIsSelectOpen(!isSelectOpen)}
            >
                <GiMusicalNotes />
            </button>
            <button
                className="ear-trainer-footer-btn show-hide-btn"
                aria-label="show/hide"
                onClick={() => {
                    gameDispatch({ type: "TOGGLE_PIANO_DISPLAY_NOTES" });
                }}
            >
                {isPianoDisplayNotes ? <BiHide /> : <BiShow />}
            </button>
            <button
                aria-label="replay"
                className="ear-trainer-footer-btn replay-btn"
                onClick={replayQuestion}
            >
                <MdReplay />
            </button>
            {/* <button
                aria-label="skip"
                className="ear-trainer-footer-btn"
                onClick={skipQuestion}
            >
                <MdSkipNext />
            </button> */}

            <SettingsModal openBtn={settingsBtn} location={menuLocation} />
            <Score />
        </footer>
    );
};

export default EarTrainerFooter;
