import React, { useState } from "react";
import { GrArticle } from "react-icons/hi";
import { HiOutlineUsers } from "react-icons/hi";
import { FaUserFriends, FaUsers } from "react-icons/fa";
import { FiUserPlus } from "react-icons/fi";
import "./FriendsPage.scss";
import Friends from "./Friends/Friends";
import FriendRequest from "./FriendRequest/FriendRequest";
import Suggestions from "./Suggestions/Suggestions";
function FriendsPage() {
  const [active, setActive] = useState("friends");
  const themeColor = localStorage.getItem("themeColor");
  return (
    <div className="frinds-page ">
      <div className="typeArticleAndSearches row  mx-3 mb-4">
        <div
          className={
            active === "friends"
              ? `articleType bg-primary-gradiant col-xl-3 col-lg-6 ${themeColor}`
              : "articleType col-xl-3 col-lg-6 card"
          }
          style={
            active === "friends"
              ? { backgroundColor: "#0099a8", color: "#fff" }
              : { backgroundColor: "#fff", color: "#000" }
          }
          onClick={() => setActive("friends")}
        >
          <FaUserFriends
            className="font-xl"
            style={
              active === "friends" ? { color: "#fff " } : { color: "#000" }
            }
          />
          <h3
            style={
              active === "friends" ? { color: "#fff " } : { color: "#000" }
            }
          >
            الاصدقاء
          </h3>
        </div>
        <div
          className={
            active === "friendsRequest"
              ? `searchType bg-primary-gradiant col-3 col-lg-6  ${themeColor}`
              : "searchType col-3 col-lg-6 card"
          }
          style={
            active === "friendsRequest"
              ? { backgroundColor: "#0099a8", color: "#fff" }
              : { backgroundColor: "#fff", color: "#000" }
          }
          onClick={() => setActive("friendsRequest")}
        >
          <FiUserPlus
            className="font-xl"
            style={
              active === "friendsRequest"
                ? { color: "#fff " }
                : { color: "#000" }
            }
          />
          <h3
            style={
              active === "friendsRequest"
                ? { color: "#fff " }
                : { color: "#000" }
            }
          >
            طلبات الصداقه
          </h3>
        </div>
        <div
          className={
            active === "suggestions"
              ? `searchType bg-primary-gradiant col-3 col-lg-6   ${themeColor}`
              : "searchType col-3 col-lg-6 card"
          }
          style={
            active === "suggestions"
              ? { backgroundColor: "#0099a8", color: "#fff" }
              : { backgroundColor: "#fff", color: "#000" }
          }
          onClick={() => setActive("suggestions")}
        >
          <HiOutlineUsers
            className="font-xl"
            style={
              active === "suggestions" ? { color: "#fff " } : { color: "#000" }
            }
          />
          <h3
            style={
              active === "suggestions" ? { color: "#fff " } : { color: "#000" }
            }
          >
            الاقتراحات
          </h3>
        </div>
        <div
          className={
            active === "all"
              ? `searchType bg-primary-gradiant col-3 col-lg-6  ${themeColor}`
              : "searchType col-3 col-lg-6 card"
          }
          style={
            active === "all"
              ? { backgroundColor: "#0099a8", color: "#fff" }
              : { backgroundColor: "#fff", color: "#000" }
          }
          onClick={() => setActive("all")}
        >
          <FaUsers
            className="font-xl"
            style={active === "all" ? { color: "#fff " } : { color: "#000" }}
          />
          <h3 style={active === "all" ? { color: "#fff " } : { color: "#000" }}>
            الكل
          </h3>
        </div>
      </div>
      {active === "friends" ? (
        <Friends />
      ) : active === "suggestions" ? (
        <Suggestions />
      ) : (
        <FriendRequest />
      )}
    </div>
  );
}

export default FriendsPage;
