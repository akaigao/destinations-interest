import { ContainerInput } from "./style";

export function Input({ data, label, type }) {
  return (
    <ContainerInput>
      <label>{label}: *</label>
      <input
        {...data(`${label}`, {
          required: true,
          maxLength: type === "cpf" ? "11" : null,
        })}
        id={label}
        type={type}
        placeholder={label}
      />
    </ContainerInput>
  );
}
