import { Typography } from "@mui/material";
import Link from "@mui/material/Link";
import merge from "deepmerge";
import PropTypes from "prop-types";
import React from "react";

const hoverStyle = {
  cursor: "pointer",
};

const buildPopupHandler = (url, popUpWidth, popUpHeight) => {
  return () => {
    window.open(url, "_blank", `width=${popUpWidth},height=${popUpHeight}`);
  };
};
const ReadOnlyValue = ({
  label,
  url,
  popUpWidth,
  popUpHeight,
  error,
  value,
  children,
  ...otherProps
}) => {
  if (error) {
    otherProps.color = "error";
  }
  otherProps.variant = "body1";
  let fullProps;
  if (url) {
    fullProps = merge(otherProps, {
      popUpWidth: popUpWidth || 800,
      popupHeight: popUpHeight || 600,
    });
    const clickHandler = buildPopupHandler(url, popUpWidth, popUpHeight);
    return (
      <Link
        aria-label={label}
        {...fullProps}
        onClick={clickHandler}
        sx={hoverStyle}
      >
        {value}
      </Link>
    );
  }
  return (
    <Typography aria-label={label} {...otherProps}>
      <span>{value}</span>
    </Typography>
  );
};

ReadOnlyValue.propTypes = {
  label: PropTypes.string,
  url: PropTypes.string,
  popUpWidth: PropTypes.number,
  popUpHeight: PropTypes.number,
  error: PropTypes.any, // not sure
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  children: PropTypes.node,
};

export default ReadOnlyValue;
