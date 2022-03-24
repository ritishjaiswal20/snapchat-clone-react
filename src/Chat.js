import { Avatar } from "@mui/material";
import React from "react";
import "./Chat.css";
import ReactTimeago from "react-timeago";
import StopRoundedIcon from "@mui/icons-material/StopRounded";
import { selectImage, selectUser } from "./features/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { auth, db } from "./firebase";
import { useHistory } from "react-router-dom";
// function Chat({ id, username, timestamp, profilePic, read, imageUrl }) {
//   const dispatch = useDispatch();
//   const history = useHistory();
//   const open = () => {
//     if (!read) {
//       dispatch(selectImage(imageUrl));
//       db.collection("posts").doc(id).set(
//         {
//           read: true,
//         },
//         { merge: true }
//       );
//     }
//     history.push("/chats/view");
//   };

//   return (
//     <div onClick={open} className="chat">
//       <Avatar className="chat_avatar" src="profilePic" />
//       <div className="chat_info">
//         <h4>{username}</h4>
//         <p>
//           Tap to view -
//           <ReactTimeago date={new Date(timestamp?.toDate()).toUTCString()} />
//         </p>
//       </div>
//       {!read && <StopRoundedIcon className="chat_readIcon" />}
//     </div>
//   );
// }

// export default Chat;

const Chat = ({ id, username, timestamp, read, imageUrl, profilePic }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const history = useHistory();

  const open = () => {
    if (!read) {
      dispatch(selectImage(imageUrl));
      db.collection("posts").doc(id).set(
        {
          read: true,
        },
        { merge: true }
      );

      history.push("/chats/view");
    }
  };

  return (
    <div onClick={open} className="chat">
      <Avatar
        src={user.profilePic}
        onClick={() => auth.signOut()}
        className="chat_avatar"
      />
      <div className="chat_info">
        <h4>{username}</h4>
        <p>
          {!read && "Tap to view -"}{" "}
          <ReactTimeago date={new Date(timestamp?.toDate()).toUTCString()} />
        </p>
      </div>

      {!read && <StopRoundedIcon className="chat_readIcon" />}
    </div>
  );
};

export default Chat;
