import { useContext } from "react";
import { RouterContext } from "./RouterContext";

export const useRouter = () => {
  const { path, changePath } = useContext(RouterContext);
  const push = (nextPath: string) => {
    if (path === nextPath) return;
    changePath(nextPath);
  };
  return { push };
};
