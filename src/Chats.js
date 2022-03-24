import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import "./Chats.css";
import { db } from "./firebase";
import Chat from "./Chat";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { resetCameraImage } from "./features/cameraSlice";
const Chats = () => {
  const [posts, setPosts] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);
  const takeSnap = () => {
    dispatch(resetCameraImage());
    history.push("/");
  };
  return (
    <div className="chats">
      <div className="chats_header">
        <Avatar className="chats_avatar" />
        <div className="chats_search">
          <SearchIcon className="chats_searchIcon" />
          <input placeholder="Friends" type="text" />
        </div>
        <ChatBubbleIcon className="chats_chatIcon" />
      </div>

      <div className="chats_posts">
        {posts.map(
          ({
            id,
            data: { profilePic, username, timestamp, imageUrl, read },
          }) => (
            <Chat
              key={id}
              id={id}
              username={username}
              timestamp={timestamp}
              imageUrl={imageUrl}
              read={read}
              profilePic={profilePic}
            />
          )
        )}
      </div>
      <RadioButtonUncheckedIcon
        className="chats_takePicIcon"
        onClick={takeSnap}
        font-size="large"
      />
    </div>
  );
};

export default Chats;
