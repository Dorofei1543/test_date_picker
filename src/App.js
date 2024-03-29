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
        disableToolbar
        variant="inline"
        open={startDateOpen}
        onOpen={() => setStartDateOpen(true)}
        setStartDate={setStartDateOpen}
        id="cmrc-formlet-start-date-input"
        KeyboardButtonProps={{
          "data-testid": "cmrc-formlet-start-date-button",
        }}
        format="DD MMM YYYY"
        PopperProps={{
          disablePortal: true,
        }}
        value={startDate}
        slotProps={{
          textField: {
            onClick: () => setStartDateOpen(true),
          },
        }}
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
