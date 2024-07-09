import reactLogo from "/q.png";
import viteLogo from "/chaosll.png";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <h1>惊蛰</h1>
        <a href="">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </>
  );
}

export default App;
