import { useState } from "react";

function CustomDatePicker() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isPickerOpen, setPickerOpen] = useState(false);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        disableToolbar
        variant="inline"
        open={isPickerOpen}
        onOpen={() => setPickerOpen(true)}
        onClose={() => setPickerOpen(false)}
        id="cmrc-formlet-start-date-input"
        KeyboardButtonProps={{
          "data-testid": "cmrc-formlet-start-date-button",
        }}
        format="dd MMM yyyy"
        value={selectedDate}
        onChange={setSelectedDate}
        autoOk
      />
    </LocalizationProvider>
  );
}

export default CustomDatePicker;
