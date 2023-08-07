import "./App.css";
import Folder from "./components/Folder";
import explorer from "./data/folderData";

function App() {
  return (
    <div className="App">
      <h1>Nested Folder structure</h1>
      <Folder explorer={explorer} />
    </div>
  );
}

export default App;
