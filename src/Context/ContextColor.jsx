import { createContext, useState } from "react";

const ColorContext = createContext();

const ColorProvider = ({ children }) => {
  const [isHighlighted, setIsHighlighted] = useState(false);

  return (
    <ColorContext.Provider value={{ isHighlighted, setIsHighlighted }}>
      {children}
    </ColorContext.Provider>
  );
};

export { ColorContext, ColorProvider };