import React from "react";
import "./Jobs.scss";
import { GiArchiveResearch } from "react-icons/gi";
import { AiOutlineFileSearch } from "react-icons/ai";
import { useState } from "react";
import ContentRequests from "./ContentRequests/ContentRequests";
import JobSearch from "./JobSearch/JobSearch";
import { MdContentPaste } from "react-icons/md";
function Jobs() {
  const [active, setActive] = useState("content");
  const themeColor = localStorage.getItem("themeColor");

  return (
    <div className="jobs">
      <div className="typeJobs">
        <div
          className={
            active === "content"
              ? `contentRequstsButton  bg-primary-gradiant ${themeColor}`
              : "contentRequstsButton card"
          }
          style={
            active === "content"
              ? { backgroundColor: "#0099a8", color: "#fff !important" }
              : { backgroundColor: "#fff", color: "#000" }
          }
          onClick={() => setActive("content")}
        >
          <MdContentPaste
            style={
              active === "content" ? { color: "#fff " } : { color: "#000" }
            }
            className="font-xl"
          />
          <h3
            style={
              active === "content" ? { color: "#fff " } : { color: "#000" }
            }
          >
            طلب محتوى
          </h3>
        </div>
        <div
          className={
            active === "search"
              ? `jobSearchButton bg-primary-gradiant ${themeColor}`
              : "jobSearchButton card"
          }
          style={
            active === "search"
              ? { backgroundColor: "#0099a8", color: "#fff" }
              : { backgroundColor: "#fff", color: "#000" }
          }
          onClick={() => setActive("search")}
        >
          <GiArchiveResearch
            style={active === "search" ? { color: "#fff " } : { color: "#000" }}
            className="font-xl"
          />
          <h3
            className="fw-700 font-xsss"
            style={active === "search" ? { color: "#fff " } : { color: "#000" }}
          >
            البحث عن وظيفه
          </h3>
        </div>
      </div>
      {active === "content" ? <ContentRequests /> : <JobSearch />}
    </div>
  );
}

export default Jobs;
