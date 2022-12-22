import { useController } from "react-hook-form";
import { PatternFormat } from "react-number-format";
import { CPFInputContainer, customCPFInput } from "./style";

export function CPFInput({ control, name, label, placeholder, rules }) {
  const {
    field: { value, onChange },
  } = useController({ control, name, label, placeholder, rules });

  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <CPFInputContainer>
      <label>{label}: *</label>
      <PatternFormat
        value={value}
        format="###.###.###-##"
        allowEmptyFormatting={false}
        customInput={customCPFInput}
        onChange={handleChange}
      />
    </CPFInputContainer>
  );
}
