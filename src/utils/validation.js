export const validate11Digits = (value) => {
  const newValue = value.replace(/[^0-9]/g, "");
  return newValue.length === 11 ? true : false;
};
