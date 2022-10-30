import { ContainerChildren } from "./components/ContainerChildren/index.jsx";
import { Form } from "./components/Form/index.jsx";
import { Header } from "./components/Header/index.jsx";
import { Container } from "./styles/container.js";

export function App() {
  return (
    <>
      <Header />
      <Container>
        <ContainerChildren>
          <h1>Destino de Interesse</h1>
          <hr />
          <h2>
            Para reservar um orçamento, preencha o formulário abaixo e
            entraremos em contato com mais informações.
          </h2>
          <Form
            input={[
              { id: 1, label: "Nome", type: "text" },
              { id: 2, label: "Email", type: "email" },
              {
                id: 3,
                label: "Phone / Whatsapp",
                type: "tel",
                placeholder: "(DDD) xXXXX-XXXX",
              },
              { id: 4, label: "CPF", type: "cpf" },
            ]}
          />
        </ContainerChildren>

        <ContainerChildren>
          <h1>Contato</h1>
          <hr />
          <h2>
            <strong>Adoraríamos falar com você.</strong> Veja como entrar em
            contato:
          </h2>
          <div className="contact">
            <p>Ribeirão Preto, SP.</p>
            <br />
            <p>
              P: <strong>+55 16 3315-9950</strong>
            </p>
            <p>E: contato@allyhub.co</p>
          </div>
        </ContainerChildren>
      </Container>
    </>
  );
}
