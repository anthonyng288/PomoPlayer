import { useState } from "react";
import Settings from "./Settings";
import Timer from "./Timer";

function App() {
  const [showSettings, setShowSettings] = useState(true);

  return (
    <main className="pt-12 max-w-80 my-0 mx-auto text-center">
      {showSettings ? <Settings /> : <Timer />}
    </main>
  );
}

export default App;
