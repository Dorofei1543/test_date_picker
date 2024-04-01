const dirtyStyle = { backgroundColor: "#fff5e1" };

const errorStyle = { color: "#f44336" };

const commonStyle = { dirty: dirtyStyle, error: errorStyle };

const getStyle = (originalStyle, hasValueChanged, hasError) => {
  const style = {};
  if (originalStyle) {
    Object.assign(style, originalStyle);
  }
  if (hasValueChanged) {
    Object.assign(style, dirtyStyle);
  }
  if (hasError) {
    Object.assign(style, errorStyle);
  }
  return style;
};

export { commonStyle, getStyle };
