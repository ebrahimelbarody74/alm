import React from "react";
import "./SidebarRight.scss";
import { AiFillHome } from "react-icons/ai";
import img from "../../assets/img/drake.jpg";
import Watch from "../../assets/svg/tv.svg";
import Store from "../../assets/svg/store.svg";
import Groups from "../../assets/svg/users.svg";
import Play from "../../assets/svg/map.svg";
function SidebarRight({
  setActive,
  active,
  activeRightbar,
  setActiveRightbar,
  menuAuctive,
  setMenuAuctive,
}) {
  return (
    <nav
      className={
        activeRightbar && menuAuctive
          ? "navigation scroll-bar nav-active menu-active"
          : menuAuctive
          ? "navigation scroll-bar menu-active"
          : activeRightbar
          ? "navigation scroll-bar nav-active"
          : "navigation scroll-bar"
      }
    >
      <div className="container pe-0 ps-0">
        <div className="nav-content">
          <div className="nav-wrap bg-white bg-transparent-card rounded-xxl shadow-xss pt-3 pb-1 mb-2 mt-2">
            <div className="nav-caption fw-600 font-xssss text-grey-500">
              <span>New </span>Feeds
            </div>
            <ul className="mb-1 top-content">
              <li className="logo d-none d-xl-block d-lg-block" />
              <li>
                <a href="default.html" className="nav-content-bttn open-font">
                  <i className="feather-tv btn-round-md bg-blue-gradiant ms-3" />
                  <span>Newsfeed</span>
                </a>
              </li>
              <li>
                <a
                  href="default-badge.html"
                  className="nav-content-bttn open-font"
                >
                  <i className="feather-award btn-round-md bg-red-gradiant ms-3" />
                  <span>Badges</span>
                </a>
              </li>
              <li>
                <a
                  href="default-storie.html"
                  className="nav-content-bttn open-font"
                >
                  <i className="feather-globe btn-round-md bg-gold-gradiant ms-3" />
                  <span>Explore Stories</span>
                </a>
              </li>
              <li>
                <a
                  href="default-group.html"
                  className="nav-content-bttn open-font"
                >
                  <i className="feather-zap btn-round-md bg-mini-gradiant ms-3" />
                  <span>Popular Groups</span>
                </a>
              </li>
              <li>
                <a href="user-page.html" className="nav-content-bttn open-font">
                  <i className="feather-user btn-round-md bg-primary-gradiant ms-3" />
                  <span>Author Profile </span>
                </a>
              </li>
            </ul>
          </div>
          <div className="nav-wrap bg-white bg-transparent-card rounded-xxl shadow-xss pt-3 pb-1 mb-2">
            <div className="nav-caption fw-600 font-xssss text-grey-500">
              <span>More </span>Pages
            </div>
            <ul className="mb-3">
              <li>
                <a
                  href="default-email-box.html"
                  className="nav-content-bttn open-font"
                >
                  <i className="font-xl text-current feather-inbox ms-3" />
                  <span>Email Box</span>
                  <span className="circle-count bg-warning mt-1">584</span>
                </a>
              </li>
              <li>
                <a
                  href="default-hotel.html"
                  className="nav-content-bttn open-font"
                >
                  <i className="font-xl text-current feather-home ms-3" />
                  <span>Near Hotel</span>
                </a>
              </li>
              <li>
                <a
                  href="default-event.html"
                  className="nav-content-bttn open-font"
                >
                  <i className="font-xl text-current feather-map-pin ms-3" />
                  <span>Latest Event</span>
                </a>
              </li>
              <li>
                <a
                  href="default-live-stream.html"
                  className="nav-content-bttn open-font"
                >
                  <i className="font-xl text-current feather-youtube ms-3" />
                  <span>Live Stream</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="nav-wrap bg-white bg-transparent-card rounded-xxl shadow-xss pt-3 pb-1">
            <div className="nav-caption fw-600 font-xssss text-grey-500">
              <span /> Account
            </div>
            <ul className="mb-1">
              <li className="logo d-none d-xl-block d-lg-block" />
              <li>
                <a
                  href="default-settings.html"
                  className="nav-content-bttn open-font h-auto pt-2 pb-2"
                >
                  <i className="font-sm feather-settings ms-3 text-grey-500" />
                  <span>Settings</span>
                </a>
              </li>
              <li>
                <a
                  href="default-analytics.html"
                  className="nav-content-bttn open-font h-auto pt-2 pb-2"
                >
                  <i className="font-sm feather-pie-chart ms-3 text-grey-500" />
                  <span>Analytics</span>
                </a>
              </li>
              <li>
                <a
                  href="default-message.html"
                  className="nav-content-bttn open-font h-auto pt-2 pb-2"
                >
                  <i className="font-sm feather-message-square ms-3 text-grey-500" />
                  <span>Chat</span>
                  <span className="circle-count bg-warning mt-0">23</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default SidebarRight;
