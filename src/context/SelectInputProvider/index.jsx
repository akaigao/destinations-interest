import { createContext } from "react";
import { useSelectAPIProvider } from "../../hooks/useSelectInputProvider";
import { SelectInputProviderContainer } from "./style";

export const SelectProvider = createContext({});

export default function SelectInputProvider({ children }) {
  const selectInputProvider = useSelectAPIProvider();

  return (
    <SelectInputProviderContainer>
      <SelectProvider.Provider value={selectInputProvider}>
        {children}
      </SelectProvider.Provider>
    </SelectInputProviderContainer>
  );
}
