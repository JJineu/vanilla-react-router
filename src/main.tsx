import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "./Router.tsx";
import { Route } from "./Route.tsx";
import { About } from "./About.tsx";
import { Root } from "./Root.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Route path="/" component={<Root />} />
      <Route path="/about" component={<About />} />
    </Router>
  </React.StrictMode>
);
