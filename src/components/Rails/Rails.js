import React from "react";
import ralis1 from "../../assets/Ralis/3c4b3499068c07c32f99ebd23812cb68.mp4";

import heart from "../../assets/svg/heart.svg";
import like from "../../assets/svg/like.svg";
import share from "../../assets/svg/share.svg";
import comment from "../../assets/svg/comment.svg";
import img from "../../assets/img/drake.jpg";
import "./Rails.scss";
import { FiMoreHorizontal } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";
import { BiShare } from "react-icons/bi";
import { BsFillChatFill } from "react-icons/bs";
function Rails() {
  return (
    <div className="rails">
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
              <video width="100%" height="400" controls>
                <source src={ralis1} type="video/mp4" />
              </video>
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

          <div className="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss">
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
    </div>
  );
}

export default Rails;
