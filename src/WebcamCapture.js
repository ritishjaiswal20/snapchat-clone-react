import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { useDispatch } from "react-redux";
import { setCameraImage } from "./features/cameraSlice";
import { useHistory } from "react-router-dom";
import "./WebcamCapture.css";
const videoConstraints = {
  width: 350,
  height: 500,
  facingMode: "user",
};

function WebcamCapture() {
  const webcamRef = useRef(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    dispatch(setCameraImage(imageSrc));
    history.push("/preview");
  }, [webcamRef]);

  return (
    <div className="webcamCapture">
      <Webcam
        audio={false}
        height={videoConstraints.height}
        width={videoConstraints.width}
        screenshotFormat="image/jpeg"
        ref={webcamRef}
        videoConstraints={videoConstraints}
      />
      <RadioButtonCheckedIcon
        className="webcamCapture_button"
        onClick={capture}
        font-size="large"
      />
    </div>
  );
}

export default WebcamCapture;
