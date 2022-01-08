import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1> dictionary</h1>
        </header>

        <main>
          <Dictionary defaultKeyword="pancake" />
        </main>
        <footer className="App-footer">
          Coded by Bri Franz-Jonas, open-sourced on {""}
          <a
            href="https://github.com/briology101/react-dictionary"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          , hosted on {""}
          <a
            href="https://distracted-mirzakhani-3db079.netlify.app"
            target="_blank"
            rel="noreferrer"
          > 
             Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
