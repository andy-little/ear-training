import Controls from "./components/Controls";
import Piano from "./components/Piano";
import Score from "./components/Score";

function App() {
  return (
    <>

      <section className="ear-trainer">
        <Controls/>
        <Piano/>
        <Score/>
      </section>
    </>
  );
}

export default App;
