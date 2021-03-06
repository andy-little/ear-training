import {
    useContext,
    useState,
    useEffect,
    createContext,
    useReducer,
    useLayoutEffect,
    useRef,
    useCallback,
} from "react";
import { AudioPlayer } from "./controller/AudioPlayer";
import { notesReducer, notesDefaultState } from "./reducers/notes";
import { gameReducer, gameDefaultState } from "./reducers/game";
import { navDefaultState, navReducer } from "./reducers/navigation";
import useCustomVH from "./hooks/useCustomVH";
import randomNote from "./helpers/randomNote";

const EarTrainingContext = createContext();
const player = new AudioPlayer();

export const EarTrainingContextProvider = ({ children }) => {
    const [notesState, notesDispatch] = useReducer(
        notesReducer,
        notesDefaultState
    );
    const [gameState, gameDispatch] = useReducer(gameReducer, gameDefaultState);
    const [navState, navDispatch] = useReducer(navReducer, navDefaultState);

    const [isHelpOpen, setIsHelpOpen] = useState(false);
    const [isStartOpen, setIsStartOpen] = useState(true);
    const [isSelectOpen, setIsSelectOpen] = useState(false);
    const [isDropdownError, setIsDropdownError] = useState(false);

    const helpModal = useRef(null);

    const playQuestion = useCallback(() => {
        player.cancelQue();
        const question = randomNote(notesState.notes, notesState.octaves);
        notesDispatch({ type: "SET_QUESTION", payload: question });
        player
            .playCadence(gameState.key_)
            .then((_) => {
                player.playNote(question);
            })
            .catch((err) => console.log(err));
    }, [notesState.notes, notesState.octaves, gameState.key_]);

    const replayQuestion = useCallback(() => {
        player.cancelQue();
        player
            .playCadence(gameState.key_)
            .then((_) => {
                player.playNote(notesState.question);
            })
            .catch((err) => console.log(err));
    }, [gameState.key_, notesState.question]);

    useEffect(() => gameDispatch({ type: "KEY_OPTIONS" }), [gameState.isMajor]);

    useLayoutEffect(() => {
        if (!isStartOpen && !isSelectOpen) {
            playQuestion();
        }
    }, [
        gameState.key_,
        gameState.numQs,
        isStartOpen,
        isSelectOpen,
        playQuestion,
    ]);

    useCustomVH();

    return (
        <EarTrainingContext.Provider
            value={{
                ...gameState,
                gameDispatch,
                isHelpOpen,
                setIsHelpOpen,
                isStartOpen,
                setIsStartOpen,
                replayQuestion,
                notesState,
                notesDispatch,
                isDropdownError,
                setIsDropdownError,
                isSelectOpen,
                setIsSelectOpen,
                helpModal,
                navState,
                navDispatch,
            }}
        >
            {children}
        </EarTrainingContext.Provider>
    );
};

export const useEarTrainingContext = () => {
    return useContext(EarTrainingContext);
};
