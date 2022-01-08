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
            href=""
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          , hosted on {""}
          <a
            href=""
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
