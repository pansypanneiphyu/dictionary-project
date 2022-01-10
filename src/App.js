import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className="text-center">Dictionary App 📖</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer>
          This project is coded by{" "}
          <a href="https://www.shecodes.io/students/356-pann-phyu"> Pann </a> ,
          open-sourced on{" "}
          <a href="https://github.com/pansypanneiphyu/dictionary-project">
            GitHub{" "}
          </a>
          and hosted on{" "}
          <a href="https://peaceful-hypatia-33fa43.netlify.app/">Netlify</a>{" "}
        </footer>
      </div>
    </div>
  );
}
