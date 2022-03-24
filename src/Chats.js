import { Avatar } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import "./Chats.css";
function Chats() {
  return (
    <div className="chats">
      <div className="chats_header">
        <Avatar className="chats_avatar" />
        <div className="chats_search">
          <SearchIcon />
          <input type="text" placeholder="Friends" />
        </div>
        <ChatBubbleIcon className="chats_chatIcon" />
      </div>
    </div>
  );
}

export default Chats;
