import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";
import React from "react";

const MWDatePicker = (props) => {
  const { value, error, hasValueChanged, className, style, sx, ...otherProps } =
    props;

  const momentDate = value ? moment(value) : null;

  return (
    <ClickAwayListener
      onClickAway={() => {
        props.setStartDate(false);
      }}
    >
      <div>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DesktopDatePicker value={momentDate} error={error} {...otherProps} />
        </LocalizationProvider>
      </div>
    </ClickAwayListener>
  );
};

export default MWDatePicker;
