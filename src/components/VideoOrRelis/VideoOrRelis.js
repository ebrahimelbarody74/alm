import React from "react";
import Vidoes from "../Videos/Vidoes";
import Rails from "../Rails/Rails";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { BsCameraVideo } from "react-icons/bs";
import { useState } from "react";
import "./VideoOrRelis.scss";
function VideoOrRelis() {
  const [activeVideo, setActiveVideo] = useState("video");
  const themeColor = localStorage.getItem("themeColor");

  return (
    <div>
      <div className="chooseType">
        <div className="box ">
          <div
            className={
              activeVideo === "video"
                ? `videoType bg-primary-gradiant ${themeColor}`
                : "videoType card"
            }
            style={
              activeVideo === "video"
                ? { backgroundColor: "#0099a8", color: "#fff" }
                : { backgroundColor: "#fff", color: "#000" }
            }
            onClick={() => setActiveVideo("video")}
          >
            <BsCameraVideo
              style={
                activeVideo === "video" ? { color: "#fff " } : { color: "#000" }
              }
            />
            <h3
              style={
                activeVideo === "video" ? { color: "#fff " } : { color: "#000" }
              }
            >
              الفيديوهات
            </h3>
          </div>
          <div
            className={
              activeVideo === "rails"
                ? `reilsType bg-primary-gradiant ${themeColor}`
                : "reilsType card"
            }
            style={
              activeVideo === "rails"
                ? { backgroundColor: "#0099a8", color: "#fff" }
                : { backgroundColor: "#fff", color: "#000" }
            }
            onClick={() => setActiveVideo("rails")}
          >
            <MdOutlineSlowMotionVideo
              style={
                activeVideo === "rails" ? { color: "#fff " } : { color: "#000" }
              }
            />
            <h3
              style={
                activeVideo === "rails" ? { color: "#fff " } : { color: "#000" }
              }
            >
              الريلز
            </h3>
          </div>
        </div>
      </div>
      {activeVideo === "video" ? <Vidoes /> : <Rails />}
    </div>
  );
}

export default VideoOrRelis;
