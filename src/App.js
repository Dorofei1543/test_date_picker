import { useState } from "react";
import "./App.css";
import MWDatePicker from "./Test";

function App() {
  const [startDateOpen, setStartDateOpen] = useState(false);
  const [startDate, setStartDate] = useState(false);
  return (
    <div className="App">
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <MWDatePicker
        open={startDateOpen}
        onClose={() => setStartDateOpen(false)}
        onOpen={() => setStartDateOpen(true)}
        disableToolbar
        variant="inline"
        inputVariant="standard"
        InputProps={{
          placeholder: "Select a date",
        }}
        id="cmrc-formlet-start-date-input"
        KeyboardButtonProps={{
          "data-testid": "cmrc-formlet-start-date-button",
        }}
        format="DD-MMM-YYYY"
        value={startDate}
        onChange={setStartDate}
        autoOk
      />

      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
}

export default App;
