import { ButtonContainer } from "./style";

export function Button({ style, children }) {
  return <ButtonContainer style={style}>{children}</ButtonContainer>;
}
