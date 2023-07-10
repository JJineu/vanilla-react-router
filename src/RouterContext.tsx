import { createContext } from "react";

type RouterContextValue = {
  path: string;
  changePath: (path: string) => void;
};
export const RouterContext = createContext<RouterContextValue>({
  path: "",
  changePath: () => {},
});
