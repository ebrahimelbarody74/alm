import React from "react";
import "./SideBarLeft.scss";
import img from "../../assets/images/325100930_23852874196000773_2622244091878946588_n.png";
import team from "../../assets/img/team-1.jpg";
import kal from "../../assets/img/kal-visuals-square.jpg";
import { Link } from "react-router-dom";
import { HiPlus } from "react-icons/hi";
function SideBarLeft({ themeColor, setThemecolor, activeLeftBar }) {
  return (
    <>
      <div className="col-xl-4 col-xxl-4 col-lg-4 pe-lg-0 mt-3 right-scroll-bar right-chat active-sidebar sidebar-left">
        <div class="middle-sidebar-right-content bg-white shadow-xss rounded-xxl ps-2 pe-2 ">
          <div className="section full ps-2 pe-2 pt-4 position-relative feed-body">
            <h4 className="font-xsssss text-grey-500 text-uppercase fw-700 ls-3">
              CONTACTS
            </h4>
            <ul className="list-group list-group-flush">
              <li className="bg-transparent list-group-item no-icon ps-0 pe-0 pt-2 pb-2 border-0 d-flex align-items-center">
                <figure className="avatar float-left mb-0 ms-2">
                  <img src={img} alt="image" className="w35" />
                </figure>
                <h3 className="fw-700 mb-0 mt-0">
                  <a
                    className="font-xssss text-grey-600 d-block text-dark model-popup-chat"
                    href="#"
                  >
                    Hurin Seary
                  </a>
                </h3>
                <span className="badge badge-primary text-white badge-pill fw-500 mt-0">
                  2
                </span>
              </li>
              <li className="bg-transparent list-group-item no-icon ps-0 pe-0 pt-2 pb-2 border-0 d-flex align-items-center">
                <figure className="avatar float-left mb-0 ms-2">
                  <img src={img} alt="image" className="w35" />
                </figure>
                <h3 className="fw-700 mb-0 mt-0">
                  <a
                    className="font-xssss text-grey-600 d-block text-dark model-popup-chat"
                    href="#"
                  >
                    Victor Exrixon
                  </a>
                </h3>
                <span className="bg-success me-auto btn-round-xss" />
              </li>
              <li className="bg-transparent list-group-item no-icon ps-0 pe-0 pt-2 pb-2 border-0 d-flex align-items-center">
                <figure className="avatar float-left mb-0 ms-2">
                  <img src={img} alt="image" className="w35" />
                </figure>
                <h3 className="fw-700 mb-0 mt-0">
                  <a
                    className="font-xssss text-grey-600 d-block text-dark model-popup-chat"
                    href="#"
                  >
                    Surfiya Zakir
                  </a>
                </h3>
                <span className="bg-warning me-auto btn-round-xss" />
              </li>
              <li className="bg-transparent list-group-item no-icon ps-0 pe-0 pt-2 pb-2 border-0 d-flex align-items-center">
                <figure className="avatar float-left mb-0 ms-2">
                  <img src={img} alt="image" className="w35" />
                </figure>
                <h3 className="fw-700 mb-0 mt-0">
                  <a
                    className="font-xssss text-grey-600 d-block text-dark model-popup-chat"
                    href="#"
                  >
                    Goria Coast
                  </a>
                </h3>
                <span className="bg-success me-auto btn-round-xss" />
              </li>
              <li className="bg-transparent list-group-item no-icon ps-0 pe-0 pt-2 pb-2 border-0 d-flex align-items-center">
                <figure className="avatar float-left mb-0 ms-2">
                  <img src={img} alt="image" className="w35" />
                </figure>
                <h3 className="fw-700 mb-0 mt-0">
                  <a
                    className="font-xssss text-grey-600 d-block text-dark model-popup-chat"
                    href="#"
                  >
                    Hurin Seary
                  </a>
                </h3>
                <span className="badge mt-0 text-grey-500 badge-pill ps-0 font-xsssss">
                  4:09 pm
                </span>
              </li>
              <li className="bg-transparent list-group-item no-icon ps-0 pe-0 pt-2 pb-2 border-0 d-flex align-items-center">
                <figure className="avatar float-left mb-0 ms-2">
                  <img src={img} alt="image" className="w35" />
                </figure>
                <h3 className="fw-700 mb-0 mt-0">
                  <a
                    className="font-xssss text-grey-600 d-block text-dark model-popup-chat"
                    href="#"
                  >
                    David Goria
                  </a>
                </h3>
                <span className="badge mt-0 text-grey-500 badge-pill ps-0 font-xsssss">
                  2 days
                </span>
              </li>
              <li className="bg-transparent list-group-item no-icon ps-0 pe-0 pt-2 pb-2 border-0 d-flex align-items-center">
                <figure className="avatar float-left mb-0 ms-2">
                  <img src={img} alt="image" className="w35" />
                </figure>
                <h3 className="fw-700 mb-0 mt-0">
                  <a
                    className="font-xssss text-grey-600 d-block text-dark model-popup-chat"
                    href="#"
                  >
                    Seary Victor
                  </a>
                </h3>
                <span className="bg-success me-auto btn-round-xss" />
              </li>
              <li className="bg-transparent list-group-item no-icon ps-0 pe-0 pt-2 pb-2 border-0 d-flex align-items-center">
                <figure className="avatar float-left mb-0 ms-2">
                  <img src={img} alt="image" className="w35" />
                </figure>
                <h3 className="fw-700 mb-0 mt-0">
                  <a
                    className="font-xssss text-grey-600 d-block text-dark model-popup-chat"
                    href="#"
                  >
                    Ana Seary
                  </a>
                </h3>
                <span className="bg-success me-auto btn-round-xss" />
              </li>
            </ul>
          </div>
          <div className="section full ps-3   position-relative feed-body">
            <div className="card-body d-flex align-items-center p-4">
              <h4 className="fw-700 mb-0 font-xssss text-grey-900">
                Friend Request
              </h4>
              <a
                href="default-member.html"
                className="fw-600 me-auto font-xssss text-primary"
              >
                See all
              </a>
            </div>
            <div className="card-body d-flex pt-4 pe-4 ps-4 pb-0 border-top-xs bor-0">
              <figure className="avatar ms-3">
                <img
                  src={img}
                  alt="image"
                  className="shadow-sm rounded-circle w45"
                />
              </figure>
              <h4 className="fw-700 text-grey-900 font-xssss mt-1">
                Anthony Daugloi{" "}
                <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">
                  12 mutual friends
                </span>
              </h4>
            </div>
            <div className="card-body d-flex align-items-center pt-0 pe-4 ps-4 pb-4">
              <a
                href="#"
                className={`p-2 lh-20 w100 bg-primary-gradiant ms-2 text-white text-center font-xssss fw-600 ls-1 rounded-xl ${themeColor}`}
              >
                Confirm
              </a>
              <a
                href="#"
                className="p-2 lh-20 w100 bg-grey text-grey-800 text-center font-xssss fw-600 ls-1 rounded-xl"
              >
                Delete
              </a>
            </div>
            <div className="card-body d-flex pt-0 pe-4 ps-4 pb-0">
              <figure className="avatar ms-3">
                <img
                  src={img}
                  alt="image"
                  className="shadow-sm rounded-circle w45"
                />
              </figure>
              <h4 className="fw-700 text-grey-900 font-xssss mt-1">
                Mohannad Zitoun{" "}
                <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">
                  12 mutual friends
                </span>
              </h4>
            </div>
            <div className="card-body d-flex align-items-center pt-0 pe-4 ps-4 pb-4">
              <a
                href="#"
                className={`p-2 lh-20 w100 bg-primary-gradiant ms-2 text-white text-center font-xssss fw-600 ls-1 rounded-xl ${themeColor}`}
              >
                Confirm
              </a>
              <a
                href="#"
                className="p-2 lh-20 w100 bg-grey text-grey-800 text-center font-xssss fw-600 ls-1 rounded-xl"
              >
                Delete
              </a>
            </div>
            <div className="card-body d-flex pt-0 pe-4 ps-4 pb-0">
              <figure className="avatar ms-3">
                <img
                  src={img}
                  alt="image"
                  className="shadow-sm rounded-circle w45"
                />
              </figure>
              <h4 className="fw-700 text-grey-900 font-xssss mt-1">
                Mohannad Zitoun{" "}
                <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">
                  12 mutual friends
                </span>
              </h4>
            </div>
            <div className="card-body d-flex align-items-center pt-0 pe-4 ps-4 pb-4">
              <a
                href="#"
                className={`p-2 lh-20 w100 bg-primary-gradiant ms-2 text-white text-center font-xssss fw-600 ls-1 rounded-xl ${themeColor}`}
              >
                Confirm
              </a>
              <a
                href="#"
                className="p-2 lh-20 w100 bg-grey text-grey-800 text-center font-xssss fw-600 ls-1 rounded-xl"
              >
                Delete
              </a>
            </div>
          </div>
          <div className="section full ps-0   position-relative feed-body pb-3">
            <div className="card-body d-flex align-items-center p-3 mb-0">
              <h4 className="fw-700 mb-0 font-xssss text-grey-900">
                Confirm Friend
              </h4>
              <Link
                to="/frindes-page"
                className="fw-600 me-auto font-xssss text-primary"
              >
                See all
              </Link>
            </div>
            <div className="card-body  rounded-3 mb-2 bg-transparent-card   w-100 pe-1 ps-1 pb-4 d-flex text-center  justify-content-between align-items-center">
              <div className="d-flex  align-items-center gap-1 w-30">
                <figure className="avatar me-auto ms-auto mb-0 position-relative w45 z-index-1">
                  <img
                    src={img}
                    alt="image"
                    className="float-right p-0 bg-white rounded-circle w-100 shadow-xss"
                  />
                </figure>
                <div className="">
                  <h4 className="fw-700 font-xssss mt-1 mb-1">
                    Surfiya Zakir{" "}
                  </h4>
                  <p className="fw-500 font-xsssss  text-grey-500 mt-0 mb-0">
                    @macale343
                  </p>
                </div>
              </div>
              <a
                href="#"
                className={`p-2 lh-20 d-flex w100 bg-primary-gradiant  text-white text-center justify-content-between align-items-center font-xsssss fw-700  rounded-xl ${themeColor}`}
              >
                ADD FRIEND
                <HiPlus className="font-xss"/>
              </a>
            </div>
            <div className="card-body  rounded-3 mb-2 bg-transparent-card   w-100 pe-1 ps-1 pb-4 d-flex text-center  justify-content-between align-items-center">
              <div className="d-flex  align-items-center gap-1 w-30">
                <figure className="avatar me-auto ms-auto mb-0 position-relative w45 z-index-1">
                  <img
                    src={img}
                    alt="image"
                    className="float-right p-0 bg-white rounded-circle w-100 shadow-xss"
                  />
                </figure>
                <div className="">
                  <h4 className="fw-700 font-xssss mt-1 mb-1">
                    Surfiya Zakir{" "}
                  </h4>
                  <p className="fw-500 font-xsssss  text-grey-500 mt-0 mb-0">
                    @macale343
                  </p>
                </div>
              </div>
              <a
                href="#"
                className={`p-2 lh-20 d-flex w100 bg-primary-gradiant  text-white text-center justify-content-between align-items-center font-xsssss fw-700  rounded-xl ${themeColor}`}
              >
                ADD FRIEND
                <HiPlus className="font-xss"/>
              </a>
            </div>
            <div className="card-body  rounded-3 mb-2 bg-transparent-card   w-100 pe-1 ps-1 pb-4 d-flex text-center  justify-content-between align-items-center">
              <div className="d-flex  align-items-center gap-1 w-30">
                <figure className="avatar me-auto ms-auto mb-0 position-relative w45 z-index-1">
                  <img
                    src={img}
                    alt="image"
                    className="float-right p-0 bg-white rounded-circle w-100 shadow-xss"
                  />
                </figure>
                <div className="">
                  <h4 className="fw-700 font-xssss mt-1 mb-1">
                    Surfiya Zakir{" "}
                  </h4>
                  <p className="fw-500 font-xsssss  text-grey-500 mt-0 mb-0">
                    @macale343
                  </p>
                </div>
              </div>
              <a
                href="#"
                className={`p-2 lh-20 d-flex w100 bg-primary-gradiant  text-white text-center justify-content-between align-items-center font-xsssss fw-700  rounded-xl ${themeColor}`}
              >
                ADD FRIEND
                <HiPlus className="font-xss"/>
              </a>
            </div>
            <div className="card-body  rounded-3 mb-2 bg-transparent-card   w-100 pe-1 ps-1 pb-4 d-flex text-center  justify-content-between align-items-center">
              <div className="d-flex  align-items-center gap-1 w-30">
                <figure className="avatar me-auto ms-auto mb-0 position-relative w45 z-index-1">
                  <img
                    src={img}
                    alt="image"
                    className="float-right p-0 bg-white rounded-circle w-100 shadow-xss"
                  />
                </figure>
                <div className="">
                  <h4 className="fw-700 font-xssss mt-1 mb-1">
                    Surfiya Zakir{" "}
                  </h4>
                  <p className="fw-500 font-xsssss  text-grey-500 mt-0 mb-0">
                    @macale343
                  </p>
                </div>
              </div>
              <a
                href="#"
                className={`p-2 lh-20 d-flex w100 bg-primary-gradiant  text-white text-center justify-content-between align-items-center font-xsssss fw-700  rounded-xl ${themeColor}`}
              >
                ADD FRIEND
                <HiPlus className="font-xss"/>
              </a>
            </div>
          </div>
        </div>
      </div>

      {
        <div
          className={
            activeLeftBar
              ? `right-chat nav-wrap mt-2 right-scroll-bar active-sidebar-mobile`
              : "right-chat nav-wrap mt-2 right-scroll-bar"
          }
        >
          <div className="middle-sidebar-right-content bg-white shadow-xss rounded-xxl">
            <div className="preloader-wrap p-3" style={{ display: "none" }}>
              <div className="box shimmer">
                <div className="lines">
                  <div className="line s_shimmer" />
                  <div className="line s_shimmer" />
                  <div className="line s_shimmer" />
                  <div className="line s_shimmer" />
                </div>
              </div>
              <div className="box shimmer mb-3">
                <div className="lines">
                  <div className="line s_shimmer" />
                  <div className="line s_shimmer" />
                  <div className="line s_shimmer" />
                  <div className="line s_shimmer" />
                </div>
              </div>
              <div className="box shimmer">
                <div className="lines">
                  <div className="line s_shimmer" />
                  <div className="line s_shimmer" />
                  <div className="line s_shimmer" />
                  <div className="line s_shimmer" />
                </div>
              </div>
            </div>
            {/* loader wrapper */}
            <div className="section full ps-2 pe-2 pt-4 position-relative feed-body">
              <h4 className="font-xsssss text-grey-500 text-uppercase fw-700 ls-3">
                CONTACTS
              </h4>
              <ul className="list-group list-group-flush">
                <li className="bg-transparent list-group-item no-icon ps-0 pe-0 pt-2 pb-2 border-0 d-flex align-items-center">
                  <figure className="avatar float-left mb-0 ms-2">
                    <img src={img} alt="image" className="w35" />
                  </figure>
                  <h3 className="fw-700 mb-0 mt-0">
                    <a
                      className="font-xssss text-grey-600 d-block text-dark model-popup-chat"
                      href="#"
                    >
                      Hurin Seary
                    </a>
                  </h3>
                  <span className="badge badge-primary text-white badge-pill fw-500 mt-0">
                    2
                  </span>
                </li>
                <li className="bg-transparent list-group-item no-icon ps-0 pe-0 pt-2 pb-2 border-0 d-flex align-items-center">
                  <figure className="avatar float-left mb-0 ms-2">
                    <img src={img} alt="image" className="w35" />
                  </figure>
                  <h3 className="fw-700 mb-0 mt-0">
                    <a
                      className="font-xssss text-grey-600 d-block text-dark model-popup-chat"
                      href="#"
                    >
                      Victor Exrixon
                    </a>
                  </h3>
                  <span className="bg-success me-auto btn-round-xss" />
                </li>
                <li className="bg-transparent list-group-item no-icon ps-0 pe-0 pt-2 pb-2 border-0 d-flex align-items-center">
                  <figure className="avatar float-left mb-0 ms-2">
                    <img src={img} alt="image" className="w35" />
                  </figure>
                  <h3 className="fw-700 mb-0 mt-0">
                    <a
                      className="font-xssss text-grey-600 d-block text-dark model-popup-chat"
                      href="#"
                    >
                      Surfiya Zakir
                    </a>
                  </h3>
                  <span className="bg-warning me-auto btn-round-xss" />
                </li>
                <li className="bg-transparent list-group-item no-icon ps-0 pe-0 pt-2 pb-2 border-0 d-flex align-items-center">
                  <figure className="avatar float-left mb-0 ms-2">
                    <img src={img} alt="image" className="w35" />
                  </figure>
                  <h3 className="fw-700 mb-0 mt-0">
                    <a
                      className="font-xssss text-grey-600 d-block text-dark model-popup-chat"
                      href="#"
                    >
                      Goria Coast
                    </a>
                  </h3>
                  <span className="bg-success me-auto btn-round-xss" />
                </li>
                <li className="bg-transparent list-group-item no-icon ps-0 pe-0 pt-2 pb-2 border-0 d-flex align-items-center">
                  <figure className="avatar float-left mb-0 ms-2">
                    <img src={img} alt="image" className="w35" />
                  </figure>
                  <h3 className="fw-700 mb-0 mt-0">
                    <a
                      className="font-xssss text-grey-600 d-block text-dark model-popup-chat"
                      href="#"
                    >
                      Hurin Seary
                    </a>
                  </h3>
                  <span className="badge mt-0 text-grey-500 badge-pill ps-0 font-xsssss">
                    4:09 pm
                  </span>
                </li>
                <li className="bg-transparent list-group-item no-icon ps-0 pe-0 pt-2 pb-2 border-0 d-flex align-items-center">
                  <figure className="avatar float-left mb-0 ms-2">
                    <img src={img} alt="image" className="w35" />
                  </figure>
                  <h3 className="fw-700 mb-0 mt-0">
                    <a
                      className="font-xssss text-grey-600 d-block text-dark model-popup-chat"
                      href="#"
                    >
                      David Goria
                    </a>
                  </h3>
                  <span className="badge mt-0 text-grey-500 badge-pill ps-0 font-xsssss">
                    2 days
                  </span>
                </li>
                <li className="bg-transparent list-group-item no-icon ps-0 pe-0 pt-2 pb-2 border-0 d-flex align-items-center">
                  <figure className="avatar float-left mb-0 ms-2">
                    <img src={img} alt="image" className="w35" />
                  </figure>
                  <h3 className="fw-700 mb-0 mt-0">
                    <a
                      className="font-xssss text-grey-600 d-block text-dark model-popup-chat"
                      href="#"
                    >
                      Seary Victor
                    </a>
                  </h3>
                  <span className="bg-success me-auto btn-round-xss" />
                </li>
                <li className="bg-transparent list-group-item no-icon ps-0 pe-0 pt-2 pb-2 border-0 d-flex align-items-center">
                  <figure className="avatar float-left mb-0 ms-2">
                    <img src={img} alt="image" className="w35" />
                  </figure>
                  <h3 className="fw-700 mb-0 mt-0">
                    <a
                      className="font-xssss text-grey-600 d-block text-dark model-popup-chat"
                      href="#"
                    >
                      Ana Seary
                    </a>
                  </h3>
                  <span className="bg-success me-auto btn-round-xss" />
                </li>
              </ul>
            </div>
            <div className="section full ps-3   position-relative feed-body">
              <div className="card-body d-flex align-items-center p-4">
                <h4 className="fw-700 mb-0 font-xssss text-grey-900">
                  Friend Request
                </h4>
                <a
                  href="default-member.html"
                  className="fw-600 me-auto font-xssss text-primary"
                >
                  See all
                </a>
              </div>
              <div className="card-body d-flex pt-4 pe-4 ps-4 pb-0 border-top-xs bor-0">
                <figure className="avatar ms-3">
                  <img
                    src={img}
                    alt="image"
                    className="shadow-sm rounded-circle w45"
                  />
                </figure>
                <h4 className="fw-700 text-grey-900 font-xssss mt-1">
                  Anthony Daugloi{" "}
                  <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">
                    12 mutual friends
                  </span>
                </h4>
              </div>
              <div className="card-body d-flex align-items-center pt-0 pe-4 ps-4 pb-4">
                <a
                  href="#"
                  className={`p-2 lh-20 w100 bg-primary-gradiant ms-2 text-white text-center font-xssss fw-600 ls-1 rounded-xl ${themeColor}`}
                >
                  Confirm
                </a>
                <a
                  href="#"
                  className="p-2 lh-20 w100 bg-grey text-grey-800 text-center font-xssss fw-600 ls-1 rounded-xl"
                >
                  Delete
                </a>
              </div>
              <div className="card-body d-flex pt-0 pe-4 ps-4 pb-0">
                <figure className="avatar ms-3">
                  <img
                    src={img}
                    alt="image"
                    className="shadow-sm rounded-circle w45"
                  />
                </figure>
                <h4 className="fw-700 text-grey-900 font-xssss mt-1">
                  Mohannad Zitoun{" "}
                  <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">
                    12 mutual friends
                  </span>
                </h4>
              </div>
              <div className="card-body d-flex align-items-center pt-0 pe-4 ps-4 pb-4">
                <a
                  href="#"
                  className={`p-2 lh-20 w100 bg-primary-gradiant ms-2 text-white text-center font-xssss fw-600 ls-1 rounded-xl ${themeColor}`}
                >
                  Confirm
                </a>
                <a
                  href="#"
                  className="p-2 lh-20 w100 bg-grey text-grey-800 text-center font-xssss fw-600 ls-1 rounded-xl"
                >
                  Delete
                </a>
              </div>
              <div className="card-body d-flex pt-0 pe-4 ps-4 pb-0">
                <figure className="avatar ms-3">
                  <img
                    src={img}
                    alt="image"
                    className="shadow-sm rounded-circle w45"
                  />
                </figure>
                <h4 className="fw-700 text-grey-900 font-xssss mt-1">
                  Mohannad Zitoun{" "}
                  <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">
                    12 mutual friends
                  </span>
                </h4>
              </div>
              <div className="card-body d-flex align-items-center pt-0 pe-4 ps-4 pb-4">
                <a
                  href="#"
                  className={`p-2 lh-20 w100 bg-primary-gradiant ms-2 text-white text-center font-xssss fw-600 ls-1 rounded-xl ${themeColor}`}
                >
                  Confirm
                </a>
                <a
                  href="#"
                  className="p-2 lh-20 w100 bg-grey text-grey-800 text-center font-xssss fw-600 ls-1 rounded-xl"
                >
                  Delete
                </a>
              </div>
            </div>
            <div className="section full ps-0   position-relative feed-body pb-3">
              <div className="card-body d-flex align-items-center p-3 mb-0">
                <h4 className="fw-700 mb-0 font-xssss text-grey-900">
                  Confirm Friend
                </h4>
                <Link
                  to="/frindes-page"
                  className="fw-600 me-auto font-xssss text-primary"
                >
                  See all
                </Link>
              </div>
              <div className="card-body  rounded-3 mb-2 bg-transparent-card   w-100 pe-1 ps-1 pb-4 d-flex text-center  justify-content-between align-items-center">
              <div className="d-flex  align-items-center gap-1 w-30">
                <figure className="avatar me-auto ms-auto mb-0 position-relative w45 z-index-1">
                  <img
                    src={img}
                    alt="image"
                    className="float-right p-0 bg-white rounded-circle w-100 shadow-xss"
                  />
                </figure>
                <div className="">
                  <h4 className="fw-700 font-xssss mt-1 mb-1">
                    Surfiya Zakir{" "}
                  </h4>
                  <p className="fw-500 font-xsssss  text-grey-500 mt-0 mb-0">
                    @macale343
                  </p>
                </div>
              </div>
              <a
                href="#"
                className={`p-2 lh-20 d-flex w100 bg-primary-gradiant  text-white text-center justify-content-between align-items-center font-xsssss fw-700  rounded-xl ${themeColor}`}
              >
                ADD FRIEND
                <HiPlus className="font-xss"/>
              </a>
            </div>
              <div className="card-body  rounded-3 mb-2 bg-transparent-card   w-100 pe-1 ps-1 pb-4 d-flex text-center  justify-content-between align-items-center">
              <div className="d-flex  align-items-center gap-1 w-30">
                <figure className="avatar me-auto ms-auto mb-0 position-relative w45 z-index-1">
                  <img
                    src={img}
                    alt="image"
                    className="float-right p-0 bg-white rounded-circle w-100 shadow-xss"
                  />
                </figure>
                <div className="">
                  <h4 className="fw-700 font-xssss mt-1 mb-1">
                    Surfiya Zakir{" "}
                  </h4>
                  <p className="fw-500 font-xsssss  text-grey-500 mt-0 mb-0">
                    @macale343
                  </p>
                </div>
              </div>
              <a
                href="#"
                className={`p-2 lh-20 d-flex w100 bg-primary-gradiant  text-white text-center justify-content-between align-items-center font-xsssss fw-700  rounded-xl ${themeColor}`}
              >
                ADD FRIEND
                <HiPlus className="font-xss"/>
              </a>
            </div>
              <div className="card-body  rounded-3 mb-2 bg-transparent-card   w-100 pe-1 ps-1 pb-4 d-flex text-center  justify-content-between align-items-center">
              <div className="d-flex  align-items-center gap-1 w-30">
                <figure className="avatar me-auto ms-auto mb-0 position-relative w45 z-index-1">
                  <img
                    src={img}
                    alt="image"
                    className="float-right p-0 bg-white rounded-circle w-100 shadow-xss"
                  />
                </figure>
                <div className="">
                  <h4 className="fw-700 font-xssss mt-1 mb-1">
                    Surfiya Zakir{" "}
                  </h4>
                  <p className="fw-500 font-xsssss  text-grey-500 mt-0 mb-0">
                    @macale343
                  </p>
                </div>
              </div>
              <a
                href="#"
                className={`p-2 lh-20 d-flex w100 bg-primary-gradiant  text-white text-center justify-content-between align-items-center font-xsssss fw-700  rounded-xl ${themeColor}`}
              >
                ADD FRIEND
                <HiPlus className="font-xss"/>
              </a>
            </div>
              <div className="card-body  rounded-3 mb-2 bg-transparent-card   w-100 pe-1 ps-1 pb-4 d-flex text-center  justify-content-between align-items-center">
              <div className="d-flex  align-items-center gap-1 w-30">
                <figure className="avatar me-auto ms-auto mb-0 position-relative w45 z-index-1">
                  <img
                    src={img}
                    alt="image"
                    className="float-right p-0 bg-white rounded-circle w-100 shadow-xss"
                  />
                </figure>
                <div className="">
                  <h4 className="fw-700 font-xssss mt-1 mb-1">
                    Surfiya Zakir{" "}
                  </h4>
                  <p className="fw-500 font-xsssss  text-grey-500 mt-0 mb-0">
                    @macale343
                  </p>
                </div>
              </div>
              <a
                href="#"
                className={`p-2 lh-20 d-flex w100 bg-primary-gradiant  text-white text-center justify-content-between align-items-center font-xsssss fw-700  rounded-xl ${themeColor}`}
              >
                ADD FRIEND
                <HiPlus className="font-xss"/>
              </a>
            </div>
            </div>
          </div>
        </div>
      }
    </>
  );
}

export default SideBarLeft;
