import { useState } from "react";
import Settings from "./components/Settings";
import Timer from "./components/Timer";

function App() {
  const [showSettings, setShowSettings] = useState(true);

  setShowSettings(true);

  return (
    <main className="pt-12 max-w-80 my-0 mx-auto text-center">
      {showSettings ? <Settings /> : <Timer />}
    </main>
  );
}

export default App;
