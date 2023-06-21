import React, { useState } from "react";
import "./ArticleAndSearches.scss";
import { TbArticle } from "react-icons/tb";
import { AiOutlineFileSearch } from "react-icons/ai";
import Articlces from "../Articlces/Articlces";
import ArticlcePosts from "../ArticlcePosts/ArticlcePosts";
import SearchPosts from "../SearchPosts/SearchPosts";
function ArticleAndSearches() {
  const [active, setActive] = useState("article");
  const themeColor = localStorage.getItem("themeColor")
  return (
    <div className="articleAndSearches">
      <div className="typeArticleAndSearches">
        <div
          className={
            active === "article"
              ? `articleType bg-primary-gradiant ${themeColor}`
              : "articleType card"
          }
          style={
            active === "article"
              ? { backgroundColor: "#0099a8", color: "#fff" }
              : { backgroundColor: "#fff", color: "#000" }
          }
          onClick={() => setActive("article")}
        >
          <TbArticle
            style={
              active === "article" ? { color: "#fff " } : { color: "#000" }
            }
            className="font-xl"
          />
          <h3
            style={
              active === "article" ? { color: "#fff " } : { color: "#000" }
            }
          >
            المقالات
          </h3>
        </div>
        <div
          className={
            active === "search"
              ? `searchType bg-primary-gradiant ${themeColor}`
              : "searchType card"
          }
          style={
            active === "search"
              ? { backgroundColor: "#0099a8", color: "#fff" }
              : { backgroundColor: "#fff", color: "#000" }
          }
          onClick={() => setActive("search")}
        >
          <AiOutlineFileSearch
            className="font-xl"
            style={active === "search" ? { color: "#fff " } : { color: "#000" }}
          />
          <h3
            style={active === "search" ? { color: "#fff " } : { color: "#000" }}
          >
            الابحاث
          </h3>
        </div>
      </div>
      {active === "article" ? <ArticlcePosts /> : <SearchPosts />}
    </div>
  );
}

export default ArticleAndSearches;
