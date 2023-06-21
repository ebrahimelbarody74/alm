import React, { useState } from "react";
import ReactPanZoom from "react-image-pan-zoom-rotate";
import img from "../../assets/img/drake.jpg";
import "./OpenPhoto.scss";
import { AiTwotoneLike, AiFillHeart, AiOutlineLike } from "react-icons/ai";
import { FaRegLaughSquint } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";
import { BsCamera } from "react-icons/bs";
import heart from "../../assets/svg/heart.svg";
import like from "../../assets/svg/like.svg";
import share from "../../assets/svg/share.svg";
import comment from "../../assets/svg/comment.svg";
import InputEmoji from "react-input-emoji";
import Flickity from "react-flickity-component";
import { Link, useNavigate } from "react-router-dom";
// import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Download from "yet-another-react-lightbox/plugins/download";
// import FsLightbox from "fslightbox-react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

import { useRef } from "react";
import { SlideshowLightbox } from "lightbox.js-react";
function OpenPhoto() {
  const [event, setEvent] = useState(false);
  const [react, setReact] = useState("");
  const [text, setText] = useState("");
  function handleOnEnter(text) {
    console.log("enter", text);
  }
  const flickityOptions = {
    initialIndex: 1,
  };
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const zoomRef = useRef(null);
  const [toggler, setToggler] = useState(false);
  const images = [img, img, img, img];

  return (
    <div className="openPhoto">
      <span className="closePhoto" onClick={goBack}>
        X
      </span>
      <div className="left">
        <div className="right-comment chat-left scroll-bar theme-dark-bg col-4">
          <div className="card-body ps-2 pe-4 pb-0 d-flex">
            {" "}
            <figure className="avatar ms-3">
              <img
                src="../images/user-8.png"
                alt="image"
                className="shadow-sm rounded-circle w45"
              />
            </figure>
            <h4 className="fw-700 text-grey-900 font-xssss mt-1 text-left">
              Hurin Seary{" "}
              <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">
                2 hour ago
              </span>
            </h4>{" "}
            <a href="#" className="me-auto">
              <i className="ti-more-alt text-grey-900 btn-round-md bg-greylight font-xss" />
            </a>
          </div>
          <div className="card-body d-flex ps-2 pe-4 pt-0 mt-0">
            {" "}
            <a
              href="#"
              className="d-flex align-items-center fw-600 text-grey-900 lh-26 font-xssss ms-3 text-dark"
            >
              <i className="feather-thumbs-up text-white bg-primary-gradiant me-1 btn-round-xs font-xss" />{" "}
              <i className="feather-heart text-white bg-red-gradiant ms-2 btn-round-xs font-xss" />
              2.8K Like
            </a>{" "}
            <a
              href="#"
              className="d-flex align-items-center fw-600 text-grey-900 lh-26 font-xssss text-dark"
            >
              <i className="feather-message-circle text-grey-900 btn-round-sm font-lg text-dark" />
              22 Comment
            </a>
          </div>
          <div className="card w-100 border-0 shadow-none right-scroll-bar">
            <div className="card-body border-top-xs pt-4 pb-3 pe-4 d-block ps-5">
              {" "}
              <figure className="avatar position-absolute left-0 ms-2 mt-1">
                <img
                  src="../images/user-6.png"
                  alt="image"
                  className="shadow-sm rounded-circle w35"
                />
              </figure>
              <div className="chat p-3 bg-greylight rounded-xxl d-block text-left theme-dark-bg">
                <h4 className="fw-700 text-grey-900 font-xssss mt-0 mb-1">
                  Victor Exrixon{" "}
                  <a href="#" className="ms-auto">
                    <i className="ti-more-alt float-right text-grey-800 font-xsss" />
                  </a>
                </h4>
                <p className="fw-500 text-grey-500 lh-20 font-xssss w-100 mt-2 mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  nulla dolor.
                </p>
              </div>
            </div>
            <div className="card-body pt-0 pb-3 pe-4 d-block ps-5">
              {" "}
              <figure className="avatar position-absolute left-0 ms-2 mt-1">
                <img
                  src="../images/user-4.png"
                  alt="image"
                  className="shadow-sm rounded-circle w35"
                />
              </figure>
              <div className="chat p-3 bg-greylight rounded-xxl d-block text-left theme-dark-bg">
                <h4 className="fw-700 text-grey-900 font-xssss mt-0 mb-1">
                  Surfiya Zakir{" "}
                  <a href="#" className="ms-auto">
                    <i className="ti-more-alt float-right text-grey-800 font-xsss" />
                  </a>
                </h4>
                <p className="fw-500 text-grey-500 lh-20 font-xssss w-100 mt-2 mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  nulla dolor.
                </p>
              </div>
            </div>
            <div className="card-body pt-0 pb-3 pe-4 d-block ps-5 ms-5 position-relative">
              {" "}
              <figure className="avatar position-absolute left-0 ms-2 mt-1">
                <img
                  src="../images/user-3.png"
                  alt="image"
                  className="shadow-sm rounded-circle w35"
                />
              </figure>
              <div className="chat p-3 bg-greylight rounded-xxl d-block text-left theme-dark-bg">
                <h4 className="fw-700 text-grey-900 font-xssss mt-0 mb-1">
                  Goria Coast{" "}
                  <a href="#" className="ms-auto">
                    <i className="ti-more-alt float-right text-grey-800 font-xsss" />
                  </a>
                </h4>
                <p className="fw-500 text-grey-500 lh-20 font-xssss w-100 mt-2 mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="card-body pt-0 pb-3 pe-4 d-block ps-5 ms-5 position-relative">
              {" "}
              <figure className="avatar position-absolute left-0 ms-2 mt-1">
                <img
                  src="../images/user-3.png"
                  alt="image"
                  className="shadow-sm rounded-circle w35"
                />
              </figure>
              <div className="chat p-3 bg-greylight rounded-xxl d-block text-left theme-dark-bg">
                <h4 className="fw-700 text-grey-900 font-xssss mt-0 mb-1">
                  Hurin Seary{" "}
                  <a href="#" className="ms-auto">
                    <i className="ti-more-alt float-right text-grey-800 font-xsss" />
                  </a>
                </h4>
                <p className="fw-500 text-grey-500 lh-20 font-xssss w-100 mt-2 mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="card-body pt-0 pb-3 pe-4 d-block ps-5 ms-5 position-relative">
              {" "}
              <figure className="avatar position-absolute left-0 ms-2 mt-1">
                <img
                  src="../images/user-3.png"
                  alt="image"
                  className="shadow-sm rounded-circle w35"
                />
              </figure>
              <div className="chat p-3 bg-greylight rounded-xxl d-block text-left theme-dark-bg">
                <h4 className="fw-700 text-grey-900 font-xssss mt-0 mb-1">
                  David Goria{" "}
                  <a href="#" className="ms-auto">
                    <i className="ti-more-alt float-right text-grey-800 font-xsss" />
                  </a>
                </h4>
                <p className="fw-500 text-grey-500 lh-20 font-xssss w-100 mt-2 mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="card-body pt-0 pb-3 pe-4 d-block ps-5">
              {" "}
              <figure className="avatar position-absolute left-0 ms-2 mt-1">
                <img
                  src="../images/user-4.png"
                  alt="image"
                  className="shadow-sm rounded-circle w35"
                />
              </figure>
              <div className="chat p-3 bg-greylight rounded-xxl d-block text-left theme-dark-bg">
                <h4 className="fw-700 text-grey-900 font-xssss mt-0 mb-1">
                  Seary Victor{" "}
                  <a href="#" className="ms-auto">
                    <i className="ti-more-alt float-right text-grey-800 font-xsss" />
                  </a>
                </h4>
                <p className="fw-500 text-grey-500 lh-20 font-xssss w-100 mt-2 mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  nulla dolor.
                </p>
              </div>
            </div>
            <div className="card-body pt-0 pb-3 pe-4 d-block ps-5">
              {" "}
              <figure className="avatar position-absolute left-0 ms-2 mt-1">
                <img
                  src="../images/user-4.png"
                  alt="image"
                  className="shadow-sm rounded-circle w35"
                />
              </figure>
              <div className="chat p-3 bg-greylight rounded-xxl d-block text-left theme-dark-bg">
                <h4 className="fw-700 text-grey-900 font-xssss mt-0 mb-1">
                  Ana Seary{" "}
                  <a href="#" className="ms-auto">
                    <i className="ti-more-alt float-right text-grey-800 font-xsss" />
                  </a>
                </h4>
                <p className="fw-500 text-grey-500 lh-20 font-xssss w-100 mt-2 mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  nulla dolor.
                </p>
              </div>
            </div>
            <div className="card-body pt-0 pb-3 pe-4 d-block ps-5">
              {" "}
              <figure className="avatar position-absolute left-0 ms-2 mt-1">
                <img
                  src="../images/user-4.png"
                  alt="image"
                  className="shadow-sm rounded-circle w35"
                />
              </figure>
              <div className="chat p-3 bg-greylight rounded-xxl d-block text-left theme-dark-bg">
                <h4 className="fw-700 text-grey-900 font-xssss mt-0 mb-1">
                  Studio Express{" "}
                  <a href="#" className="ms-auto">
                    <i className="ti-more-alt float-right text-grey-800 font-xsss" />
                  </a>
                </h4>
                <p className="fw-500 text-grey-500 lh-20 font-xssss w-100 mt-2 mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  nulla dolor.
                </p>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="right d-flex align-items-center justify-content-center vh-100 ">
        {/* <Flickity
          className={"carousel"} // default ''
          elementType={"div"} // default 'div'
          options={flickityOptions} // takes flickity options {}
          disableImagesLoaded={false} // default false
          reloadOnUpdate // default false
          static // default false
        >
          <div className="img">
            <ReactPanZoom image={img} alt="Image alt text" />
          </div>
          <div className="img">
            <ReactPanZoom image={heart} alt="Image alt text" />
          </div>
          <div className="img">
            <ReactPanZoom image={img} alt="Image alt text" />
          </div>
          <div className="img">
            <ReactPanZoom image={img} alt="Image alt text" />
          </div>
        </Flickity> */}
        <SlideshowLightbox
          slideshowInterval
          className="container  d-flex flex-wrap gap-3 mx-auto align-items-center justify-content-center"
        >
          <img
            className="w-full rounded"
            src="https://source.unsplash.com/pAKCx4y2H6Q/1400x1200"
          />
          <img
            className="w-full rounded"
            src="https://source.unsplash.com/AYS2sSAMyhc/1400x1200"
          />
          <img
            className="w-full rounded"
            src="https://source.unsplash.com/Kk8mEQAoIpI/1600x1200"
          />
          <img
            className="w-full rounded"
            src="https://source.unsplash.com/HF3X2TWv1-w/1600x1200"
          />
        </SlideshowLightbox>
      </div>
    </div>
  );
}

export default OpenPhoto;
