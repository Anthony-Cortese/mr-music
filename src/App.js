import "./App.css";
import Albums from "./components/Albums";
import Artist from "./components/Artist";
import Lists from "./components/Lists";
import Music from "./components/Music";

function App() {
  return (
    <div className="App">
      <Albums />
      <Artist />
      <Lists />
      <Music />
    </div>
  );
}

export default App;
