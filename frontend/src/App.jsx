import { useState } from "react";
import Group from "./components/Group.jsx";

function App() {
  const [showGroup, setShowGroup] = useState(false);

  return (
    <div>
      <h1>Gerenciador de gifs</h1>

      {!showGroup ? (
        <button onClick={() => setShowGroup(true)}>
          Ir para Grupo de Gifs
        </button>
      ) : (
        <Group />
      )}
    </div>
  );
}

export default App;
