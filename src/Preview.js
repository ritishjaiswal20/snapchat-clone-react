import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetCameraImage, selectCameraImage } from "./features/cameraSlice";
import { useHistory } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import CreateIcon from "@mui/icons-material/Create";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import TimerIcon from "@mui/icons-material/Timer";
import CropIcon from "@mui/icons-material/Crop";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";
import "./Preview.css";
function Preview() {
  const cameraImage = useSelector(selectCameraImage);
  const history = useHistory();
  const dispatch = useDispatch();
  const closePreview = () => {
    dispatch(resetCameraImage());
  };
  useEffect(() => {
    if (!cameraImage) {
      history.replace("/");
    }
  }, [cameraImage, history]);
  return (
    <div className="preview">
      <CloseIcon onClick={closePreview} className="preview_close" />
      <div className="preview_toolbarRight">
        <TextFieldsIcon />
        <CreateIcon />
        <MusicNoteIcon />
        <AttachFileIcon />
        <CropIcon />
        <TimerIcon />
      </div>
      <img src={cameraImage} alt="preview" />
      <div onClick={sendPost} className="preview_footer">
        <h2>send now</h2>
        <SendIcon font-size="small" className="preview_sendIcon" />
      </div>
    </div>
  );
}

export default Preview;
