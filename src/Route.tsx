import { useContext } from "react";
import { RouterContext } from "./RouterContext";

export const Route = ({
  path,
  component,
}: {
  path: string;
  component: React.ReactNode;
}) => {
  const { path: currentPath } = useContext(RouterContext);

//   window.onpopstate = (e) => {
//     setPath(window.location.pathname);
//   };
  if (currentPath !== path) return (<></>) as React.ReactNode;
  return component;
};
