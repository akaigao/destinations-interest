import Logo from "../../assets/Logo.png";
import { ContainerHeader } from "./style";

export function Header() {
  return (
    <ContainerHeader>
      <img src={Logo} width="15%" alt="Logo Ally" />
      <button>
        <a href="https://allyhub.co/">Home</a>
      </button>
    </ContainerHeader>
  );
}
