import React, { useState } from "react";
import "./SectionCenter.scss";
import profile from "../../assets/img/img/profile.jpg";
import LiveVideo from "../../assets/svg/live_video.svg";
import photo from "../../assets/svg/photo.svg";
import smile from "../../assets/svg/smile.svg";
import heart from "../../assets/svg/heart.svg";
import like from "../../assets/svg/like.svg";
import share from "../../assets/svg/share.svg";
import comment from "../../assets/svg/comment.svg";
import Posts from "../Posts/Posts";
import Share from "../Share/Share";
import Vidoes from "../Videos/Vidoes";
import Rails from "../Rails/Rails";
import WeekPerson from "../WeekPerson/WeekPerson";
import ArticlcePosts from "../ArticlcePosts/ArticlcePosts";
import { BsCameraVideo } from "react-icons/bs";
import { MdOutlineSlowMotionVideo } from "react-icons/md";

import ArticleAndSearches from "../ArticleAndSearches/ArticleAndSearches";
import Jobs from "../Jobs/Jobs";
import { useParams } from "react-router-dom";
import VideoOrRelis from "../VideoOrRelis/VideoOrRelis";
function SectionCenter({ active }) {
  const [activeVideo, setActiveVideo] = useState("article");
  const prams = useParams();
  console.log(prams);
  return (
    <div className="col-xl-12 col-xxl-12 col-lg-12 section-center m-auto ">
      {active === "Home" ? (
        <>
          <WeekPerson />
          <Share />
          <Posts />
        </>
      ) : active === "Video" ? (
        <VideoOrRelis />
      ) : active === "article" ? (
        <>
          <ArticleAndSearches />
        </>
      ) : (
        active === "jobs" && (
          <>
            <Jobs />
          </>
        )
      )}
    </div>
  );
}

export default SectionCenter;
