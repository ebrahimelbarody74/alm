import React, { useState } from "react";
import img from "../../assets/img/drake.jpg";
import "./Posts.scss";
import heart from "../../assets/svg/heart.svg";
import like from "../../assets/svg/like.svg";
import share from "../../assets/svg/share.svg";
import comment from "../../assets/svg/comment.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";
import {
  AiTwotoneLike,
  AiFillHeart,
  AiOutlineLike,
  AiOutlineMore,
  AiOutlineClose,
} from "react-icons/ai";
import { FaRegLaughSquint } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill, BsCamera, BsFillChatFill } from "react-icons/bs";
import { Modal } from "@mantine/core";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Download from "yet-another-react-lightbox/plugins/download";

import InputEmoji from "react-input-emoji";

import { Link } from "react-router-dom";
import { useRef } from "react";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { BiShare } from "react-icons/bi";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
const flickityOptions = {
  initialIndex: 2,
};
const spanStyle = {
  padding: "20px",
  background: "#efefef",
  color: "#000000",
};

const buttonStyle = {
  // width: "30px",
  background: "none",
  border: "0px",
  display:"none"
};


const slideImages = [
  {
    url: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    caption: "Slide 1",
  },
  {
    url: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    caption: "Slide 2",
  },
  {
    url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    caption: "Slide 3",
  },
];

function Posts() {
  const [menuSettings, setMenuSettings] = useState(false);
  const [event, setEvent] = useState(false);
  const [react, setReact] = useState("");

  const [modalOpened, setModalOpened] = useState(false);

  const [text, setText] = useState("");

  function handleOnEnter(text) {
    console.log("enter", text);
  }

  const [openPhoto, setOpenPhoto] = useState(false);
  const zoomRef = useRef(null);

  const themeColor = localStorage.getItem("themeColor");
const indicators = (index) => <div className="indicator">0</div>;
  const properties = {
    prevArrow: (
      <button style={{ ...buttonStyle }}>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff">
        <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
      </svg> */}
        <BsArrowLeftCircleFill
          className={`display2-size ${themeColor} text-current`}
        />
      </button>
    ),
    nextArrow: (
      <button style={{ ...buttonStyle }}>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff">
        <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
      </svg> */}
        <BsArrowRightCircleFill
          className={`display2-size ${themeColor} text-current`}
        />
      </button>
    ),
  };

  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    height: "400px",
  };
  return (
    <div className="posts">
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
        <div className="card-body p-0 ms-lg-5">
          <p className="fw-500 text-grey-500 lh-26 font-xssss w-100 mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla
            dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus
            mollis pharetra. Proin blandit ac massa sed rhoncus{" "}
            <a href="#" className="fw-600 text-primary me-2">
              See more
            </a>
          </p>
        </div>
        <div className="card-body d-block p-0 mb-3">
          <div className="row pe-2 ps-2">
            <div className="col-sm-12 p-1">
              <Slide {...properties} indicators={true} >
                {slideImages.map((slideImage, index) => (
                  <div key={index}>
                    <div
                      onClick={() => setOpenPhoto(true)}
                      style={{
                        ...divStyle,
                        backgroundImage: `url(${slideImage.url})`,
                      }}
                    >
                      <span style={spanStyle}>{slideImage.caption}</span>
                    </div>
                  </div>
                ))}
              </Slide>
            </div>
          </div>
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
          <div
            className="dropdown-menu dropdown-menu-end p-4 rounded-xxl border-0 shadow-lg"
            aria-labelledby="dropdownMenu21"
          >
            <h4 className="fw-700 font-xss text-grey-900 d-flex align-items-center">
              Share{" "}
              <i className="feather-x me-auto font-xssss btn-round-xs bg-greylight text-grey-900 ms-2" />
            </h4>
            <div className="card-body p-0 d-flex">
              <ul className="d-flex align-items-center justify-content-between mt-2">
                <li>
                  <a href="#" className="btn-round-lg bg-pinterest">
                    <i className="font-xs ti-pinterest text-white" />
                  </a>
                </li>
                <li className="me-1">
                  <a href="#" className="btn-round-lg bg-facebook">
                    <i className="font-xs ti-facebook text-white" />
                  </a>
                </li>
                <li className="me-1">
                  <a href="#" className="btn-round-lg bg-twiiter">
                    <i className="font-xs ti-twitter-alt text-white" />
                  </a>
                </li>
                <li className="me-1">
                  <a href="#" className="btn-round-lg bg-linkedin">
                    <i className="font-xs ti-linkedin text-white" />
                  </a>
                </li>
                <li className="me-1">
                  <a href="#" className="btn-round-lg bg-instagram">
                    <i className="font-xs ti-instagram text-white" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="card-body p-0 d-flex">
              <ul className="d-flex align-items-center justify-content-between mt-2">
                <li>
                  <a href="#" className="btn-round-lg bg-whatsup">
                    <i className="font-xs feather-phone text-white" />
                  </a>
                </li>
                <li className="me-1">
                  <a href="#" className="btn-round-lg bg-tumblr">
                    <i className="font-xs ti-tumblr text-white" />
                  </a>
                </li>
                <li className="me-1">
                  <a href="#" className="btn-round-lg bg-youtube">
                    <i className="font-xs ti-youtube text-white" />
                  </a>
                </li>
                <li className="me-1">
                  <a href="#" className="btn-round-lg bg-flicker">
                    <i className="font-xs ti-flickr text-white" />
                  </a>
                </li>
                <li className="me-1">
                  <a href="#" className="btn-round-lg bg-black">
                    <i className="font-xs ti-vimeo-alt text-white" />
                  </a>
                </li>
              </ul>
            </div>
            <h4 className="fw-700 font-xssss mt-4 text-grey-500 d-flex align-items-center mb-3">
              Copy Link
            </h4>
            <i className="feather-copy position-absolute left-15 ms-4 mt-3 font-xs text-grey-500" />
            <input
              type="text"
              defaultValue="https://socia.be/1rGxjoJKVF0"
              className="bg-grey text-grey-500 font-xssss border-0 lh-32 p-2 font-xssss fw-600 rounded-3 w-100 theme-dark-bg"
            />
          </div>
        </div>
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
              <div className="btn-round-md bg-greylight font-xss">
                <AiOutlineClose className="text-grey-900 font-lg fw-bolder" />
              </div>{" "}
            </a>
          </div>
        </div>
        <div className="card-body p-0 ms-lg-5">
          <p className="fw-500 text-grey-500 lh-26 font-xssss w-100 mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla
            dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus
            mollis pharetra. Proin blandit ac massa sed rhoncus{" "}
            <a href="#" className="fw-600 text-primary me-2">
              See more
            </a>
          </p>
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
          <div
            className="dropdown-menu dropdown-menu-end p-4 rounded-xxl border-0 shadow-lg"
            aria-labelledby="dropdownMenu21"
          >
            <h4 className="fw-700 font-xss text-grey-900 d-flex align-items-center">
              Share{" "}
              <i className="feather-x me-auto font-xssss btn-round-xs bg-greylight text-grey-900 ms-2" />
            </h4>
            <div className="card-body p-0 d-flex">
              <ul className="d-flex align-items-center justify-content-between mt-2">
                <li>
                  <a href="#" className="btn-round-lg bg-pinterest">
                    <i className="font-xs ti-pinterest text-white" />
                  </a>
                </li>
                <li className="me-1">
                  <a href="#" className="btn-round-lg bg-facebook">
                    <i className="font-xs ti-facebook text-white" />
                  </a>
                </li>
                <li className="me-1">
                  <a href="#" className="btn-round-lg bg-twiiter">
                    <i className="font-xs ti-twitter-alt text-white" />
                  </a>
                </li>
                <li className="me-1">
                  <a href="#" className="btn-round-lg bg-linkedin">
                    <i className="font-xs ti-linkedin text-white" />
                  </a>
                </li>
                <li className="me-1">
                  <a href="#" className="btn-round-lg bg-instagram">
                    <i className="font-xs ti-instagram text-white" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="card-body p-0 d-flex">
              <ul className="d-flex align-items-center justify-content-between mt-2">
                <li>
                  <a href="#" className="btn-round-lg bg-whatsup">
                    <i className="font-xs feather-phone text-white" />
                  </a>
                </li>
                <li className="me-1">
                  <a href="#" className="btn-round-lg bg-tumblr">
                    <i className="font-xs ti-tumblr text-white" />
                  </a>
                </li>
                <li className="me-1">
                  <a href="#" className="btn-round-lg bg-youtube">
                    <i className="font-xs ti-youtube text-white" />
                  </a>
                </li>
                <li className="me-1">
                  <a href="#" className="btn-round-lg bg-flicker">
                    <i className="font-xs ti-flickr text-white" />
                  </a>
                </li>
                <li className="me-1">
                  <a href="#" className="btn-round-lg bg-black">
                    <i className="font-xs ti-vimeo-alt text-white" />
                  </a>
                </li>
              </ul>
            </div>
            <h4 className="fw-700 font-xssss mt-4 text-grey-500 d-flex align-items-center mb-3">
              Copy Link
            </h4>
            <i className="feather-copy position-absolute left-15 ms-4 mt-3 font-xs text-grey-500" />
            <input
              type="text"
              defaultValue="https://socia.be/1rGxjoJKVF0"
              className="bg-grey text-grey-500 font-xssss border-0 lh-32 p-2 font-xssss fw-600 rounded-3 w-100 theme-dark-bg"
            />
          </div>
        </div>
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
              <div className="btn-round-md bg-greylight font-xss">
                <AiOutlineClose className="text-grey-900 font-lg fw-bolder" />
              </div>{" "}
            </a>
          </div>
        </div>
        <div className="card-body p-0 ms-lg-5">
          <p className="fw-500 text-grey-500 lh-26 font-xssss w-100 mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla
            dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus
            mollis pharetra. Proin blandit ac massa sed rhoncus{" "}
            <a href="#" className="fw-600 text-primary me-2">
              See more
            </a>
          </p>
        </div>
        <div className="card-body d-block p-0 mb-3">
          <div className="row pe-2 ps-2">
            <div className="col-sm-12 p-1">
              <Slide {...properties} indicators={true}>
                {slideImages.map((slideImage, index) => (
                  <div key={index}>
                    <div
                      onClick={() => setOpenPhoto(true)}
                      style={{
                        ...divStyle,
                        backgroundImage: `url(${slideImage.url})`,
                      }}
                    >
                      <span style={spanStyle}>{slideImage.caption}</span>
                    </div>
                  </div>
                ))}
              </Slide>
            </div>
          </div>
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
          <div
            className="dropdown-menu dropdown-menu-end p-4 rounded-xxl border-0 shadow-lg"
            aria-labelledby="dropdownMenu21"
          >
            <h4 className="fw-700 font-xss text-grey-900 d-flex align-items-center">
              Share{" "}
              <i className="feather-x me-auto font-xssss btn-round-xs bg-greylight text-grey-900 ms-2" />
            </h4>
            <div className="card-body p-0 d-flex">
              <ul className="d-flex align-items-center justify-content-between mt-2">
                <li>
                  <a href="#" className="btn-round-lg bg-pinterest">
                    <i className="font-xs ti-pinterest text-white" />
                  </a>
                </li>
                <li className="me-1">
                  <a href="#" className="btn-round-lg bg-facebook">
                    <i className="font-xs ti-facebook text-white" />
                  </a>
                </li>
                <li className="me-1">
                  <a href="#" className="btn-round-lg bg-twiiter">
                    <i className="font-xs ti-twitter-alt text-white" />
                  </a>
                </li>
                <li className="me-1">
                  <a href="#" className="btn-round-lg bg-linkedin">
                    <i className="font-xs ti-linkedin text-white" />
                  </a>
                </li>
                <li className="me-1">
                  <a href="#" className="btn-round-lg bg-instagram">
                    <i className="font-xs ti-instagram text-white" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="card-body p-0 d-flex">
              <ul className="d-flex align-items-center justify-content-between mt-2">
                <li>
                  <a href="#" className="btn-round-lg bg-whatsup">
                    <i className="font-xs feather-phone text-white" />
                  </a>
                </li>
                <li className="me-1">
                  <a href="#" className="btn-round-lg bg-tumblr">
                    <i className="font-xs ti-tumblr text-white" />
                  </a>
                </li>
                <li className="me-1">
                  <a href="#" className="btn-round-lg bg-youtube">
                    <i className="font-xs ti-youtube text-white" />
                  </a>
                </li>
                <li className="me-1">
                  <a href="#" className="btn-round-lg bg-flicker">
                    <i className="font-xs ti-flickr text-white" />
                  </a>
                </li>
                <li className="me-1">
                  <a href="#" className="btn-round-lg bg-black">
                    <i className="font-xs ti-vimeo-alt text-white" />
                  </a>
                </li>
              </ul>
            </div>
            <h4 className="fw-700 font-xssss mt-4 text-grey-500 d-flex align-items-center mb-3">
              Copy Link
            </h4>
            <i className="feather-copy position-absolute left-15 ms-4 mt-3 font-xs text-grey-500" />
            <input
              type="text"
              defaultValue="https://socia.be/1rGxjoJKVF0"
              className="bg-grey text-grey-500 font-xssss border-0 lh-32 p-2 font-xssss fw-600 rounded-3 w-100 theme-dark-bg"
            />
          </div>
        </div>
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
              <div className="btn-round-md bg-greylight font-xss">
                <AiOutlineClose className="text-grey-900 font-lg fw-bolder" />
              </div>{" "}
            </a>
          </div>
        </div>
        <div className="card-body p-0 ms-lg-5">
          <p className="fw-500 text-grey-500 lh-26 font-xssss w-100 mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla
            dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus
            mollis pharetra. Proin blandit ac massa sed rhoncus{" "}
            <a href="#" className="fw-600 text-primary me-2">
              See more
            </a>
          </p>
        </div>
        <div className="card-body d-block p-0 mb-3">
          <div className="row pe-2 ps-2">
            <div className="col-sm-12 p-1">
              <Slide {...properties} indicators={true}>
                {slideImages.map((slideImage, index) => (
                  <div key={index}>
                    <div
                      onClick={() => setOpenPhoto(true)}
                      style={{
                        ...divStyle,
                        backgroundImage: `url(${slideImage.url})`,
                      }}
                    >
                      <span style={spanStyle}>{slideImage.caption}</span>
                    </div>
                  </div>
                ))}
              </Slide>
            </div>
          </div>
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
          <div
            className="dropdown-menu dropdown-menu-end p-4 rounded-xxl border-0 shadow-lg"
            aria-labelledby="dropdownMenu21"
          >
            <h4 className="fw-700 font-xss text-grey-900 d-flex align-items-center">
              Share{" "}
              <i className="feather-x me-auto font-xssss btn-round-xs bg-greylight text-grey-900 ms-2" />
            </h4>
            <div className="card-body p-0 d-flex">
              <ul className="d-flex align-items-center justify-content-between mt-2">
                <li>
                  <a href="#" className="btn-round-lg bg-pinterest">
                    <i className="font-xs ti-pinterest text-white" />
                  </a>
                </li>
                <li className="me-1">
                  <a href="#" className="btn-round-lg bg-facebook">
                    <i className="font-xs ti-facebook text-white" />
                  </a>
                </li>
                <li className="me-1">
                  <a href="#" className="btn-round-lg bg-twiiter">
                    <i className="font-xs ti-twitter-alt text-white" />
                  </a>
                </li>
                <li className="me-1">
                  <a href="#" className="btn-round-lg bg-linkedin">
                    <i className="font-xs ti-linkedin text-white" />
                  </a>
                </li>
                <li className="me-1">
                  <a href="#" className="btn-round-lg bg-instagram">
                    <i className="font-xs ti-instagram text-white" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="card-body p-0 d-flex">
              <ul className="d-flex align-items-center justify-content-between mt-2">
                <li>
                  <a href="#" className="btn-round-lg bg-whatsup">
                    <i className="font-xs feather-phone text-white" />
                  </a>
                </li>
                <li className="me-1">
                  <a href="#" className="btn-round-lg bg-tumblr">
                    <i className="font-xs ti-tumblr text-white" />
                  </a>
                </li>
                <li className="me-1">
                  <a href="#" className="btn-round-lg bg-youtube">
                    <i className="font-xs ti-youtube text-white" />
                  </a>
                </li>
                <li className="me-1">
                  <a href="#" className="btn-round-lg bg-flicker">
                    <i className="font-xs ti-flickr text-white" />
                  </a>
                </li>
                <li className="me-1">
                  <a href="#" className="btn-round-lg bg-black">
                    <i className="font-xs ti-vimeo-alt text-white" />
                  </a>
                </li>
              </ul>
            </div>
            <h4 className="fw-700 font-xssss mt-4 text-grey-500 d-flex align-items-center mb-3">
              Copy Link
            </h4>
            <i className="feather-copy position-absolute left-15 ms-4 mt-3 font-xs text-grey-500" />
            <input
              type="text"
              defaultValue="https://socia.be/1rGxjoJKVF0"
              className="bg-grey text-grey-500 font-xssss border-0 lh-32 p-2 font-xssss fw-600 rounded-3 w-100 theme-dark-bg"
            />
          </div>
        </div>
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
              <div className="btn-round-md bg-greylight font-xss">
                <AiOutlineClose className="text-grey-900 font-lg fw-bolder" />
              </div>{" "}
            </a>
          </div>
        </div>
        <div className="card-body p-0 ms-lg-5">
          <p className="fw-500 text-grey-500 lh-26 font-xssss w-100 mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla
            dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus
            mollis pharetra. Proin blandit ac massa sed rhoncus{" "}
            <a href="#" className="fw-600 text-primary me-2">
              See more
            </a>
          </p>
        </div>
        <div className="card-body d-block p-0 mb-3">
          <div className="row pe-2 ps-2">
            <div className="col-sm-12 p-1">
              <Slide {...properties} indicators={true}>
                {slideImages.map((slideImage, index) => (
                  <div key={index}>
                    <div
                      onClick={() => setOpenPhoto(true)}
                      style={{
                        ...divStyle,
                        backgroundImage: `url(${slideImage.url})`,
                      }}
                    >
                      <span style={spanStyle}>{slideImage.caption}</span>
                    </div>
                  </div>
                ))}
              </Slide>
            </div>
          </div>
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
          <div
            className="dropdown-menu dropdown-menu-end p-4 rounded-xxl border-0 shadow-lg"
            aria-labelledby="dropdownMenu21"
          >
            <h4 className="fw-700 font-xss text-grey-900 d-flex align-items-center">
              Share{" "}
              <i className="feather-x me-auto font-xssss btn-round-xs bg-greylight text-grey-900 ms-2" />
            </h4>
            <div className="card-body p-0 d-flex">
              <ul className="d-flex align-items-center justify-content-between mt-2">
                <li>
                  <a href="#" className="btn-round-lg bg-pinterest">
                    <i className="font-xs ti-pinterest text-white" />
                  </a>
                </li>
                <li className="me-1">
                  <a href="#" className="btn-round-lg bg-facebook">
                    <i className="font-xs ti-facebook text-white" />
                  </a>
                </li>
                <li className="me-1">
                  <a href="#" className="btn-round-lg bg-twiiter">
                    <i className="font-xs ti-twitter-alt text-white" />
                  </a>
                </li>
                <li className="me-1">
                  <a href="#" className="btn-round-lg bg-linkedin">
                    <i className="font-xs ti-linkedin text-white" />
                  </a>
                </li>
                <li className="me-1">
                  <a href="#" className="btn-round-lg bg-instagram">
                    <i className="font-xs ti-instagram text-white" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="card-body p-0 d-flex">
              <ul className="d-flex align-items-center justify-content-between mt-2">
                <li>
                  <a href="#" className="btn-round-lg bg-whatsup">
                    <i className="font-xs feather-phone text-white" />
                  </a>
                </li>
                <li className="me-1">
                  <a href="#" className="btn-round-lg bg-tumblr">
                    <i className="font-xs ti-tumblr text-white" />
                  </a>
                </li>
                <li className="me-1">
                  <a href="#" className="btn-round-lg bg-youtube">
                    <i className="font-xs ti-youtube text-white" />
                  </a>
                </li>
                <li className="me-1">
                  <a href="#" className="btn-round-lg bg-flicker">
                    <i className="font-xs ti-flickr text-white" />
                  </a>
                </li>
                <li className="me-1">
                  <a href="#" className="btn-round-lg bg-black">
                    <i className="font-xs ti-vimeo-alt text-white" />
                  </a>
                </li>
              </ul>
            </div>
            <h4 className="fw-700 font-xssss mt-4 text-grey-500 d-flex align-items-center mb-3">
              Copy Link
            </h4>
            <i className="feather-copy position-absolute left-15 ms-4 mt-3 font-xs text-grey-500" />
            <input
              type="text"
              defaultValue="https://socia.be/1rGxjoJKVF0"
              className="bg-grey text-grey-500 font-xssss border-0 lh-32 p-2 font-xssss fw-600 rounded-3 w-100 theme-dark-bg"
            />
          </div>
        </div>
      </div>

      <Modal
        overlayOpacity={0.55}
        overlayBlur={3}
        size="55%"
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
      >
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
                <div className="btn-round-md bg-greylight font-xss">
                  <AiOutlineClose className="text-grey-900 font-lg fw-bolder" />
                </div>{" "}
              </a>
            </div>
          </div>
          <div className="card-body p-0 ms-lg-5">
            <p className="fw-500 text-grey-500 lh-26 font-xssss w-100 mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus
              faucibus mollis pharetra. Proin blandit ac massa sed rhoncus{" "}
              <a href="#" className="fw-600 text-primary me-2">
                See more
              </a>
            </p>
          </div>
          <div className="card-body d-block p-0 mb-3">
            <div className="row pe-2 ps-2">
              <div className="col-sm-12 p-1">
                <div className="slide-container">
                  <Slide {...properties} indicators={true}>
                    {slideImages.map((slideImage, index) => (
                      <div key={index}>
                        <div
                          onClick={() => setOpenPhoto(true)}
                          style={{
                            ...divStyle,
                            backgroundImage: `url(${slideImage.url})`,
                          }}
                        >
                          <span style={spanStyle}>{slideImage.caption}</span>
                        </div>
                      </div>
                    ))}
                  </Slide>
                </div>
              </div>
            </div>
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

            <Link
              to="/photo"
              className="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"
            >
              <div className="feather-message-circle text-dark text-grey-900 btn-round-sm ">
                <BsFillChatFill className="font-xss " />
              </div>
              <span className="d-none-xss">22 Comment</span>
            </Link>
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
            <div
              className="dropdown-menu dropdown-menu-end p-4 rounded-xxl border-0 shadow-lg"
              aria-labelledby="dropdownMenu21"
            >
              <h4 className="fw-700 font-xss text-grey-900 d-flex align-items-center">
                Share{" "}
                <i className="feather-x me-auto font-xssss btn-round-xs bg-greylight text-grey-900 ms-2" />
              </h4>
              <div className="card-body p-0 d-flex">
                <ul className="d-flex align-items-center justify-content-between mt-2">
                  <li>
                    <a href="#" className="btn-round-lg bg-pinterest">
                      <i className="font-xs ti-pinterest text-white" />
                    </a>
                  </li>
                  <li className="me-1">
                    <a href="#" className="btn-round-lg bg-facebook">
                      <i className="font-xs ti-facebook text-white" />
                    </a>
                  </li>
                  <li className="me-1">
                    <a href="#" className="btn-round-lg bg-twiiter">
                      <i className="font-xs ti-twitter-alt text-white" />
                    </a>
                  </li>
                  <li className="me-1">
                    <a href="#" className="btn-round-lg bg-linkedin">
                      <i className="font-xs ti-linkedin text-white" />
                    </a>
                  </li>
                  <li className="me-1">
                    <a href="#" className="btn-round-lg bg-instagram">
                      <i className="font-xs ti-instagram text-white" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card-body p-0 d-flex">
                <ul className="d-flex align-items-center justify-content-between mt-2">
                  <li>
                    <a href="#" className="btn-round-lg bg-whatsup">
                      <i className="font-xs feather-phone text-white" />
                    </a>
                  </li>
                  <li className="me-1">
                    <a href="#" className="btn-round-lg bg-tumblr">
                      <i className="font-xs ti-tumblr text-white" />
                    </a>
                  </li>
                  <li className="me-1">
                    <a href="#" className="btn-round-lg bg-youtube">
                      <i className="font-xs ti-youtube text-white" />
                    </a>
                  </li>
                  <li className="me-1">
                    <a href="#" className="btn-round-lg bg-flicker">
                      <i className="font-xs ti-flickr text-white" />
                    </a>
                  </li>
                  <li className="me-1">
                    <a href="#" className="btn-round-lg bg-black">
                      <i className="font-xs ti-vimeo-alt text-white" />
                    </a>
                  </li>
                </ul>
              </div>
              <h4 className="fw-700 font-xssss mt-4 text-grey-500 d-flex align-items-center mb-3">
                Copy Link
              </h4>
              <i className="feather-copy position-absolute left-15 ms-4 mt-3 font-xs text-grey-500" />
              <input
                type="text"
                defaultValue="https://socia.be/1rGxjoJKVF0"
                className="bg-grey text-grey-500 font-xssss border-0 lh-32 p-2 font-xssss fw-600 rounded-3 w-100 theme-dark-bg"
              />
            </div>
          </div>
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
      </Modal>
      <div
        id=""
        tabIndex={-1}
        className="row "
        style={{ display: "block", top: "2018px", left: "0px" }}
      >
        <Lightbox
          open={openPhoto}
          className="className="
          col-8
          close={() => setOpenPhoto(false)}
          // slides={slides.map((slide) => ({
          //   ...slide,
          //   download: `${slide.src}?download`,
          // }))}
          plugins={[Zoom, Download]}
          zoom={{ ref: zoomRef }}
          on={{
            click: () => zoomRef.current?.zoomIn(),
          }}
          slides={[
            {
              src: { img },
              alt: "image 1",
              width: 3840,
              height: 2560,
              srcSet: [
                { src: img, width: 320, height: 213 },
                {
                  src: img,
                  width: 640,
                  height: 427,
                  downloadUrl: "/image2.png",
                },
                {
                  src: img,
                  width: 1200,
                  height: 800,
                  downloadFilename: "puppy_in_sunglasses",
                },
                // { src: "/image1x2048.jpg", width: 2048, height: 1365 },
                // { src: "/image1x3840.jpg", width: 3840, height: 2560 },
              ],
            },
          ]}
        />
      </div>
    </div>
  );
}

export default Posts;
