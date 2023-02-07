import "./styles.css";
import { useState } from "react";
export default function App() {
  const [inputTxt, setInputTxt] = useState("");
  const [isbtnClicked, setIsBtnClicked] = useState(true);
  function savedata(e) {
    if (inputTxt !== "" && e.target.innerHTML === "Save") {
      setIsBtnClicked(false);
    } else {
      setIsBtnClicked(true);
      setInputTxt("");
    }
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Toggle btns save and edit!</h2>
      {isbtnClicked ? (
        <div>
          <input
            value={inputTxt}
            onChange={(e) => setInputTxt(e.target.value)}
          />

          <button onClick={savedata}>Save</button>
        </div>
      ) : (
        <h3>
          {inputTxt} <button onClick={savedata}>Edit</button>
        </h3>
      )}
    </div>
  );
}
