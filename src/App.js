import "./App.css";
import Tes1 from "./components/Tes1";
import Tes2 from "./components/Tes2";
import Tes3 from "./components/Tes3";
import Tes4 from "./components/Tes4";
import Tes5 from "./components/Tes5";

function App() {
  return (
    <div className="App">
      <div>Tes 1</div>
      <div className="divider">
        <Tes1 />
      </div>

      <div>Tes 2</div>
      <div className="divider">
        <Tes2 />
      </div>

      <div>Tes 3</div>
      <div className="divider">
        <Tes3 />
      </div>

      <div>Tes 4</div>
      <div className="divider">
        <Tes4 />
      </div>

      <div>Tes 5</div>

      <div className="divider">
        <Tes5 />
      </div>
    </div>
  );
}

export default App;
