import React from "react";
import "./App.css";
import { withAuthenticator } from "aws-amplify-react";
function App() {
  return <div className="App">hello world</div>;
}

export default withAuthenticator(App);
