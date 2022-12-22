import { useEffect, useState } from "react";
import { useController } from "react-hook-form";
import Select from "react-select";
import { useSelectAPI } from "../../hooks/useSelectAPI";
import { customStyles, groupBadgeStyles, groupStyles } from "./style";

const formatGroupLabel = (data) => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
);

export function SelectInput({ control, name, placeholder, rules }) {
  const {
    field: { value, onChange },
  } = useController({
    control,
    name,
    placeholder,
    rules,
  });
  const { countries, selectedCountries, setSelectedCountries } = useSelectAPI();
  const [options, setOptions] = useState();

  const handleChange = (e) => {
    onChange(e);

    if (name != "selectCountry") return;
    setSelectedCountries(e);
  };

  const createOptions = (obj) => {
    if (name === "selectCities") {
      return obj.map((element, index) => {
        return {
          value: index,
          label: element,
        };
      });
    }

    if (name === "selectCountry") {
      return obj.map((item) => {
        return {
          value: item.iso2,
          label: item.country,
        };
      });
    }
  };

  const handleUpdateOptionsCountries = (response) => {
    const temp = createOptions(response);
    setOptions(temp);
  };

  const handleUpdateOptionsCities = (response) => {
    let temp = [];
    const groupedOptions = [];

    response.forEach((item) => {
      selectedCountries.map((element) => {
        if (item.iso2 === element.value) {
          return temp.push(item);
        }
      });
    });

    temp.forEach((item) => {
      const teste = {
        label: item.country,
        options: createOptions(item.cities),
      };

      groupedOptions.push(teste);
    });

    setOptions(groupedOptions);
  };

  useEffect(() => {
    if (name != "selectCountry" || !countries) return;
    handleUpdateOptionsCountries(countries.data);
  }, [countries]);

  useEffect(() => {
    if (name != "selectCities" || !countries || !selectedCountries) return;
    handleUpdateOptionsCities(countries.data);
  }, [selectedCountries]);

  return (
    <Select
      value={value}
      isMulti
      styles={customStyles}
      onChange={handleChange}
      options={options}
      formatGroupLabel={formatGroupLabel}
      placeholder={placeholder}
    />
  );
}
