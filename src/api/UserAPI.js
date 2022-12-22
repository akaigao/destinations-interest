export const getCountries = async () => {
  try {
    const response = await fetch(
      "https://countriesnow.space/api/v0.1/countries/"
    );
    const userData = await response.json();

    return userData;
  } catch (error) {
    console.log(error.message);
  }
};

// export const getCities = async () => {
//   try {
//     // const response = await fetch("https://amazon-api.sellead.com/city");
//     const userData = await response.json();

//     return userData;
//   } catch (error) {
//     console.log(error.message);
//   }
// };
