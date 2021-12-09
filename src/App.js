import Controls from "./components/Controls";
import Piano from "./components/Piano";
import EarTrainerFooter from "./components/EarTrainerFooter";
import StartModal from "./components/StartModal";
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
      </section>
    </div>
  );
}

export default App;
