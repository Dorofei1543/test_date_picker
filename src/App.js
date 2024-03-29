import { useRef, useState } from "react";
import "./App.css";
import MWDatePicker from "./Test";

function App() {
  const [startDateOpen, setStartDateOpen] = useState(false);
  const [startDate, setStartDate] = useState(false);
  const inputFocusRef = useRef();
  return (
    <div className="App">
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <MWDatePicker
        open={startDateOpen}
        onOpen={() => setStartDateOpen(true)}
        setStartDate={setStartDateOpen}
        id="cmrc-formlet-start-date-input"
        KeyboardButtonProps={{
          "data-testid": "cmrc-formlet-start-date-button",
        }}
        format="DD MMM YYYY"
        value={startDate}
        slotProps={{
          desktopPaper: {
            onClick: (kek, nekek) => {
              kek.target.blur();
              inputFocusRef?.current.blur();
            },
          },
          textField: {
            onClick: (event) => {
              !startDateOpen && setStartDateOpen(true);
              inputFocusRef.current = event.target;
            },
          },
        }}
        enableAccessibleFieldDOMStructure
        isPickerOpen={startDateOpen}
        onChange={(params) => {
          setStartDate(params);
          setStartDateOpen(false);
        }}
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
