import React from "react";
import Header from "../Header/Header";
import SidebarRight from "../SidebarRight/SidebarRight";
import SideBarLeft from "../SideBarLeft/SideBarLeft";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { BiPlus } from "react-icons/bi";
import "./Contects.scss";
function Contects() {
  // const [active, setActive] = useState("Home");
  // const [activeRightbar, setActiveRightbar] = useState(false);
  const themeColor = localStorage.getItem("themeColor");

  return (
    <>
      <div className="sectionCenter">
        <div className="contents">
          <div className={` ${themeColor} top `}>
            <h3 className="fw-700 text-grey-900 font-xs mt-1">
              مساعده فى operating system
            </h3>
            <button className={` ${themeColor} bg-primary-gradiant text-white`}>
              اضف عرضك الان
              <BiPlus />
            </button>
          </div>
          <div className={` ${themeColor}  projectCard`}>
            <h4 className="fw-700 text-grey-900 font-xs mt-1">بطاقه المشروع</h4>
            <ul>
              <li className=" font-xsss fw-500 mt-1 lh-3 text-grey-600">
                تاريخ النشر
                <span>منذ 6 دقائق</span>
              </li>
              <li className=" font-xsss fw-500 mt-1 lh-3 text-grey-600">
                الميزانيه
                <span>50$ - 100$</span>
              </li>
              <li className=" font-xsss fw-500 mt-1 lh-3 text-grey-600">
                مده التنفيذ
                <span>1 يوم</span>
              </li>
              <li className=" font-xsss fw-500 mt-1 lh-3 text-grey-600">
                متوسط العروض
                <span>70$</span>
              </li>
              <li className=" font-xsss fw-500 mt-1 lh-3 text-grey-600">
                عدد العروض
                <span>2</span>
              </li>
            </ul>
          </div>
          <div className={` ${themeColor} disc`}>
            <h4 className="fw-700 text-grey-900 font-xs mt-1">وصف الشمروع </h4>
            <p className=" font-xss fw-500 mt-1 lh-3 text-grey-700">
              السلام عليكم احتاج شخص لعمل موقع الكترونى متجاوب مع كل الشاشات
            </p>
          </div>
          <div className={` ${themeColor} skills`}>
            <h4 className="fw-700 text-grey-900 font-xs mt-1">
              المهارات المطلوبه
            </h4>
            <ul>
              <li>css</li>
              <li>css</li>
              <li>css</li>
              <li>css</li>
              <li>css</li>
              <li>css</li>
              <li>css</li>
              <li>css</li>
            </ul>
          </div>
          <div className={` ${themeColor} addOffer`}>
            <h4 className="fw-700 text-grey-900 font-xs mt-1">أضف عرضك الان</h4>
            <form>
              <div className="group">
                <label className=" font-xsss fw-500 mt-1 lh-3 text-grey-600" >مده التسليم</label>
                <input type="text" placeholder="اكتب عنوانا للمشروع"></input>
              </div>
              <div className="group">
                <label className=" font-xsss fw-500 mt-1 lh-3 text-grey-600">قيمه العرض</label>
                <input type="text" placeholder="اكتب عنوانا للمشروع"></input>
              </div>
              <div className="group">
                <label className=" font-xsss fw-500 mt-1 lh-3 text-grey-600">مستحقاتك</label>
                <input type="text" placeholder="اكتب عنوانا للمشروع"></input>
              </div>
              <div className="group">
                <label className=" font-xsss fw-500 mt-1 lh-3 text-grey-600">تفاصيل العرض</label>
                <textarea
                  type="text"
                  placeholder="اكتب وصفا للمشروع"
                ></textarea>
              </div>

              <button>إضافه</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contects;
