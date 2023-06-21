import React from "react";
import "./AddContents.scss";
import { Modal } from "@mantine/core";
import { useState } from "react";
function AddContents() {
  const [modalOpened, setModalOpened] = useState(false);
  const themeColor = localStorage.getItem("themeColor");

  return (
    <div className="addContents">
      <div className="add ">
        <h3
          className={`card ${themeColor}`}
          onClick={() => setModalOpened(true)}
        >
          إضافه محتوى
        </h3>
      </div>
      <Modal
        overlayOpacity={0.55}
        overlayBlur={3}
        size="55%"
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
      >
        <form className={` ${themeColor} formAddContent card`}>
          <div className="group">
            <label className="fw-700 text-grey-900 font-xs mt-1">العنوان </label>
            <input type="text" placeholder="اكتب عنوانا "></input>
          </div>
          <div className="group">
            <label className="fw-700 text-grey-900 font-xs mt-1">نوع المشروع </label>
            <select>
              <option>اعمال وخدمات استشاريه</option>
              <option> برمجه وتطوير المواقع والتطبيقات</option>
              <option> هندسه عماره وتصميم داخلى</option>
              <option> تصميم فيديوهات وصوتيات</option>
              <option> تسويق الكترونى ومبيعات</option>
              <option> كتابه وتحرير , تؤجمه ولغات</option>
              <option> دعم , مساعده وإدخال بيانات</option>
              <option> تدريب وتعليم عن بعد</option>
            </select>
          </div>
          <div className="group">
            <label className="fw-700 text-grey-900 font-xs mt-1">الوصف </label>
            <textarea type="text" placeholder="الوصف"></textarea>
          </div>
          <div className="group">
            <label className="fw-700 text-grey-900 font-xs mt-1">الميزانيه</label>
            <input type="number" placeholder="ادخل الميزانيه" />
          </div>
          <div className="group">
            <label className="fw-700 text-grey-900 font-xs mt-1">مده التسليم</label>
            <input type="number" placeholder="ادخل مده التسليم" />
          </div>
          <button className={` ${themeColor} `}>إضافه</button>
        </form>
      </Modal>
    </div>
  );
}

export default AddContents;
