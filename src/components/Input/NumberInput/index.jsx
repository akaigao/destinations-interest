import { useController } from "react-hook-form";
import { PatternFormat } from "react-number-format";
import { customNumberInput, NumberInputContainer } from "./style";

export function NumberInput({ control, name, label, placeholder, rules }) {
  const {
    field: { value, onChange },
  } = useController({
    control,
    name,
    label,
    placeholder,
    rules,
  });

  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <NumberInputContainer>
      <label>{label}: *</label>
      <PatternFormat
        value={value}
        format="(##) #####-####"
        allowEmptyFormatting={false}
        customInput={customNumberInput}
        onChange={handleChange}
      />
    </NumberInputContainer>
  );
}
