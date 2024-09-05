import Messages from "./components/Messages.js";
import "./App.css";
const messages = ["Привет", "Чё, как?", "Всё норм!"];
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <header className="App-header">
          <Messages messages={messages}></Messages>
        </header>
      </header>
    </div>
  );
}

export default App;
