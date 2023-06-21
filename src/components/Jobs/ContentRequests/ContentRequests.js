import React from "react";
import { BiMenuAltLeft, BiPlus } from "react-icons/bi";
import { RiMenuAddLine } from "react-icons/ri";
import "./ContentRequests.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import AddContents from "./AddContents/AddContents";
function ContentRequests() {
  const [report, setReport] = useState(false);
  const themeColor = localStorage.getItem("themeColor");
  const [viewList, setViewList] = useState(false);
  return (
    <div className="contentRequests">
      <AddContents />
      <div className="filterSearch">
        <div className="d-flex gap-3 align-items-center ">
          <div
            className="font-xl btn-round-md bg-greylight mb-3"
            onClick={() => setViewList(!viewList)}
          >
            <RiMenuAddLine className="text-grey-900 cursor-pointer" />
          </div>
          <h4
            className="fw-700 text-grey-900 font-xss mt-1 cursor-pointer"
            onClick={() => setViewList(!viewList)}
          >
            فلتر
          </h4>
        </div>
        {viewList && (
          <ul className=" switchcolor-wrap ">
            <li className="card flex-row me-2 mb-2 pt-3 pb-3 gap-2">
              <h4 className=" fw-700 font-xsss mb-0">اعمال وخدمات استشاريه</h4>
              <BiPlus />
            </li>
            <li className="card flex-row me-2 mb-2 pt-3 pb-3 gap-2">
              <h4 className=" fw-700 font-xsss mb-0">
                برمجه وتطوير المواقع والتطبيقات
              </h4>
              <BiPlus />
            </li>
            <li className="card flex-row me-2 mb-2 pt-3 pb-3 gap-2">
              <h4 className=" fw-700 font-xsss mb-0">
                هندسه عماره وتصميم داخلى
              </h4>
              <BiPlus />
            </li>
            <li className="card flex-row me-2 mb-2 pt-3 pb-3 gap-2">
              <h4 className=" fw-700 font-xsss mb-0">تصميم فيديوهات وصوتيات</h4>
              <BiPlus />
            </li>
            <li className="card flex-row me-2 mb-2 pt-3 pb-3 gap-2">
              <h4 className=" fw-700 font-xsss mb-0">تسويق الكترونى ومبيعات</h4>
              <BiPlus />
            </li>
            <li className="card flex-row me-2 mb-2 pt-3 pb-3 gap-2">
              <h4 className=" fw-700 font-xsss mb-0">
                كتابه وتحرير , تؤجمه ولغات
              </h4>
              <BiPlus />
            </li>
            <li className="card flex-row me-2 mb-2 pt-3 pb-3 gap-2">
              <h4 className=" fw-700 font-xsss mb-0">
                دعم , مساعده وإدخال بيانات
              </h4>
              <BiPlus />
            </li>
            <li className="card flex-row me-2 mb-2 pt-3 pb-3 gap-2">
              <h4 className=" fw-700 font-xsss mb-0">تدريب وتعليم عن بعد</h4>
              <BiPlus />
            </li>

            <li
              className={` card flex-row me-2 mb-2 pt-3 pb-3 gap-2 ${themeColor} bg-primary-gradiant`}
            >
              <h4 className=" fw-700 font-xsss mb-0" style={{ color: "#fff" }}>
                اخرى
              </h4>
              <BiPlus style={{ color: "#fff" }} />
            </li>
          </ul>
        )}
      </div>
      <div className="contentRequest">
        <Link to="/contact/1">
          <div className="box card d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3">
            <div className="top">
              <div className="right">
                <h4 className="fw-700 font-xsss mt-3 mb-1">
                  مساعده فى operating system
                </h4>
                <div className="date">
                  <span className="fw-500 font-xssss text-grey-500 mt-0 mb-3">
                    mohamed ali
                  </span>
                  <span className="fw-500 font-xssss text-grey-500 mt-0 mb-3">
                    منذ دقيقه
                  </span>
                  <span className="fw-500 font-xssss text-grey-500 mt-0 mb-3">
                    اضف اول عرض
                  </span>
                </div>
              </div>
              <div className="left">
                <button className={`${themeColor} bg-primary-gradiant`}>
                  اضف عرضك
                  <BiPlus />
                </button>
                <BiMenuAltLeft
                  onClick={() => setReport(!report)}
                  className={`${themeColor} text-current`}
                />
                {report && (
                  <div className="report">
                    <span>تبليغ عن محتوى</span>
                  </div>
                )}
              </div>
            </div>
            <div className="bottom">
              <p className="fw-500 text-grey-600 lh-26 font-xsss w-100 mb-2">
                السلام عليكم احتاج شخص لديه معرفه فى operting system بشكل جيد
                للمساعده فى بعض المشاكل
              </p>
            </div>
          </div>
        </Link>
        <Link to="/contact/1">
          <div className="box card d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3">
            <div className="top">
              <div className="right">
                <h4 className="fw-700 font-xsss mt-3 mb-1">
                  مساعده فى operating system
                </h4>
                <div className="date">
                  <span className="fw-500 font-xssss text-grey-500 mt-0 mb-3">
                    mohamed ali
                  </span>
                  <span className="fw-500 font-xssss text-grey-500 mt-0 mb-3">
                    منذ دقيقه
                  </span>
                  <span className="fw-500 font-xssss text-grey-500 mt-0 mb-3">
                    اضف اول عرض
                  </span>
                </div>
              </div>
              <div className="left">
                <button className={`${themeColor} bg-primary-gradiant`}>
                  اضف عرضك
                  <BiPlus />
                </button>
                <BiMenuAltLeft
                  onClick={() => setReport(!report)}
                  className={`${themeColor} text-current`}
                />
                {report && (
                  <div className="report">
                    <span>تبليغ عن محتوى</span>
                  </div>
                )}
              </div>
            </div>
            <div className="bottom">
              <p className="fw-500 text-grey-600 lh-26 font-xsss w-100 mb-2">
                السلام عليكم احتاج شخص لديه معرفه فى operting system بشكل جيد
                للمساعده فى بعض المشاكل
              </p>
            </div>
          </div>
        </Link>
        <Link to="/contact/1">
          <div className="box card d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3">
            <div className="top">
              <div className="right">
                <h4 className="fw-700 font-xsss mt-3 mb-1">
                  مساعده فى operating system
                </h4>
                <div className="date">
                  <span className="fw-500 font-xssss text-grey-500 mt-0 mb-3">
                    mohamed ali
                  </span>
                  <span className="fw-500 font-xssss text-grey-500 mt-0 mb-3">
                    منذ دقيقه
                  </span>
                  <span className="fw-500 font-xssss text-grey-500 mt-0 mb-3">
                    اضف اول عرض
                  </span>
                </div>
              </div>
              <div className="left">
                <button className={`${themeColor} bg-primary-gradiant`}>
                  اضف عرضك
                  <BiPlus />
                </button>
                <BiMenuAltLeft
                  onClick={() => setReport(!report)}
                  className={`${themeColor} text-current`}
                />
                {report && (
                  <div className="report">
                    <span>تبليغ عن محتوى</span>
                  </div>
                )}
              </div>
            </div>
            <div className="bottom">
              <p className="fw-500 text-grey-600 lh-26 font-xsss w-100 mb-2">
                السلام عليكم احتاج شخص لديه معرفه فى operting system بشكل جيد
                للمساعده فى بعض المشاكل
              </p>
            </div>
          </div>
        </Link>
        <Link to="/contact/1">
          <div className="box card d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3">
            <div className="top">
              <div className="right">
                <h4 className="fw-700 font-xsss mt-3 mb-1">
                  مساعده فى operating system
                </h4>
                <div className="date">
                  <span className="fw-500 font-xssss text-grey-500 mt-0 mb-3">
                    mohamed ali
                  </span>
                  <span className="fw-500 font-xssss text-grey-500 mt-0 mb-3">
                    منذ دقيقه
                  </span>
                  <span className="fw-500 font-xssss text-grey-500 mt-0 mb-3">
                    اضف اول عرض
                  </span>
                </div>
              </div>
              <div className="left">
                <button className={`${themeColor} bg-primary-gradiant`}>
                  اضف عرضك
                  <BiPlus />
                </button>
                <BiMenuAltLeft
                  onClick={() => setReport(!report)}
                  className={`${themeColor} text-current`}
                />
                {report && (
                  <div className="report">
                    <span>تبليغ عن محتوى</span>
                  </div>
                )}
              </div>
            </div>
            <div className="bottom">
              <p className="fw-500 text-grey-600 lh-26 font-xsss w-100 mb-2">
                السلام عليكم احتاج شخص لديه معرفه فى operting system بشكل جيد
                للمساعده فى بعض المشاكل
              </p>
            </div>
          </div>
        </Link>
        <Link to="/contact/1">
          <div className="box card d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3">
            <div className="top">
              <div className="right">
                <h4 className="fw-700 font-xsss mt-3 mb-1">
                  مساعده فى operating system
                </h4>
                <div className="date">
                  <span className="fw-500 font-xssss text-grey-500 mt-0 mb-3">
                    mohamed ali
                  </span>
                  <span className="fw-500 font-xssss text-grey-500 mt-0 mb-3">
                    منذ دقيقه
                  </span>
                  <span className="fw-500 font-xssss text-grey-500 mt-0 mb-3">
                    اضف اول عرض
                  </span>
                </div>
              </div>
              <div className="left">
                <button className={`${themeColor} bg-primary-gradiant`}>
                  اضف عرضك
                  <BiPlus />
                </button>
                <BiMenuAltLeft
                  onClick={() => setReport(!report)}
                  className={`${themeColor} text-current`}
                />
                {report && (
                  <div className="report">
                    <span>تبليغ عن محتوى</span>
                  </div>
                )}
              </div>
            </div>
            <div className="bottom">
              <p className="fw-500 text-grey-600 lh-26 font-xsss w-100 mb-2">
                السلام عليكم احتاج شخص لديه معرفه فى operting system بشكل جيد
                للمساعده فى بعض المشاكل
              </p>
            </div>
          </div>
        </Link>
        <Link to="/contact/1">
          <div className="box card d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3">
            <div className="top">
              <div className="right">
                <h4 className="fw-700 font-xsss mt-3 mb-1">
                  مساعده فى operating system
                </h4>
                <div className="date">
                  <span className="fw-500 font-xssss text-grey-500 mt-0 mb-3">
                    mohamed ali
                  </span>
                  <span className="fw-500 font-xssss text-grey-500 mt-0 mb-3">
                    منذ دقيقه
                  </span>
                  <span className="fw-500 font-xssss text-grey-500 mt-0 mb-3">
                    اضف اول عرض
                  </span>
                </div>
              </div>
              <div className="left">
                <button className={`${themeColor} bg-primary-gradiant`}>
                  اضف عرضك
                  <BiPlus />
                </button>
                <BiMenuAltLeft
                  onClick={() => setReport(!report)}
                  className={`${themeColor} text-current`}
                />
                {report && (
                  <div className="report">
                    <span>تبليغ عن محتوى</span>
                  </div>
                )}
              </div>
            </div>
            <div className="bottom">
              <p className="fw-500 text-grey-600 lh-26 font-xsss w-100 mb-2">
                السلام عليكم احتاج شخص لديه معرفه فى operting system بشكل جيد
                للمساعده فى بعض المشاكل
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ContentRequests;
