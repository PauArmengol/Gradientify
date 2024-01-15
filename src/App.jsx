import { useState } from "react";
import linearGradients from "./ArraylinearGradients/ArraylinearGradients";
import icons from "./img/icons.gif";
import Check from "./img/check.gif";

function App() {
  const [copied, setCopied] = useState(false);

  const handleCopie = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      })
      .catch((error) => {
        console.error("Error copie:", error);
      });
  };

  return (
    <>
      <div className="container-warp">
        {linearGradients.map((data) => (
          <div
            onClick={() => handleCopie(data.copie)}
            className="container-col"
            key={data.id}
          >
            <div
              className="container-background"
              style={{
                background: data.background,
              }}
            >
              <p className="Bg-title">{data.name}</p>
            </div>

            <div className="container-footer">
              <p className="footer-title">{data.color}</p>
              <img className="icons" src={icons} alt="GIF animado" />
            </div>
          </div>
        ))}
        {copied && (
          <div className="copie-modal">
            <p className="copie-title">
              <img className="icons-modal" src={Check} alt="check" />
              Text copied to clipboard.
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default App;