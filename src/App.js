import Controls from "./components/Controls";
import Piano from "./components/Piano";
import EarTrainerFooter from "./components/EarTrainerFooter";
import HelpModal from "./components/HelpModal";



function App() {
  return (
    <>
<div className="ear-trainer-container">

      <section className="ear-trainer">
        <Controls/>
        <Piano/>
        <EarTrainerFooter/>
      </section>
</div>
      
    </>
  );
}

export default App;
