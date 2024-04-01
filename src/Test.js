import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";
import React from "react";
import ReadOnlyValue from "./ReadOnlyValue.js";
import { commonStyle } from "./commonStyles.js";

// Because of a bug in the mui DatePicker component, we have to do some
// extra work with the styling.  There's no clean way to set the border color

// First include the passed-in styling and then calculate whether to add the dirty style
const calculateDirtyStyle = (originalStyle, hasValueChanged) => {
  const style = Object.assign({}, originalStyle);
  if (hasValueChanged) {
    Object.assign(style, commonStyle.dirty);
  }
  return style;
};

const calculateErrorStyle = (originalStyle, hasError) => {
  const style = Object.assign({}, originalStyle);
  if (hasError) {
    const fieldSetErrorStyle = {
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "red",
        },
      },
    };
    Object.assign(style, fieldSetErrorStyle);
  }
  return style;
};

const MWDatePicker = (props) => {
  const {
    readOnly,
    value,
    error,
    hasValueChanged,
    className,
    style,
    sx,
    ...otherProps
  } = props;

  const momentDate = value ? moment(value) : null;
  const readOnlyDateValue = value ? moment(value).format(props.format) : "";

  const originalStyle = Object.assign({}, style || {}, sx || {});
  let newStyle = calculateDirtyStyle(originalStyle, hasValueChanged);
  newStyle = calculateErrorStyle(newStyle, error);

  return readOnly ? (
    <ReadOnlyValue id={props.id} value={readOnlyDateValue} error={error} />
  ) : (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DatePicker
        sx={newStyle}
        value={momentDate}
        error={error}
        {...otherProps}
      ></DatePicker>
    </LocalizationProvider>
  );
};

export default MWDatePicker;
