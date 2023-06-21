import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import SectionCenter from "../../components/SectionCenter/SectionCenter";
import SideBarLeft from "../../components/SideBarLeft/SideBarLeft";
import SidebarRight from "../../components/SidebarRight/SidebarRight";
import "./home.scss";
import Contects from "../../components/Contects/Contects";
import PortfolioJob from "../../components/PortfolioJob/PortfolioJob";
import FriendsPage from "../../components/FriendsPage/FriendsPage";
import Footer from "../../components/Footer/Footer";
const Home = () => {
  const [active, setActive] = useState("Home");
  const [activeRightbar, setActiveRightbar] = useState(false);
  const page = window.location.pathname.split("/")[1];
  const path = window.location.pathname.split("/")[1];
  /////
  const [activeSearch, setActiveSearch] = useState(false);
  // const val =
  const [menuAuctive, setMenuActive] = useState(
    localStorage.getItem("menu-active") === "true" ? true : false
  );
  //////

  ///// left bar mobile
  const [activeLeftBar, setActiveLeftBar] = useState(false);
  /////

  const [themeColor, setThemecolor] = useState(
    localStorage.getItem("themeColor") || "color-theme-red"
  );

  //dark mode
  const [activeDark, setActiveDark] = useState(
    localStorage.getItem("darkMode") === "theme-dark" ? true : false
  );
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") || ""
  );

  console.log(menuAuctive, "menu");
  console.log(page, "window.location.pathname");

  useEffect(() => {
    console.log(activeDark);
    var element = document.querySelector("body");
    element.classList.add(darkMode || "noDark");
  }, []);
  return (
    <>
      <div className="main-wrapper" onClick={() => setActiveSearch(false)}>
        <Header
          home={"home"}
          setActiveRightbar={setActiveRightbar}
          activeRightbar={activeRightbar}
          setActive={setActive}
          active={active}
          activeSearch={activeSearch}
          setActiveSearch={setActiveSearch}
          themeColor={themeColor}
          setThemecolor={setThemecolor}
          setActiveDark={setActiveDark}
          activeDark={activeDark}
          menuAuctive={menuAuctive}
          setMenuActive={setMenuActive}
          activeLeftBar={activeLeftBar}
          setActiveLeftBar={setActiveLeftBar}
        />
        <SidebarRight
          setActiveRightbar={setActiveRightbar}
          activeRightbar={activeRightbar}
          setActive={setActive}
          active={active}
          menuAuctive={menuAuctive}
          setMenuActive={setMenuActive}
        />
        {page === "home" ? (
          <div
            className={
              menuAuctive
                ? "main-content right-chat-active menu-active "
                : "main-content right-chat-active ps-0"
            }
          >
            <div className="middle-sidebar-bottom">
              <div className="middle-sidebar-left">
                <div className="row feed-body">
                  {path === "contact" ? (
                    <Contects />
                  ) : path === "portfolioJob mt-5" ? (
                    <PortfolioJob />
                  ) : (
                    <SectionCenter active={active} />
                  )}
                  <SideBarLeft
                    activeLeftBar={activeLeftBar}
                    themeColor={themeColor}
                    setThemecolor={setThemecolor}
                  />
                </div>
              </div>
            </div>
          </div>
        ) : page === "contact" ? (
          <div
            className={
              menuAuctive
                ? "main-content right-chat-active ps-0 menu-active"
                : "main-content right-chat-active ps-0 "
            }
          >
            <Contects />
          </div>
        ) : page === "portfolioJob" ? (
          <div
            className={
              menuAuctive
                ? "main-content right-chat-active ps-0 menu-active"
                : "main-content right-chat-active ps-0 "
            }
          >
            <PortfolioJob />
          </div>
        ) : (
          <div
            className={
              menuAuctive
                ? "main-content right-chat-active ps-0 menu-active"
                : "main-content right-chat-active ps-0 "
            }
          >
            <FriendsPage />
          </div>
        )}
      </div>
      <Footer setActive={setActive} active={active} />
    </>
  );
};

export default Home;
