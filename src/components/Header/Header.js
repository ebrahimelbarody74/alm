import React, { useEffect, useState } from "react";
import { BsFacebook, BsMessenger } from "react-icons/bs";
import {
  AiOutlineSearch,
  AiFillHome,
  AiOutlineArrowDown,
  AiOutlineUser,
} from "react-icons/ai";

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import "./Header.scss";
import { BiHome } from "react-icons/bi";
import { FiZap, FiMessageSquare, FiSettings } from "react-icons/fi";
import { GiOpenBook } from "react-icons/gi";
import { CiVideoOn } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineWorkOutline } from "react-icons/md";
import img from "../../assets/images/site_images/sm-logo.png";
import img2 from "../../assets/img/drake.jpg";

function Header({
  setActive,
  active,
  activeRightbar,
  setActiveRightbar,
  home,
  activeSearch,
  setActiveSearch,
  themeColor,
  setThemecolor,
  setActiveDark,
  activeDark,
  menuAuctive,
  setMenuActive,
  activeLeftBar,
  setActiveLeftBar,
}) {
  //  const dark = useSelector((state) => state.dark.dark);
  const [search, setSearch] = useState("");
  const [person, setPerson] = useState([]);
  const [modalOpened, setModalOpened] = useState(false);
  const [showDrop, setShowDrop] = useState(false);
  const [switchcolor, setSwitchcolor] = useState(false);
  const Navigate = useNavigate();

  return (
    <div className="nav-header bg-white shadow-xs border-0 ">
      <div className="nav-top">
        <Link to={"/home"}>
          <span className="d-inline-block fredoka-font ls-3 fw-600 text-current font-xxl logo-text mb-0">
            <img src={img} className="logo" />
          </span>{" "}
        </Link>

        <a href="#" className=" mob-menu me-auto ms-2 chat-active-btn">
          <div
            className="font-sm btn-round-md bg-greylight"
            onClick={() => setActiveLeftBar(!activeLeftBar)}
          >
            <FiMessageSquare
              className={` d-inline-block font-xl text-current  ${themeColor}`}
            />
          </div>
        </a>
        <a href="#" className=" menu-search-icon mob-menu">
          <div
            className="font-sm btn-round-md bg-greylight"
            onClick={() => setActive("Video")}
          >
            <CiVideoOn
              className={` d-inline-block font-xl text-current  ${themeColor}`}
            />
          </div>
        </a>
        <a href="#" className="mob-menu me-2 menu-search-icon mob-menu">
          <div
            className="font-sm btn-round-md bg-greylight"
            onClick={() => setSwitchcolor(!switchcolor)}
          >
            <FiSettings
              className={`animation-spin d-inline-block font-xl text-current  ${themeColor}`}
            />
            <div
              style={{ top: "60px" }}
              className={
                switchcolor
                  ? "dropdown-menu-settings switchcolor-wrap active mobile"
                  : "dropdown-menu-settings switchcolor-wrap mobile"
              }
            >
              <h4 className="fw-700 font-sm mb-4">Settings</h4>
              <h6 className="font-xssss text-grey-500 fw-700 mb-3 d-block">
                Choose Color Theme
              </h6>
              <ul>
                <li>
                  <label className="item-radio item-content">
                    <input
                      type="radio"
                      name="color-radio"
                      defaultValue="red"
                      defaultChecked
                    />
                    <i className="ti-check" />
                    <span
                      className="circle-color bg-red"
                      onClick={() => {
                        setThemecolor("color-theme-red");
                        localStorage.setItem("themeColor", "color-theme-red");
                      }}
                      style={{ backgroundColor: "#ff3b30" }}
                    />
                  </label>
                </li>
                <li>
                  <label className="item-radio item-content">
                    <input
                      type="radio"
                      name="color-radio"
                      defaultValue="green"
                    />
                    <i className="ti-check" />
                    <span
                      className="circle-color bg-green"
                      onClick={() => {
                        setThemecolor("color-theme-green");
                        localStorage.setItem("themeColor", "color-theme-green");
                      }}
                      style={{ backgroundColor: "#4cd964" }}
                    />
                  </label>
                </li>
                <li>
                  <label className="item-radio item-content">
                    <input
                      type="radio"
                      name="color-radio"
                      defaultValue="blue"
                      defaultChecked
                    />
                    <i className="ti-check" />
                    <span
                      className="circle-color bg-blue"
                      onClick={() => {
                        setThemecolor("color-theme-blue");
                        localStorage.setItem("themeColor", "color-theme-blue");
                      }}
                      style={{ backgroundColor: "#132977" }}
                    />
                  </label>
                </li>
                <li>
                  <label className="item-radio item-content">
                    <input
                      type="radio"
                      name="color-radio"
                      defaultValue="pink"
                    />
                    <i className="ti-check" />
                    <span
                      className="circle-color bg-pink"
                      onClick={() => {
                        setThemecolor("color-theme-pink");
                        localStorage.setItem("themeColor", "color-theme-pink");
                      }}
                      style={{ backgroundColor: "#ff2d55" }}
                    />
                  </label>
                </li>
                <li>
                  <label className="item-radio item-content">
                    <input
                      type="radio"
                      name="color-radio"
                      defaultValue="yellow"
                    />
                    <i className="ti-check" />
                    <span
                      className="circle-color bg-yellow"
                      onClick={() => {
                        setThemecolor("color-theme-yellow");
                        localStorage.setItem(
                          "themeColor",
                          "color-theme-yellow"
                        );
                      }}
                      style={{ backgroundColor: "#ffcc00" }}
                    />
                  </label>
                </li>
                <li>
                  <label className="item-radio item-content">
                    <input
                      type="radio"
                      name="color-radio"
                      defaultValue="orange"
                    />
                    <i className="ti-check" />
                    <span
                      className="circle-color bg-orange"
                      onClick={() => {
                        {
                          setThemecolor("color-theme-orange");
                          localStorage.setItem(
                            "themeColor",
                            "color-theme-orange"
                          );
                        }
                      }}
                      style={{ backgroundColor: "#ff9500" }}
                    />
                  </label>
                </li>
                <li>
                  <label className="item-radio item-content">
                    <input
                      type="radio"
                      name="color-radio"
                      defaultValue="gray"
                    />
                    <i className="ti-check" />
                    <span
                      className="circle-color bg-gray"
                      onClick={() => setThemecolor("color-theme-gray")}
                      style={{ backgroundColor: "#8e8e93" }}
                    />
                  </label>
                </li>
                <li>
                  <label className="item-radio item-content">
                    <input
                      type="radio"
                      name="color-radio"
                      defaultValue="brown"
                    />
                    <i className="ti-check" />
                    <span
                      className="circle-color bg-brown"
                      onClick={() => {
                        setThemecolor("color-theme-brown");
                        localStorage.setItem("themeColor", "color-theme-brown");
                      }}
                      style={{ backgroundColor: "#D2691E" }}
                    />
                  </label>
                </li>
                <li>
                  <label className="item-radio item-content">
                    <input
                      type="radio"
                      name="color-radio"
                      defaultValue="darkgreen"
                    />
                    <i className="ti-check" />
                    <span
                      className="circle-color bg-darkgreen"
                      onClick={() => {
                        setThemecolor("color-theme-darkgreen");
                        localStorage.setItem(
                          "themeColor",
                          "color-theme-darkgreen"
                        );
                      }}
                      style={{ backgroundColor: "#228B22" }}
                    />
                  </label>
                </li>
                <li>
                  <label className="item-radio item-content">
                    <input
                      type="radio"
                      name="color-radio"
                      defaultValue="deeppink"
                    />
                    <i className="ti-check" />
                    <span
                      className="circle-color bg-deeppink"
                      onClick={() => {
                        setThemecolor("color-theme-deeppink");
                        localStorage.setItem(
                          "themeColor",
                          "color-theme-deeppink"
                        );
                      }}
                      style={{ backgroundColor: "#FFC0CB" }}
                    />
                  </label>
                </li>
                <li>
                  <label className="item-radio item-content">
                    <input
                      type="radio"
                      name="color-radio"
                      defaultValue="cadetblue"
                    />
                    <i className="ti-check" />
                    <span
                      className="circle-color bg-cadetblue"
                      onClick={() => {
                        setThemecolor("color-theme-cadetblue");
                        localStorage.setItem(
                          "themeColor",
                          "color-theme-cadetblue"
                        );
                      }}
                      style={{ backgroundColor: "#5f9ea0" }}
                    />
                  </label>
                </li>
                <li>
                  <label className="item-radio item-content">
                    <input
                      type="radio"
                      name="color-radio"
                      defaultValue="darkorchid"
                    />
                    <i className="ti-check" />
                    <span
                      className="circle-color bg-darkorchid"
                      onClick={() => {
                        setThemecolor("color-theme-darkorchid");
                        localStorage.setItem(
                          "themeColor",
                          "color-theme-darkorchid"
                        );
                      }}
                      style={{ backgroundColor: "#9932cc" }}
                    />
                  </label>
                </li>
              </ul>
              <div className="card bg-transparent-card border-0 d-block mt-3 text-left">
                <h4 className="d-inline font-xssss mont-font fw-700">
                  Header Background
                </h4>
                <div className="d-inline float-right mt-1">
                  <label className="toggle toggle-menu-color">
                    <input type="checkbox" />
                    <span className="toggle-icon" />
                  </label>
                </div>
              </div>
              <div className="card bg-transparent-card border-0 d-block mt-3 text-left">
                <h4 className="d-inline font-xssss mont-font fw-700">
                  Menu Position
                </h4>
                <div className="d-inline float-right mt-1">
                  <label className="toggle toggle-menu">
                    <input
                      checked={menuAuctive}
                      type="checkbox"
                      onClick={() => {
                        localStorage.setItem("menu-active", !menuAuctive);
                        setMenuActive(!menuAuctive);
                      }}
                    />
                    <span className="toggle-icon" />
                  </label>
                </div>
              </div>
              <div className="card bg-transparent-card border-0 d-block mt-3 text-left">
                <h4 className="d-inline font-xssss mont-font fw-700">
                  Dark Mode
                </h4>
                <div className="d-inline float-right mt-1">
                  <label className="toggle toggle-dark">
                    <input
                      type="checkbox"
                      checked={activeDark === true}
                      onClick={() => {
                        var element = document.querySelector("body");
                        setActiveDark(!activeDark);
                        if (!activeDark) {
                          element.classList.toggle("theme-dark");
                          localStorage.setItem("darkMode", "theme-dark");
                        } else {
                          element.classList.remove("theme-dark");
                          localStorage.setItem("darkMode", "noDark");
                        }
                      }}
                    />
                    <span className="toggle-icon" />
                  </label>
                </div>
              </div>
            </div>
          </div>{" "}
        </a>
        <button
          className={
            activeRightbar ? "nav-menu ms-0 me-2 active" : "nav-menu ms-0 me-2 "
          }
          onClick={() => setActiveRightbar(!activeRightbar)}
        />
      </div>
      <form action="#" className="float-left header-search">
        <div className="form-group mb-0 icon-input">
          <i className="feather-search font-sm text-grey-400" />
          <input
            type="text"
            placeholder="ابحث فى علم .."
            className="bg-grey border-0 lh-32 pt-2 pb-2 pe-5 ps-3 font-xssss fw-500 rounded-xl w350 theme-dark-bg"
          />
        </div>
      </form>
      <a href="#" className="p-2 text-center me-3 menu-icon center-menu-icon">
        <div
          className={
            active == "Home"
              ? "font-lg  btn-round-lg theme-dark-bg text-grey-500 alert-primary"
              : "font-lg  btn-round-lg theme-dark-bg text-grey-500 alert-primary bg-greylight"
          }
          onClick={() => {
            Navigate("/home");
            setActive("Home");
          }}
        >
          <BiHome
            className={
              active == "Home"
                ? `font-lg text-current ${themeColor}`
                : "font-lg "
            }
          />
        </div>
      </a>
      <a href="#" className="p-2 text-center me-0 menu-icon center-menu-icon">
        <div
          className={
            active == "jobs"
              ? "font-lg  btn-round-lg theme-dark-bg text-grey-500 alert-primary"
              : "font-lg  btn-round-lg theme-dark-bg text-grey-500 alert-primary bg-greylight"
          }
          onClick={() => {
            Navigate("/home");
            setActive("jobs");
          }}
        >
          <MdOutlineWorkOutline
            className={
              active == "jobs"
                ? `font-lg text-current ${themeColor}`
                : "font-lg "
            }
          />
        </div>
      </a>
      <a href="#" className="p-2 text-center me-0 menu-icon center-menu-icon">
        <div
          className={
            active == "Video"
              ? "font-lg  btn-round-lg theme-dark-bg text-grey-500 alert-primary"
              : "font-lg  btn-round-lg theme-dark-bg text-grey-500 alert-primary bg-greylight"
          }
          onClick={() => {
            Navigate("/home");
            setActive("Video");
          }}
        >
          <CiVideoOn
            className={
              active == "Video"
                ? `font-lg text-current ${themeColor}`
                : "font-lg "
            }
          />
        </div>{" "}
      </a>
      <Link
        to="/frindes-page"
        className="p-2 text-center me-0 menu-icon center-menu-icon"
      >
        <div
          className={
            active == ""
              ? "font-lg  btn-round-lg theme-dark-bg text-grey-500 alert-primary"
              : "font-lg  btn-round-lg theme-dark-bg text-grey-500 alert-primary bg-greylight"
          }
        >
          <AiOutlineUser
            className={
              active == "" ? `font-lg text-current ${themeColor}` : "font-lg "
            }
          />
        </div>
      </Link>
      <a href="#" className="p-2 text-center me-0 menu-icon center-menu-icon">
        <div
          className={
            active == "article"
              ? "font-lg  btn-round-lg theme-dark-bg text-grey-500 alert-primary"
              : "font-lg  btn-round-lg theme-dark-bg text-grey-500 alert-primary bg-greylight"
          }
          onClick={() => {
            Navigate("/home");
            setActive("article");
          }}
        >
          <GiOpenBook
            className={
              active == "article"
                ? `font-lg text-current ${themeColor}`
                : "font-lg "
            }
          />
        </div>
      </a>
      <a
        href="#"
        className="p-2 text-center me-auto menu-icon"
        id="dropdownMenu3"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <span className="dot-count bg-warning" />
        <IoMdNotificationsOutline
          className={`font-xl text-current ${themeColor}`}
        />
      </a>
      <div
        className="dropdown-menu dropdown-menu-end p-4 rounded-3 border-0 shadow-lg "
        aria-labelledby="dropdownMenu3"
        // style={{
        //   margin: "0px",
        //   position: "absolute",
        //   inset: "0px auto auto 0px",
        //   transform: "translate(161px, 76px)",
        // }}
      >
        <h4 className="fw-700 font-xss mb-4">Notification</h4>
        <div className="card bg-transparent-card w-100 border-0 pe-5 mb-3">
          <img
            src="../images/user-8.png"
            alt="user"
            className="w40 position-absolute right-0"
          />
          <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block text-left">
            Hendrix Stamp{" "}
            <span className="text-grey-400 font-xsssss fw-600 float-right mt-1">
              {" "}
              3 min
            </span>
          </h5>
          <h6 className="text-grey-500 fw-500 font-xssss lh-4">
            There are many variations of pass..
          </h6>
        </div>
        <div className="card bg-transparent-card w-100 border-0 pe-5 mb-3">
          <img
            src="../images/user-4.png"
            alt="user"
            className="w40 position-absolute right-0"
          />
          <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block text-left">
            Goria Coast{" "}
            <span className="text-grey-400 font-xsssss fw-600 float-right mt-1">
              {" "}
              2 min
            </span>
          </h5>
          <h6 className="text-grey-500 fw-500 font-xssss lh-4">
            Mobile Apps UI Designer is require..
          </h6>
        </div>
        <div className="card bg-transparent-card w-100 border-0 pe-5 mb-3">
          <img
            src="../images/user-7.png"
            alt="user"
            className="w40 position-absolute right-0"
          />
          <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block text-left">
            Surfiya Zakir{" "}
            <span className="text-grey-400 font-xsssss fw-600 float-right mt-1">
              {" "}
              1 min
            </span>
          </h5>
          <h6 className="text-grey-500 fw-500 font-xssss lh-4">
            Mobile Apps UI Designer is require..
          </h6>
        </div>
        <div className="card bg-transparent-card w-100 border-0 pe-5">
          <img
            src="../images/user-6.png"
            alt="user"
            className="w40 position-absolute right-0"
          />
          <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block text-left">
            Victor Exrixon{" "}
            <span className="text-grey-400 font-xsssss fw-600 float-right mt-1">
              {" "}
              30 sec
            </span>
          </h5>
          <h6 className="text-grey-500 fw-500 font-xssss lh-4">
            Mobile Apps UI Designer is require..
          </h6>
        </div>
      </div>
      <div
        className="p-2 text-center me-3 menu-icon chat-active-btn"
        onClick={() => setActiveLeftBar(!activeLeftBar)}
      >
        <FiMessageSquare className={`font-xl text-current ${themeColor}`} />
      </div>
      <div
        className="p-2 text-center me-3 position-relative dropdown-menu-icon menu-icon cursor-pointer "
        onClick={() => setSwitchcolor(!switchcolor)}
      >
        <FiSettings
          className={`animation-spin d-inline-block font-xl text-current  ${themeColor}`}
        />
        <div
          className={
            switchcolor
              ? "dropdown-menu-settings switchcolor-wrap active"
              : "dropdown-menu-settings switchcolor-wrap"
          }
        >
          <h4 className="fw-700 font-sm mb-4">Settings</h4>
          <h6 className="font-xssss text-grey-500 fw-700 mb-3 d-block">
            Choose Color Theme
          </h6>
          <ul>
            <li>
              <label className="item-radio item-content">
                <input
                  type="radio"
                  name="color-radio"
                  defaultValue="red"
                  defaultChecked
                />
                <i className="ti-check" />
                <span
                  className="circle-color bg-red"
                  onClick={() => {
                    setThemecolor("color-theme-red");
                    localStorage.setItem("themeColor", "color-theme-red");
                  }}
                  style={{ backgroundColor: "#ff3b30" }}
                />
              </label>
            </li>
            <li>
              <label className="item-radio item-content">
                <input type="radio" name="color-radio" defaultValue="green" />
                <i className="ti-check" />
                <span
                  className="circle-color bg-green"
                  onClick={() => {
                    setThemecolor("color-theme-green");
                    localStorage.setItem("themeColor", "color-theme-green");
                  }}
                  style={{ backgroundColor: "#4cd964" }}
                />
              </label>
            </li>
            <li>
              <label className="item-radio item-content">
                <input
                  type="radio"
                  name="color-radio"
                  defaultValue="blue"
                  defaultChecked
                />
                <i className="ti-check" />
                <span
                  className="circle-color bg-blue"
                  onClick={() => {
                    setThemecolor("color-theme-blue");
                    localStorage.setItem("themeColor", "color-theme-blue");
                  }}
                  style={{ backgroundColor: "#132977" }}
                />
              </label>
            </li>
            <li>
              <label className="item-radio item-content">
                <input type="radio" name="color-radio" defaultValue="pink" />
                <i className="ti-check" />
                <span
                  className="circle-color bg-pink"
                  onClick={() => {
                    setThemecolor("color-theme-pink");
                    localStorage.setItem("themeColor", "color-theme-pink");
                  }}
                  style={{ backgroundColor: "#ff2d55" }}
                />
              </label>
            </li>
            <li>
              <label className="item-radio item-content">
                <input type="radio" name="color-radio" defaultValue="yellow" />
                <i className="ti-check" />
                <span
                  className="circle-color bg-yellow"
                  onClick={() => {
                    setThemecolor("color-theme-yellow");
                    localStorage.setItem("themeColor", "color-theme-yellow");
                  }}
                  style={{ backgroundColor: "#ffcc00" }}
                />
              </label>
            </li>
            <li>
              <label className="item-radio item-content">
                <input type="radio" name="color-radio" defaultValue="orange" />
                <i className="ti-check" />
                <span
                  className="circle-color bg-orange"
                  onClick={() => {
                    {
                      setThemecolor("color-theme-orange");
                      localStorage.setItem("themeColor", "color-theme-orange");
                    }
                  }}
                  style={{ backgroundColor: "#ff9500" }}
                />
              </label>
            </li>
            <li>
              <label className="item-radio item-content">
                <input type="radio" name="color-radio" defaultValue="gray" />
                <i className="ti-check" />
                <span
                  className="circle-color bg-gray"
                  onClick={() => setThemecolor("color-theme-gray")}
                  style={{ backgroundColor: "#8e8e93" }}
                />
              </label>
            </li>
            <li>
              <label className="item-radio item-content">
                <input type="radio" name="color-radio" defaultValue="brown" />
                <i className="ti-check" />
                <span
                  className="circle-color bg-brown"
                  onClick={() => {
                    setThemecolor("color-theme-brown");
                    localStorage.setItem("themeColor", "color-theme-brown");
                  }}
                  style={{ backgroundColor: "#D2691E" }}
                />
              </label>
            </li>
            <li>
              <label className="item-radio item-content">
                <input
                  type="radio"
                  name="color-radio"
                  defaultValue="darkgreen"
                />
                <i className="ti-check" />
                <span
                  className="circle-color bg-darkgreen"
                  onClick={() => {
                    setThemecolor("color-theme-darkgreen");
                    localStorage.setItem("themeColor", "color-theme-darkgreen");
                  }}
                  style={{ backgroundColor: "#228B22" }}
                />
              </label>
            </li>
            <li>
              <label className="item-radio item-content">
                <input
                  type="radio"
                  name="color-radio"
                  defaultValue="deeppink"
                />
                <i className="ti-check" />
                <span
                  className="circle-color bg-deeppink"
                  onClick={() => {
                    setThemecolor("color-theme-deeppink");
                    localStorage.setItem("themeColor", "color-theme-deeppink");
                  }}
                  style={{ backgroundColor: "#FFC0CB" }}
                />
              </label>
            </li>
            <li>
              <label className="item-radio item-content">
                <input
                  type="radio"
                  name="color-radio"
                  defaultValue="cadetblue"
                />
                <i className="ti-check" />
                <span
                  className="circle-color bg-cadetblue"
                  onClick={() => {
                    setThemecolor("color-theme-cadetblue");
                    localStorage.setItem("themeColor", "color-theme-cadetblue");
                  }}
                  style={{ backgroundColor: "#5f9ea0" }}
                />
              </label>
            </li>
            <li>
              <label className="item-radio item-content">
                <input
                  type="radio"
                  name="color-radio"
                  defaultValue="darkorchid"
                />
                <i className="ti-check" />
                <span
                  className="circle-color bg-darkorchid"
                  onClick={() => {
                    setThemecolor("color-theme-darkorchid");
                    localStorage.setItem(
                      "themeColor",
                      "color-theme-darkorchid"
                    );
                  }}
                  style={{ backgroundColor: "#9932cc" }}
                />
              </label>
            </li>
          </ul>
          <div className="card bg-transparent-card border-0 d-block mt-3 text-left">
            <h4 className="d-inline font-xssss mont-font fw-700">
              Header Background
            </h4>
            <div className="d-inline float-right mt-1">
              <label className="toggle toggle-menu-color">
                <input type="checkbox" />
                <span className="toggle-icon" />
              </label>
            </div>
          </div>
          <div className="card bg-transparent-card border-0 d-block mt-3 text-left">
            <h4 className="d-inline font-xssss mont-font fw-700">
              Menu Position
            </h4>
            <div className="d-inline float-right mt-1">
              <label className="toggle toggle-menu">
                <input
                  checked={menuAuctive}
                  type="checkbox"
                  onClick={() => {
                    localStorage.setItem("menu-active", !menuAuctive);
                    setMenuActive(!menuAuctive);
                  }}
                />
                <span className="toggle-icon" />
              </label>
            </div>
          </div>
          <div className="card bg-transparent-card border-0 d-block mt-3 text-left">
            <h4 className="d-inline font-xssss mont-font fw-700">Dark Mode</h4>
            <div className="d-inline float-right mt-1">
              <label className="toggle toggle-dark">
                <input
                  type="checkbox"
                  checked={activeDark === true}
                  onClick={() => {
                    var element = document.querySelector("body");
                    setActiveDark(!activeDark);
                    if (!activeDark) {
                      element.classList.toggle("theme-dark");
                      localStorage.setItem("darkMode", "theme-dark");
                    } else {
                      element.classList.remove("theme-dark");
                      localStorage.setItem("darkMode", "noDark");
                    }
                  }}
                />
                <span className="toggle-icon" />
              </label>
            </div>
          </div>
        </div>
      </div>
      <a href="#" className="p-0 me-3 menu-icon">
        <img src={img2} alt="user" className="w40 mt--1 rounded-circle" />
      </a>
    </div>
  );
}

export default Header;
