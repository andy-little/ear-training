import Controls from "./components/EarTrainerHeader/EarTrainerHeader";
import Piano from "./components/Piano";
import EarTrainerFooter from "./components/EarTrainerFooter/EarTrainerFooter";
import StartModal from "./components/StartModal";
import HelpModal from "./components/HelpModal";
import { useEarTrainingContext } from "./EarTrainingContext";

function App() {
  const {isStartOpen} = useEarTrainingContext();
  
  return (
    <div className="ear-trainer-container">
      {isStartOpen && <StartModal/>}
      <section className="ear-trainer">
        <Controls/>
        <Piano/>
        <EarTrainerFooter/>
        <HelpModal/>
      </section>
    </div>
  );
}

export default App;
