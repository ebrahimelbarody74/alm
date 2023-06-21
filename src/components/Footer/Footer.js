import React from 'react'
import { BiHome } from "react-icons/bi";
import { GiOpenBook } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import { CiVideoOn } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineWorkOutline } from "react-icons/md";

function Footer({setActive, active}) {
  const themeColor = localStorage.getItem("themeColor");
    const Navigate = useNavigate();

  return (
    <div
      className={`app-footer border-0 shadow-lg bg-primary-gradiant ${themeColor}`}
    >
      <div className="nav-content-bttn cursor-pointer nav-center">
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
        </div>{" "}
      </div>
      <div className="nav-content-bttn cursor-pointer">
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
      </div>
      <div className="nav-content-bttn cursor-pointer" data-tab="chats">
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
        </div>
      </div>
      <div className="nav-content-bttn cursor-pointer" data-tab="chats">
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
            <FaUsers
              className={
                active == "" ? `font-lg text-current ${themeColor}` : "font-lg "
              }
            />
          </div>
        </Link>
      </div>
      <div className="nav-content-bttn cursor-pointer" data-tab="chats">
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
      </div>
    </div>
  );
}

export default Footer