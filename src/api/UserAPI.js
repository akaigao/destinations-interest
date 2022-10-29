export const getCountries = async () => {
  let response = await fetch("https://amazon-api.sellead.com/country");
  let userData = await response.json();
  return userData;
};

export const getCities = async () => {
  let response = await fetch("https://amazon-api.sellead.com/city");
  let userData = await response.json();
  return userData;
};
