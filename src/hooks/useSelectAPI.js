import { useContext } from "react";
import { SelectProvider } from "../context/SelectInputProvider";

export function useSelectAPI() {
  return useContext(SelectProvider);
}
