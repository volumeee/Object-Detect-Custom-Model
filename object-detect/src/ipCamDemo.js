import React, { useRef, useEffect } from "react";

const IpCamDemo = () => {
    const ipCamera = "http://192.168.1.4/mjpeg/1"; // Replace with your IP camera URL
    const imgRef = useRef(null);

    const startMJPEGStream = () => {
        imgRef.current.src = ipCamera;
    };

    const stopMJPEGStream = () => {
        imgRef.current.src = "";
    };

    useEffect(() => {
        return () => {
            stopMJPEGStream();
        };
    }, []);

    return (
        <div>
            <div>
                <button onClick={startMJPEGStream} className="cam-button">
                    Start MJPEG Stream
                </button>
            </div>
            <button onClick={stopMJPEGStream}>Stop MJPEG Stream</button>
            <div className="video-display-container">
                <div className="video-display">
                    <img ref={imgRef} className="prediction-window" alt="MJPEG Stream" />
                </div>
            </div>
        </div>
    );
};

export default IpCamDemo;
