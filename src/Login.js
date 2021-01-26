import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core/";
import { auth, provider } from "./firebase";

function Login() {
  const signIn = (e) => {
    // e.preventDefault();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://assets.stickpng.com/images/5cb480cd5f1b6d3fbadece79.png"
          alt="slack logo"
        />
        <h1>Sign in to Slackjong</h1>
        <p>slackjong.slack.com</p>
        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  );
}

export default Login;
