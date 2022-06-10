import { useState } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const Root = () => {
  const [showApp, setShowApp] = useState(true);

  return (
    <>
      <button onClick={() => setShowApp(false)}>Hide</button>
      {showApp ? <App /> : null}
    </>
  );
};

root.render(
  <Root>
    <App />
  </Root>
);
