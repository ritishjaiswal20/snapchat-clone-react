import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/appSlice";
import { auth, provider } from "./firebase";
import "./Login.css";
function Login() {
  const dispatch = useDispatch();
  const signin = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch(
          login({
            username: result.user.displayName,
            profilePic: result.user.photoURl,
            id: result.user.uid,
          })
        );
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login-container">
        <img
          src="https://1000logos.net/wp-content/uploads/2017/08/Snapchat-logo-768x432.png"
          alt=""
        />
        <Button variant="outlined" onClick={signin}>
          SignIn
        </Button>
      </div>
    </div>
  );
}

export default Login;
