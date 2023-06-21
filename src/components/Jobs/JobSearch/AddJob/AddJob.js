import React from "react";
import "./AddJob.scss";
import { Modal } from "@mantine/core";
import { useState } from "react";
function AddJob() {
  const [modalOpened, setModalOpened] = useState(false);
  const themeColor = localStorage.getItem("themeColor");

  return (
    <div className="addJob">
      <div className="add ">
        <h3
          className={`card ${themeColor}`}
          onClick={() => setModalOpened(true)}
        >
          إضافه وظيفه
        </h3>
      </div>
      <Modal
        overlayOpacity={0.55}
        overlayBlur={3}
        size="55%"
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
      >
        <form className={`card ${themeColor} formAddContent`}>
          <div className="group">
            <label>الاسم</label>
            <input type="text" placeholder="الاسم"></input>
          </div>
          <div className="group">
            <label>العمر</label>
            <input type="number" placeholder="العمر"></input>
          </div>
          <div className="group">
            <label>اسم الوظيفه</label>
            <input type="text" placeholder="اسم الوظيفه"></input>
          </div>
          <div className="group">
            <label>عنوان المشروع</label>
            <input type="text" placeholder="اكتب عنوانا للمشروع"></input>
          </div>
          <div className="group">
            <label>مهاراتك</label>
            <input type="text" placeholder="مهاراتك"></input>
          </div>
          <div className="group">
            <label>رفع cv</label>
            <input type="file" placeholder="اكتب عنوانا للمشروع"></input>
          </div>
          <div className="group">
            <label>نبذه عنك </label>
            <textarea type="text" placeholder="اكتب وصفا للمشروع"></textarea>
          </div>

          <button>إضافه</button>
        </form>
      </Modal>
    </div>
  );
}

export default AddJob;
