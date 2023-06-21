import React, { useState } from "react";
import profile from "../../assets/img/img/profile.jpg";
import LiveVideo from "../../assets/svg/live_video.svg";
import photo from "../../assets/svg/photo.svg";
import smile from "../../assets/svg/smile.svg";
import "./ShareSearch.scss";
import { Modal } from "@mantine/core";
function Share() {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className="searchShare">
      <div className="top">
        <div className="img">
          <img src={profile} />
        </div>
        <input
          type="text"
          placeholder="بم تفكر ي ابراهيم"
          onClick={() => setModalOpened(true)}
        />
      </div>
      <div className="buttons">
        <span>
          <div className="svg">
            <img src={LiveVideo} alt="" />
          </div>
          <h4>Live Video</h4>
        </span>
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <span>
            <div className="svg">
              <img src={photo} alt="" />
            </div>
            <h4>Photo/Video</h4>
          </span>
        </label>
      </div>
      <Modal
        overlayOpacity={0.55}
        overlayBlur={3}
        size="55%"
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
      >
        <div className="topSahre">
          <h3>إضافه بحث</h3>
        </div>
        <div className="content">
          <textarea placeholder="ماذا تفكر ي ابراهيم"></textarea>
          <img src="" />
          <select>
            <option> قم بتصنيف المنشور</option>
            <option> بحث علمى</option>
          </select>
          <select>
            <option> قم بتحديد المحتوى</option>
            <option> بحث علمى</option>
            <option> بحث علمى</option>
            <option> بحث علمى</option>
          </select>
        </div>
      </Modal>
    </div>
  );
}

export default Share;
