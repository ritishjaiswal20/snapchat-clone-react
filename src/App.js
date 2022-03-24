import React, { useEffect } from "react";
import "./App.css";
import WebcamCapture from "./WebcamCapture";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Preview from "./Preview";
import Chats from "./Chats";
import ChatView from "./ChatView";
import { useDispatch, useSelector } from "react-redux";
import Login from "./Login";
import { login, logout, selectUser } from "./features/appSlice";
import { auth } from "./firebase";
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            username: authUser.displayName,
            profilePic: authUser.photoURL,
            id: authUser.uid,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <img
              className="app-logo"
              src="https://1000logos.net/wp-content/uploads/2017/08/Snapchat-logo-768x432.png"
              alt=""
            />
            <div className="app_body">
              <Switch>
                <Route path="/chats/view">
                  <ChatView />
                </Route>
                <Route path="/chats">
                  <Chats />
                </Route>
                <Route path="/preview">
                  <Preview />
                </Route>
                <Route exact path="/">
                  <WebcamCapture />
                </Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
