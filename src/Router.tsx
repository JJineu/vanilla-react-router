import { useEffect, useState } from "react";
import { RouterContext } from "./RouterContext";

export const Router = ({ children }: React.ReactNode) => {
  const [path, setPath] = useState(window.location.pathname);
  const changePath = (path: string) => {
    window.history.pushState({ data: path }, "", path);
    setPath(path);
  };
  useEffect(() => {
    const popStateHandler = (e: PopStateEvent) => {
      setPath(e.state.data);
    };
    window.addEventListener("popstate", popStateHandler);
    return () => window.removeEventListener("popstate", popStateHandler);
  }, []);
  return (
    <div>
      <RouterContext.Provider value={{ path, changePath }}>
        {children}
      </RouterContext.Provider>
    </div>
  );
};
