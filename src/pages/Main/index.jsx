import { Contact } from "../../components/Contact";
import { RegisterBudget } from "../../components/RegisterBudget";
import { MainContainer } from "./style";

export default function Main() {
  return (
    <MainContainer>
      <RegisterBudget />
      <Contact />
    </MainContainer>
  );
}
