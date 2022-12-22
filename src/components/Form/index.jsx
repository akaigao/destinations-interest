import { Button } from "../Button";
import { ContainerChildren } from "../ContainerChildren/index.jsx";
import { Box } from "./style.js";

export function Form({ children, onSubmit }) {
  return (
    <Box>
      <form onSubmit={onSubmit}>
        <ContainerChildren>
          {children}

          <Button>Enviar</Button>
        </ContainerChildren>
      </form>
    </Box>
  );
}
