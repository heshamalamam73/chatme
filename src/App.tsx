import React, { useState } from "react";
import SignIn from "./auth/SignIn";
import SignOut from "./auth/SignOut";
import SignUp from "./auth/SignUp";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const onSignIn = () => {
    setLoggedIn(true);
  };
  return (
    <div className="App">
      {loggedIn ? "success" : "errorrrr"}
      <SignUp />
      <SignIn onSignIn={onSignIn} />
      <SignOut />
    </div>
  );
}

export default App;
