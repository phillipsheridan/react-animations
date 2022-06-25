import Button from "@mui/material/Button/Button";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://i.gifer.com/3hHq.gif" alt="spirited-away" />
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="contained">Click me!</Button>
        </a>
      </header>
    </div>
  );
}

export default App;
