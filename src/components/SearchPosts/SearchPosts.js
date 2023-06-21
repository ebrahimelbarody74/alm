import React, { useState } from "react";
import img from "../../assets/img/drake.jpg";
import heart from "../../assets/svg/heart.svg";
import like from "../../assets/svg/like.svg";
import share from "../../assets/svg/share.svg";
import comment from "../../assets/svg/comment.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";
import "./SearchPosts.scss";
import { Link } from "react-router-dom";
import {
  AiTwotoneLike,
  AiFillHeart,
  AiOutlineLike,
  AiOutlineClose,
} from "react-icons/ai";
import { FaRegLaughSquint } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";
import { BsCamera, BsFillChatFill } from "react-icons/bs";
import { Modal } from "@mantine/core";
import InputEmoji from "react-input-emoji";
import { BiPlus, BiShare } from "react-icons/bi";
import Share from "../ShareSearch/ShareSearch";
import { RiMenuAddLine } from "react-icons/ri";
import { MdOutlineFavoriteBorder } from "react-icons/md";

function SearchPosts() {
  const [event, setEvent] = useState(false);
  const [react, setReact] = useState("");

  const [modalOpened, setModalOpened] = useState(false);

  const [text, setText] = useState("");

  function handleOnEnter(text) {
    console.log("enter", text);
  }
  const [viewList, setViewList] = useState(false);
  const themeColor = localStorage.getItem("themeColor");

  return (
    <div className="searchPosts">
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
          <ul>
            <li className="card flex-row me-2 mb-2">
              بحث علمى
              <BiPlus />
            </li>
            <li className="card flex-row me-2 mb-2">
              بحث هندسى
              <BiPlus />
            </li>
            <li className="card flex-row me-2 mb-2">
              بحث طبى
              <BiPlus />
            </li>
            <li className="card flex-row me-2 mb-2">
              بحث علاجى
              <BiPlus />
            </li>
            <li className="card flex-row me-2 mb-2">
              بحث دينى
              <BiPlus />
            </li>
            <li className="card flex-row me-2 mb-2">
              بحث زراعى
              <BiPlus />
            </li>
            <li className="card flex-row me-2 mb-2">
              بحث سياحى
              <BiPlus />
            </li>
            <li className="card flex-row me-2 mb-2">
              بحث بحثى
              <BiPlus />
            </li>
            <li className="card flex-row me-2 mb-2">
              بحث تربوى
              <BiPlus />
            </li>
            <li className="card flex-row me-2 mb-2">
              اخرى
              <BiPlus />
            </li>
          </ul>
        )}
      </div>
      <div className="card w-100 shadow-xss rounded-xxl border-0 p-4 mb-3">
        <div className="card-body p-0 d-flex">
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
              2 hour ago
            </span>
          </h4>
          <div className="me-auto d-flex gap-2">
            <a href="#" className="">
              <div className="btn-round-md bg-greylight font-xss">
                <FiMoreHorizontal className="text-grey-900 font-lg fw-bolder" />
              </div>
            </a>
            <a href="#" className="">
              <div className="btn-round-md bg-greylight ">
                <AiOutlineClose className="text-grey-900 font-lg fw-bolder" />
              </div>{" "}
            </a>
          </div>
        </div>
        <div className="card-body d-block p-0 mb-3">
          <div className="row pe-2 ps-2">
            <span
              className={`text-white text-center p-2 rounded-xl w100 ls-1 bg-primary-gradiant mb-3 ${themeColor}`}
            >
              علمى{" "}
            </span>
            <div className="col-sm-12 p-1">
              <img src={img} className="w-100" />
            </div>
          </div>
        </div>
        <div className="card-body p-0 ms-lg-5">
          <p className="fw-500 text-grey-500 lh-26 font-xssss w-100 mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla
            dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus
            mollis pharetra. Proin blandit ac massa sed rhoncus{" "}
          </p>
        </div>
        <div className="more">
          <Link to="/searches">
            <span className={` text-current ${themeColor}`}>قراءه المزيد</span>
          </Link>
          <button
            download
            className={`text-white bg-primary-gradiant ${themeColor}`}
          >
            تحميل
          </button>
        </div>
        <div className="card-body d-flex gap-4 pt-3 mt-3 border-top-xs">
          <a
            href="#"
            className="emoji-bttn d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss ms-2"
          >
            <div className="bg-red-gradiant ms-2 btn-round-xs ">
              <MdOutlineFavoriteBorder className="text-white font-xss " />
            </div>
            2.8K Like
          </a>

          <div
            className="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"
            onClick={() => setModalOpened(true)}
          >
            <div className="feather-message-circle text-dark text-grey-900 btn-round-sm ">
              <BsFillChatFill className="font-xss " />
            </div>
            <span className="d-none-xss">22 Comment</span>
          </div>
          <a
            href="#"
            id="dropdownMenu21"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            className="me-auto d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"
          >
            <div className="feather-message-circle text-dark text-grey-900 btn-round-sm ">
              <BiShare className="font-lg " />
            </div>

            <span className="d-none-xs">Share</span>
          </a>
        </div>
      </div>
      <Modal
        overlayOpacity={0.55}
        overlayBlur={3}
        size="55%"
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
      >
        <div className="post">
          <div className="title">
            <div className="user">
              <div className="img">
                <img src={img} />
              </div>
              <h3>ابراهيم البارودى</h3>
            </div>
          </div>
          <div className="info">
            <p>السلام عليكم ورحمه الله وبركاته</p>
          </div>
          <div className="reaction">
            <div className="icons">
              <div className="svg">
                <img src={like} alt="" />
              </div>
              <div className="svg">
                <img src={heart} alt="" />
              </div>
              <div className="svg">
                <img src={share} alt="" />
              </div>
              <a href="#">32k</a>
            </div>
          </div>
          <div className="likeShare">
            <ul>
              <li
                onMouseMove={() => {
                  setEvent(true);
                }}
                onMouseLeave={() => {
                  setEvent(false);
                }}
              >
                <div className="svg">
                  {react === "like" ? (
                    <AiTwotoneLike
                      onClick={() => {
                        setReact("");
                        setEvent(false);
                      }}
                    />
                  ) : react === "love" ? (
                    <AiFillHeart />
                  ) : (
                    <AiOutlineLike />
                  )}
                </div>
                <h3>Like</h3>
                <div
                  className="icons"
                  style={event ? { display: "block" } : { display: "none" }}
                >
                  <ul>
                    <li>
                      <AiTwotoneLike
                        onClick={() => {
                          setReact("like");
                          setEvent(false);
                        }}
                      />
                    </li>
                    <li>
                      <AiFillHeart
                        onClick={() => {
                          setReact("love");
                          setEvent(false);
                        }}
                      />
                    </li>
                    <li>
                      <FaRegLaughSquint
                        onClick={() => {
                          setReact("haha");
                          setEvent(false);
                        }}
                      />
                    </li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </li>
              <li>
                {" "}
                <div className="svg">
                  <img src={comment} alt="" />
                </div>
                <h3>Comment</h3>
              </li>
              <li>
                <div className="svg">
                  <img src={share} alt="" />
                </div>
                <h3>sahre</h3>
              </li>
            </ul>
          </div>
          <div className="comments">
            <ul>
              <li>
                <img src={img} />
                <div className="txt">
                  <h3>ابراهيم البارودى</h3>
                  <p>وعليكم السلام ورحمه الله وبركاته</p>
                </div>
                <FiMoreHorizontal />
              </li>
              <li>
                <img src={img} />
                <div className="input">
                  <InputEmoji
                    value={text}
                    onChange={setText}
                    cleanOnEnter
                    onEnter={handleOnEnter}
                    placeholder="اكتب تعليقا عاما"
                  />
                  <div className="icons">
                    <BsCamera />
                    {/* 😃 */}
                  </div>
                </div>
              </li>
              <li
                onClick={() => {
                  setModalOpened(true);
                  console.log(modalOpened);
                }}
              >
                <span>عرض مزيد من التعليقات</span>
              </li>
            </ul>
          </div>
        </div>
        {/* <RightBar location="FollowersModal" /> */}
      </Modal>
    </div>
  );
}

export default SearchPosts;
