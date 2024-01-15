import React from "react";
import Home from "./Home";
import App from "../App";
import CreateBackground from "./CreateBackground";
import { ColorProvider } from "../Context/ContextColor";

function Index() {
  return (
    <div>
      <ColorProvider>
        <Home />
        <CreateBackground />
        <App />
      </ColorProvider>
    </div>
  );
}

export default Index;