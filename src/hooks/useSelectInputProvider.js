import { useEffect, useState } from "react";
import { getCountries } from "../api/UserAPI.js";

export function useSelectAPIProvider() {
  const [countries, setCountries] = useState();
  const [selectedCountries, setSelectedCountries] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const responseCountries = await getCountries();
      setCountries(responseCountries);
    };
    fetchData();
  }, []);

  return {
    countries,
    setCountries,
    selectedCountries,
    setSelectedCountries,
  };
}
