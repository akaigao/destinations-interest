import { ContainerInput } from "./style";

export function Input({ data, label, placeholder, type }) {
  let pattern = null;

  if (type === "tel") {
    pattern = /^[0-9 ()-]+$/;
  }

  if (type === "cpf") {
    pattern = /^[0-9]+$/;
  }

  return (
    <ContainerInput>
      <label>{label}: *</label>
      <input
        {...data(`${label}`, {
          required: true,
          maxLength: type === "cpf" ? "11" : null,
          minLength: type === "cpf" ? "11" : null,
          pattern: pattern,
        })}
        id={label}
        type={type}
        placeholder={type === "tel" ? placeholder : label}
      />
    </ContainerInput>
  );
}
