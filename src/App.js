import React from "react";
import { ChatEngine } from "react-chat-engine";
import LandingPage from "./components/LandingPage";
import "./App.css";
import QuoteGenerator from "./components/QuoteGenerator";

const App = () => {
  if (!localStorage.getItem("username")) {
    return <LandingPage />;
  }

  window.onunload = () => {
    localStorage.clear();
  };

  return (
    <ChatEngine
      height="100vh"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      projectID={"6d7c5e6c-6946-4335-a1b1-c41b5fb9093b"}
      onNewMessage={() =>
        new Audio(
          "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
        ).play()
      }
    />
  );
};

// b819a619-b86d-403c-afd9-35bd2cb1bd35

export default App;
