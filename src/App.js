import logo from "./shecode.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">
          This project is coded by Pann and{" "}
          <a href="https://github.com/pansypanneiphyu/dictionary-project">
            open-sourced on GitHub{" "}
          </a>
          and hosted on{" "}
          <a href="https://peaceful-hypatia-33fa43.netlify.app/">Netlify</a>{" "}
        </footer>
      </div>
    </div>
  );
}
