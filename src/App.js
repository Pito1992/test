import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    console.log(clicked);

    return () => {
      console.log("cleanup");
    };
  }, [clicked]);

  return (
    <div className="App">
      <button onClick={() => setClicked(true)}>Add</button>
    </div>
  );
}
