import React, { useState } from "react";
import "../style.css";
import Card from "./userAuth/Card";
import Main from "./userHome/Main";

function App() {
  const [user, setUser] = useState("nic");

  return (
    <div className="App">
      {user && <Main user={user} setUser={setUser} />}
      {!user && <Card setUser={setUser} />}
    </div>
  );
}

export default App;
