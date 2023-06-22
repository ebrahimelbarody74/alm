import React from "react";
import profile from "../../assets/img/img/profile.jpg";
import LiveVideo from "../../assets/svg/live_video.svg";
import photo from "../../assets/svg/photo.svg";
import smile from "../../assets/svg/smile.svg";
import "./Share.scss";
import { AiOutlineEdit } from "react-icons/ai";
import { RiLiveFill } from "react-icons/ri";
import { BiImageAdd } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";
function Share() {
  return (
    <div className="card w-100 shadow-xss rounded-xxl border-0 pe-4 pt-4 ps-4 pb-3 mb-3 ">
      <div className="card-body p-0">
        <a
          href="#"
          className=" font-xssss fw-600 text-grey-500 card-body p-0 d-flex align-items-center"
        >
          <div className="text-primary  ms-2 bg-greylight btn-round-sm  ">
            <AiOutlineEdit className="font-xs" />
          </div>
          Create Post
        </a>
      </div>
      <div className="card-body p-0 mt-3 position-relative">
        <figure className="avatar position-absolute me-2 mt-1 top-5">
          <img
            src={profile}
            alt="image"
            className="shadow-sm rounded-circle w30"
          />
        </figure>
        <textarea
          name="message"
          className="h100 bor-0 w-100 rounded-xxl p-2 pe-5 font-xssss text-grey-500 fw-500 border-light-md theme-dark-bg"
          cols={30}
          rows={10}
          placeholder="What's on your mind?"
          defaultValue={""}
        />
      </div>
      <div className="card-body d-flex p-0 mt-0">
        <a
          href="#"
          className="d-flex align-items-center font-xssss fw-600 ls-1 text-grey-700 text-dark ps-4"
        >
          <RiLiveFill className="text-danger feather-video ms-2 font-md" />
          <span className="d-none-xs">Live Video</span>
        </a>
        <a
          href="#"
          className="d-flex align-items-center font-xssss fw-600 ls-1 text-grey-700 text-dark ps-4"
        >
          <BiImageAdd className="text-success feather-image ms-2 font-md" />
          <span className="d-none-xs">Photo/Video</span>
        </a>
        {/* <a
          href="#"
          className="d-flex align-items-center font-xssss fw-600 ls-1 text-grey-700 text-dark ps-4"
        >
          <i className="font-md text-warning feather-camera ms-2" />
          <span className="d-none-xs">Feeling/Activity</span>
        </a> */}
        <a
          href="#"
          className="me-auto"
          id="dropdownMenu4"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <div className=" btn-round-md bg-greylight font-xss">
            <FiMoreHorizontal className=" text-grey-900" />
          </div>
        </a>
        <div
          className="dropdown-menu dropdown-menu-start p-4 rounded-xxl border-0 shadow-lg"
          aria-labelledby="dropdownMenu4"
        >
          <div className="card-body p-0 d-flex">
            <i className="feather-bookmark text-grey-500 ms-3 font-lg" />
            <h4 className="fw-600 text-grey-900 font-xssss mt-0 ms-4">
              Save Link{" "}
              <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                Add this to your saved items
              </span>
            </h4>
          </div>
          <div className="card-body p-0 d-flex mt-2">
            <i className="feather-alert-circle text-grey-500 ms-3 font-lg" />
            <h4 className="fw-600 text-grey-900 font-xssss mt-0 ms-4">
              Hide Post{" "}
              <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                Save to your saved items
              </span>
            </h4>
          </div>
          <div className="card-body p-0 d-flex mt-2">
            <i className="feather-alert-octagon text-grey-500 ms-3 font-lg" />
            <h4 className="fw-600 text-grey-900 font-xssss mt-0 ms-4">
              Hide all from Group{" "}
              <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                Save to your saved items
              </span>
            </h4>
          </div>
          <div className="card-body p-0 d-flex mt-2">
            <i className="feather-lock text-grey-500 ms-3 font-lg" />
            <h4 className="fw-600 mb-0 text-grey-900 font-xssss mt-0 ms-4">
              Unfollow Group{" "}
              <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                Save to your saved items
              </span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Share;
