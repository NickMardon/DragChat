import React from "react";
import Webcam from "react-webcam";
import "./index.css";
import { Col } from 'antd';

const WebcamCapture = () => {
    const webcamRef = React.useRef(null);
    const [imgSrc, setImgSrc] = React.useState(null);
  
    const capture = React.useCallback(() => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImgSrc(imageSrc);
    }, [webcamRef, setImgSrc]);
  
    return (
      <div className="webcam">
          <Col s = {24} md ={12} lg={12} style={{width:"100%"}}>
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
        />
        </Col>
        </div>
    );
  };

  export default Webcam;
  