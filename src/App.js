import EarTrainerHeader from "./components/EarTrainerHeader/EarTrainerHeader/EarTrainerHeader";
import Piano from "./components/Piano/Piano";
import EarTrainerFooter from "./components/EarTrainerFooter/EarTrainerFooter";
import StartModal from "./components/StartModal/StartModal";
import HelpModal from "./components/HelpModal/HelpModal";
import { useEarTrainingContext } from "./EarTrainingContext";

function App() {
  const {isStartOpen} = useEarTrainingContext();
  
  return (
    <div className="ear-trainer-container">
      {isStartOpen && <StartModal/>}
      <section className="ear-trainer">
        <EarTrainerHeader/>
        <Piano/>
        <EarTrainerFooter/>
        <HelpModal/>
      </section>
    </div>
  );
}

export default App;
