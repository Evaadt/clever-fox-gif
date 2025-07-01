import { useState } from "react";
import Group from "./components/Group.jsx";
import Home from "./components/Home/Home.jsx";

function App() {
  const [screen, setScreen] = useState("home"); // 'home' | 'group'

  return (
    <div>
      {screen === "home" && (
        <Home onGoToGroup={() => setScreen("group")} />
      )}

      {screen === "group" && (
        <Group onBack={() => setScreen("home")} />
      )}
    </div>
  );
}

export default App;
