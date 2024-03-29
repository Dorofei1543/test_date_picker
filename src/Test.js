import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";
import React, { useEffect } from "react";

// Because of a bug in the mui DatePicker component, we have to do some
// extra work with the styling.  There's no clean way to set the border color
export function useOutsideClick(ref, callback) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
}

const MWDatePicker = (props) => {
  const { value, error, hasValueChanged, className, style, sx, ...otherProps } =
    props;

  const momentDate = value ? moment(value) : null;

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <ClickAwayListener onClickAway={() => props.setStartDate(false)}>
        <DatePicker
          value={momentDate}
          error={error}
          {...otherProps}
        ></DatePicker>
      </ClickAwayListener>
    </LocalizationProvider>
  );
};

export default MWDatePicker;
