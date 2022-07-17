import React, { useState } from "react";
import "../style.css";
import Card from "./userAuth/Card";

function App() {
  const [user, setUser] = useState("");

  return <div className="App">{!user && <Card setUser={setUser} />}</div>;
}

export default App;
