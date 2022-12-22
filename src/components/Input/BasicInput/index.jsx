import { useController } from "react-hook-form";
import { ContainerInput } from "./style";

export function BasicInput({ control, name, label, placeholder, type, rules }) {
  const { field } = useController({
    control,
    name,
    label,
    rules,
  });

  return (
    <ContainerInput>
      <label>{label}: *</label>
      <input {...field} type={type} placeholder={placeholder} id={label} />
    </ContainerInput>
  );
}
