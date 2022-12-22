import { ContainerChildren } from "../ContainerChildren";

export function Contact() {
  return (
    <ContainerChildren>
      <h1>Contato</h1>
      <hr />
      <h2>
        <strong>Adoraríamos falar com você.</strong> Veja como entrar em
        contato:
      </h2>
      <div className="contact">
        <p>Cidade, UF.</p>
        <br />
        <p>
          P: <strong>+55 99 1234-5678</strong>
        </p>
        <p>E: meu@contato.com</p>
      </div>
    </ContainerChildren>
  );
}
