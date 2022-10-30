import Select from "react-select";
import { customStyles } from "./style";

export function SelectInput({ data, op, placeholder }) {
  const apiData = {
    ...op,
  };

  const options = Object.values(apiData).map((item) => {
    return {
      value: item.country_code ?? item.code,
      label: item.name_ptbr,
    };
  });

  return (
    <Select
      isMulti
      styles={customStyles}
      onChange={(val) => data.onChange(val)}
      options={options}
      placeholder={placeholder}
    />
  );
}
