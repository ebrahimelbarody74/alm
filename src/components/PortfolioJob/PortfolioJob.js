import React from "react";
import Header from "../Header/Header";
import SidebarRight from "../SidebarRight/SidebarRight";
import SideBarLeft from "../SideBarLeft/SideBarLeft";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { BiDownload, BiPlus } from "react-icons/bi";
import "./PortfolioJob.scss";
import img from "../../assets/img/drake.jpg";
import { AiFillStar } from "react-icons/ai";
import { BsFillSendPlusFill } from "react-icons/bs";

function PortfolioJob() {
  const [active, setActive] = useState("Home");
  const [activeRightbar, setActiveRightbar] = useState(false);
  console.log(window.location.pathname);
  const themeColor = localStorage.getItem("themeColor");

  return (
    <>
      <div className="sectionCenter">
        <div className="portfoioJob">
          <div className={` ${themeColor} top`}>
            <div className="info">
              <div className="img">
                <img src={img} />
              </div>
            </div>
            <h3 className="fw-700 text-grey-900 font-xs mt-1"> mohamed ali</h3>
            <span>مصمم مواقع الكترونيه</span>
            <div className="d-flex gap-3">
              <button>
                مراسله
                <BsFillSendPlusFill />
              </button>
              <button>
                تحميل
                <BiDownload />
              </button>
            </div>
          </div>
          <div className={` ${themeColor}  projectCard`}>
            <h4 className="fw-700 text-grey-900 font-xs mt-1">إحصائيات</h4>
            <ul>
              <li className=" font-xsss fw-500 mt-1 lh-3 text-grey-600">
                التقيمات
                <span>
                  <AiFillStar className="c-gold" />
                  <AiFillStar className="c-gold" />
                  <AiFillStar className="c-gold" />
                  <AiFillStar className="c-gold" />
                  <AiFillStar className="c-gold" />
                </span>
              </li>
              <li className=" font-xsss fw-500 mt-1 lh-3 text-grey-600">
                معدل اكتمال المشاريع
                <span>90.91%</span>
              </li>
              <li className=" font-xsss fw-500 mt-1 lh-3 text-grey-600">
                معدل إعادة التوظيف
                <span>6ز65%</span>
              </li>
              <li className=" font-xsss fw-500 mt-1 lh-3 text-grey-600">
                معدل التسليم بالموعد
                <span>60%</span>
              </li>
              <li className=" font-xsss fw-500 mt-1 lh-3 text-grey-600">
                متوسط سرعه الرد
                <span>6 ساعه 20 دقيقه</span>
              </li>
              <li className=" font-xsss fw-500 mt-1 lh-3 text-grey-600">
                المشاريع المكتمله
                <span>29</span>
              </li>
              <li className=" font-xsss fw-500 mt-1 lh-3 text-grey-600">
                مشاريع يعمل عليها
                <span> 1</span>
              </li>
            </ul>
          </div>
          <div className={` ${themeColor}  disc`}>
            <h4 className="fw-700 text-grey-900 font-xs mt-1">نبذه عنى </h4>
            <p className=" font-xss fw-500 mt-1 lh-3 text-grey-700">
              السلام عليكم احتاج شخص لعمل موقع الكترونى متجاوب مع كل الشاشات
            </p>
          </div>
          <div className={` ${themeColor}  skills`}>
            <h4 className="fw-700 text-grey-900 font-xs mt-1">مهاراتى</h4>
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
        </div>
      </div>
    </>
  );
}

export default PortfolioJob;
