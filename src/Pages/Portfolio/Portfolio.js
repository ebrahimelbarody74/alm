import React, { useState } from "react";
import Share from "../../components/Share/Share";
import Posts from "../../components/Posts/Posts";
import profile from "../../assets/img/img/profile.jpg";
import cover from "../../assets/img/bg-pricing.jpg";
import { HiPlus } from "react-icons/hi";
import { BsChatText } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";
import img from "../../assets/img/drake.jpg";
import video from "../../assets/video/fafe0f5fb651477068acd815c0902694.mp4";
import { BsFillSendFill } from "react-icons/bs";
import { HiMinus } from "react-icons/hi";
import { MdOutlineEditNote } from "react-icons/md";
function Portfolio() {
  const [active, setActive] = useState("posts");
  return (
    <div className="middle-sidebar-left">
      <div className="row">
        <div className="col-lg-12">
          <div className="card w-100 border-0 p-0 bg-white shadow-xss rounded-xxl">
            <div className="card-body h300 p-0 rounded-xxl overflow-hidden m-3">
              <img src={cover} alt="image" />
            </div>
            <div className="card-body p-0 position-relative">
              <figure
                className="avatar position-absolute w100 z-index-1"
                style={{ top: "-40px", right: "30px" }}
              >
                <img
                  src={profile}
                  alt="image"
                  className="float-right p-1 bg-white rounded-circle h-100px w-100"
                />
              </figure>
              <h4 className="fw-700 font-sm mt-2 mb-lg-5 mb-4 pr-15">
                Mohannad Zitoun{" "}
                <span className="fw-500 font-xssss text-grey-500 mt-1 mb-3 d-block">
                  support@gmail.com
                </span>
              </h4>
              <div className="d-flex align-items-center justify-content-center position-absolute-md left-15 top-0 ms-2">
                <a
                  href="#"
                  className="d-none d-lg-block bg-success p-3 z-index-1 rounded-3 text-white font-xsssss text-uppercase fw-700 ls-3"
                >
                  Add Friend
                  <HiPlus className="font-xss me-2" />
                </a>
                <a
                  href="#"
                  className="d-none d-lg-block bg-greylight btn-round-lg me-2 rounded-3 text-grey-700"
                >
                  <BsChatText className="font-lg" />
                </a>
                <a
                  href="#"
                  id="dropdownMenu4"
                  className="d-none d-lg-block bg-greylight btn-round-lg me-2 rounded-3 text-grey-700"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <FiMoreHorizontal className="font-lg" />
                </a>
                <div
                  className="dropdown-menu dropdown-menu-end p-4 rounded-xxl border-0 shadow-lg"
                  aria-labelledby="dropdownMenu4"
                >
                  <div className="card-body p-0 d-flex">
                    <i className="feather-bookmark text-grey-500 ms-3 font-lg" />
                    <h4 className="fw-600 text-grey-900 font-xssss mt-0 ms-0">
                      Save Link{" "}
                      <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                        Add this to your saved items
                      </span>
                    </h4>
                  </div>
                  <div className="card-body p-0 d-flex mt-2">
                    <i className="feather-alert-circle text-grey-500 ms-3 font-lg" />
                    <h4 className="fw-600 text-grey-900 font-xssss mt-0 ms-0">
                      Hide Post{" "}
                      <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                        Save to your saved items
                      </span>
                    </h4>
                  </div>
                  <div className="card-body p-0 d-flex mt-2">
                    <i className="feather-alert-octagon text-grey-500 ms-3 font-lg" />
                    <h4 className="fw-600 text-grey-900 font-xssss mt-0 ms-0">
                      Hide all from Group{" "}
                      <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                        Save to your saved items
                      </span>
                    </h4>
                  </div>
                  <div className="card-body p-0 d-flex mt-2">
                    <i className="feather-lock text-grey-500 ms-3 font-lg" />
                    <h4 className="fw-600 mb-0 text-grey-900 font-xssss mt-0 ms-0">
                      Unfollow Group{" "}
                      <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                        Save to your saved items
                      </span>
                    </h4>
                  </div>
                </div>
              </div>
              {/* <div className="d-flex align-items-center justify-content-center position-absolute-md left-15 top-0 ms-2">
                <a
                  href="#"
                  className="d-none d-lg-block bg-success p-2 z-index-1 rounded-3 text-white font-xsssss text-uppercase fw-700 ls-3"
                >
                  Edit Porfile
                  <MdOutlineEditNote className="font-xl me-2" />
                </a>

                <a
                  href="#"
                  id="dropdownMenu4"
                  className="d-none d-lg-block bg-greylight btn-round-lg me-2 rounded-3 text-grey-700"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <FiMoreHorizontal className="font-lg" />
                </a>
                <div
                  className="dropdown-menu dropdown-menu-end p-4 rounded-xxl border-0 shadow-lg"
                  aria-labelledby="dropdownMenu4"
                >
                  <div className="card-body p-0 d-flex">
                    <i className="feather-bookmark text-grey-500 ms-3 font-lg" />
                    <h4 className="fw-600 text-grey-900 font-xssss mt-0 ms-0">
                      Save Link{" "}
                      <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                        Add this to your saved items
                      </span>
                    </h4>
                  </div>
                  <div className="card-body p-0 d-flex mt-2">
                    <i className="feather-alert-circle text-grey-500 ms-3 font-lg" />
                    <h4 className="fw-600 text-grey-900 font-xssss mt-0 ms-0">
                      Hide Post{" "}
                      <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                        Save to your saved items
                      </span>
                    </h4>
                  </div>
                  <div className="card-body p-0 d-flex mt-2">
                    <i className="feather-alert-octagon text-grey-500 ms-3 font-lg" />
                    <h4 className="fw-600 text-grey-900 font-xssss mt-0 ms-0">
                      Hide all from Group{" "}
                      <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                        Save to your saved items
                      </span>
                    </h4>
                  </div>
                  <div className="card-body p-0 d-flex mt-2">
                    <i className="feather-lock text-grey-500 ms-3 font-lg" />
                    <h4 className="fw-600 mb-0 text-grey-900 font-xssss mt-0 ms-0">
                      Unfollow Group{" "}
                      <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                        Save to your saved items
                      </span>
                    </h4>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="card w-100  rounded-xxl border-0 mb-3">
              <div className="card-body d-block p-4">
                <h4 className="fw-700 mb-3 font-xsss text-grey-900">About</h4>
                <p className="fw-500 text-grey-500 lh-24 font-xssss mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  nulla dolor, ornare at commodo non, feugiat non nisi.
                  Phasellus faucibus mollis pharetra. Proin blandit ac massa sed
                  rhoncus
                </p>
              </div>
            </div>
            <div className="card-body d-block w-100 shadow-none mb-0 p-0 border-top-xs">
              <ul
                className="nav nav-tabs h55 d-flex product-info-tab border-bottom-0 pe-4"
                id="pills-tab"
                role="tablist"
              >
                <li
                  className="active list-inline-item ms-5 cursor-pointer"
                  onClick={() => setActive("posts")}
                >
                  <div
                    className={
                      active === "posts"
                        ? "fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block active"
                        : "fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block "
                    }
                    data-toggle="tab"
                  >
                    المنشورات
                  </div>
                </li>
                <li
                  className="list-inline-item ms-5 cursor-pointer"
                  onClick={() => setActive("about")}
                >
                  <div
                    className={
                      active === "about"
                        ? "fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block active"
                        : "fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block "
                    }
                    data-toggle="tab"
                  >
                    حول
                  </div>
                </li>
                <li
                  className="list-inline-item ms-5 cursor-pointer"
                  onClick={() => setActive("photo")}
                >
                  <div
                    className={
                      active === "photo"
                        ? "fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block active"
                        : "fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block "
                    }
                    data-toggle="tab"
                  >
                    الصور
                  </div>
                </li>
                <li
                  className="list-inline-item ms-5 cursor-pointer"
                  onClick={() => setActive("video")}
                >
                  <div
                    className={
                      active === "video"
                        ? "fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block active"
                        : "fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block "
                    }
                    data-toggle="tab"
                  >
                    الفيديوهات
                  </div>
                </li>
                <li
                  className="list-inline-item ms-5 cursor-pointer"
                  onClick={() => setActive("friends")}
                >
                  <div
                    className={
                      active === "friends"
                        ? "fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block active"
                        : "fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block "
                    }
                    data-toggle="tab"
                  >
                    الاصدقاء
                  </div>
                </li>
                {/* <li className="list-inline-item ms-5">
                  <div
                    className="fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block"
                    
                    data-toggle="tab"
                  >
                    الرياضه
                  </div>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xl-12 col-xxl-12 col-lg-12 mt-3 mb-3">
          {active === "posts" ? (
            <>
              <Share />
              <Posts />
            </>
          ) : active === "about" ? (
            <>
              <div className="card  w-100 shadow-xss rounded-xxl border-0  ">
                <div className="card-body d-block p-4">
                  <h4 className="fw-700 mb-3 font-xsss text-grey-900">About</h4>
                  <p className="fw-500 text-grey-500 lh-24 font-xssss mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi nulla dolor, ornare at commodo non, feugiat non nisi.
                    Phasellus faucibus mollis pharetra. Proin blandit ac massa
                    sed rhoncus
                  </p>
                </div>
                <div className="card-body border-top-xs d-flex">
                  <i className="feather-lock text-grey-500 ms-3 font-lg" />
                  <h4 className="fw-700 text-grey-900 font-xssss mt-0">
                    Private{" "}
                    <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">
                      What's up, how are you?
                    </span>
                  </h4>
                </div>
                <div className="card-body d-flex pt-0">
                  <i className="feather-eye text-grey-500 ms-3 font-lg" />
                  <h4 className="fw-700 text-grey-900 font-xssss mt-0">
                    Visble{" "}
                    <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">
                      Anyone can find you
                    </span>
                  </h4>
                </div>
                <div className="card-body d-flex pt-0">
                  <i className="feather-map-pin text-grey-500 ms-3 font-lg" />
                  <h4 className="fw-700 text-grey-900 font-xssss mt-1">
                    Flodia, Austia{" "}
                  </h4>
                </div>
                <div className="card-body d-flex pt-0">
                  <i className="feather-users text-grey-500 ms-3 font-lg" />
                  <h4 className="fw-700 text-grey-900 font-xssss mt-1">
                    Genarel Group
                  </h4>
                </div>
              </div>
              <div className="card w-100 shadow-xss rounded-xxl border-0 mt-3 mb-3">
                <div className="card-body d-flex align-items-center  p-4">
                  <h4 className="fw-700 mb-0 font-xssss text-grey-900">
                    Photos
                  </h4>
                  <a
                    href="#"
                    className="fw-600 me-auto font-xssss text-primary"
                  >
                    See all
                  </a>
                </div>
                <div className="card-body d-block pt-0 pb-2">
                  <div className="row">
                    <div className="col-4 col-xl-3 col-xxl-3 mb-2 p-2 ">
                      <a href="images/e-2.jpg" data-lightbox="roadtrip">
                        <img
                          src={img}
                          alt="image"
                          className="img-fluid rounded-3 w-100"
                        />
                      </a>
                    </div>
                    <div className="col-4 col-xl-3 col-xxl-3 mb-2 p-2 ">
                      <a href="images/e-3.jpg" data-lightbox="roadtrip">
                        <img
                          src={img}
                          alt="image"
                          className="img-fluid rounded-3 w-100"
                        />
                      </a>
                    </div>
                    <div className="col-4 col-xl-3 col-xxl-3 mb-2 p-2 ">
                      <a href="images/e-4.jpg" data-lightbox="roadtrip">
                        <img
                          src={img}
                          alt="image"
                          className="img-fluid rounded-3 w-100"
                        />
                      </a>
                    </div>
                    <div className="col-4 col-xl-3 col-xxl-3 mb-2 p-2 ">
                      <a href="images/e-5.jpg" data-lightbox="roadtrip">
                        <img
                          src={img}
                          alt="image"
                          className="img-fluid rounded-3 w-100"
                        />
                      </a>
                    </div>
                    <div className="col-4 col-xl-3 col-xxl-3 mb-2 p-2 ">
                      <a href="images/e-2.jpg" data-lightbox="roadtrip">
                        <img
                          src={img}
                          alt="image"
                          className="img-fluid rounded-3 w-100"
                        />
                      </a>
                    </div>
                    <div className="col-4 col-xl-3 col-xxl-3 mb-2 p-2 ">
                      <a href="images/e-1.jpg" data-lightbox="roadtrip">
                        <img
                          src={img}
                          alt="image"
                          className="img-fluid rounded-3 w-100"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-body d-block w-100 pt-0">
                  <a
                    href="#"
                    className="p-2 lh-28 w-100 d-block bg-grey text-grey-800 text-center font-xssss fw-700 rounded-xl"
                  >
                    <i className="feather-external-link font-xss ms-2" /> More
                  </a>
                </div>
              </div>
            </>
          ) : active === "photo" ? (
            <div className="row pe-2 ps-2 ">
              <div className="col-md-4 col-sm-6 ps-2 pe-2">
                <div className="card d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3">
                  <div className="card-body d-block w-100 pe-3 ps-3 pb-4 text-center">
                    <video width="100%" height="auto" controls>
                      <source src={video} type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 ps-2 pe-2">
                <div className="card d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3">
                  <div className="card-body d-block w-100 pe-3 ps-3 pb-4 text-center">
                    <video width="100%" height="auto" controls>
                      <source src={video} type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 ps-2 pe-2">
                <div className="card d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3">
                  <div className="card-body d-block w-100 pe-3 ps-3 pb-4 text-center">
                    <video width="100%" height="auto" controls>
                      <source src={video} type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 ps-2 pe-2">
                <div className="card d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3">
                  <div className="card-body d-block w-100 pe-3 ps-3 pb-4 text-center">
                    <video width="100%" height="auto" controls>
                      <source src={video} type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 ps-2 pe-2">
                <div className="card d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3">
                  <div className="card-body d-block w-100 pe-3 ps-3 pb-4 text-center">
                    <video width="100%" height="auto" controls>
                      <source src={video} type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 ps-2 pe-2">
                <div className="card d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3">
                  <div className="card-body d-block w-100 pe-3 ps-3 pb-4 text-center">
                    <video width="100%" height="auto" controls>
                      <source src={video} type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 ps-2 pe-2">
                <div className="card d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3">
                  <div className="card-body d-block w-100 pe-3 ps-3 pb-4 text-center">
                    <video width="100%" height="auto" controls>
                      <source src={video} type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 ps-2 pe-2">
                <div className="card d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3">
                  <div className="card-body d-block w-100 pe-3 ps-3 pb-4 text-center">
                    <video width="100%" height="auto" controls>
                      <source src={video} type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 ps-2 pe-2">
                <div className="card d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3">
                  <div className="card-body d-block w-100 pe-3 ps-3 pb-4 text-center">
                    <video width="100%" height="auto" controls>
                      <source src={video} type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 ps-2 pe-2">
                <div className="card d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3">
                  <div className="card-body d-block w-100 pe-3 ps-3 pb-4 text-center">
                    <video width="100%" height="auto" controls>
                      <source src={video} type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 ps-2 pe-2">
                <div className="card d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3">
                  <div className="card-body d-block w-100 pe-3 ps-3 pb-4 text-center">
                    <video width="100%" height="auto" controls>
                      <source src={video} type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          ) : active === "video" ? (
            <div className="row pe-2 ps-2 ">
              <div className="col-md-4 col-sm-6 ps-2 pe-2">
                <div className="card d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3">
                  <div className="card-body d-block w-100 pe-3 ps-3 pb-4 text-center">
                    <video width="100%" height="auto" controls>
                      <source src={video} type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 ps-2 pe-2">
                <div className="card d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3">
                  <div className="card-body d-block w-100 pe-3 ps-3 pb-4 text-center">
                    <video width="100%" height="auto" controls>
                      <source src={video} type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 ps-2 pe-2">
                <div className="card d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3">
                  <div className="card-body d-block w-100 pe-3 ps-3 pb-4 text-center">
                    <video width="100%" height="auto" controls>
                      <source src={video} type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 ps-2 pe-2">
                <div className="card d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3">
                  <div className="card-body d-block w-100 pe-3 ps-3 pb-4 text-center">
                    <video width="100%" height="auto" controls>
                      <source src={video} type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 ps-2 pe-2">
                <div className="card d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3">
                  <div className="card-body d-block w-100 pe-3 ps-3 pb-4 text-center">
                    <video width="100%" height="auto" controls>
                      <source src={video} type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 ps-2 pe-2">
                <div className="card d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3">
                  <div className="card-body d-block w-100 pe-3 ps-3 pb-4 text-center">
                    <video width="100%" height="auto" controls>
                      <source src={video} type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 ps-2 pe-2">
                <div className="card d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3">
                  <div className="card-body d-block w-100 pe-3 ps-3 pb-4 text-center">
                    <video width="100%" height="auto" controls>
                      <source src={video} type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 ps-2 pe-2">
                <div className="card d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3">
                  <div className="card-body d-block w-100 pe-3 ps-3 pb-4 text-center">
                    <video width="100%" height="auto" controls>
                      <source src={video} type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 ps-2 pe-2">
                <div className="card d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3">
                  <div className="card-body d-block w-100 pe-3 ps-3 pb-4 text-center">
                    <video width="100%" height="auto" controls>
                      <source src={video} type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 ps-2 pe-2">
                <div className="card d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3">
                  <div className="card-body d-block w-100 pe-3 ps-3 pb-4 text-center">
                    <video width="100%" height="auto" controls>
                      <source src={video} type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 ps-2 pe-2">
                <div className="card d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3">
                  <div className="card-body d-block w-100 pe-3 ps-3 pb-4 text-center">
                    <video width="100%" height="auto" controls>
                      <source src={video} type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="row pe-2 ps-2">
              <div className="col-md-4 col-sm-6 ps-2 pe-2">
                <div className="card d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3">
                  <div className="card-body d-block w-100 pe-3 ps-3 pb-4 text-center">
                    <figure className="avatar me-auto ms-auto mb-0 position-relative w65 z-index-1">
                      <img
                        src={img}
                        alt="image"
                        className="float-right p-0 bg-white rounded-circle w-100 shadow-xss"
                      />
                    </figure>
                    <div className="clearfix" />
                    <h4 className="fw-700 font-xsss mt-3 mb-1">Goria Coast </h4>
                    <p className="fw-500 font-xsssss text-grey-500 mt-0 mb-3">
                      @macale343
                    </p>
                    <div className="d-flex gap-3 justify-content-center">
                      <a
                        href="#"
                        className="mt-0 btn pt-2 pb-2 pe-3 ps-3 font-xssss lh-24 me-1 ls-3 d-inline-block rounded-xl bg-danger font-xsssss fw-700 ls-lg text-white"
                      >
                        UNFRIEND
                        <HiMinus className="font-xs me-2 text-white" />
                      </a>
                      <a
                        href="#"
                        className="mt-0 btn pt-2 d-flex gap-2 font-xssss align-items-center pb-2 pe-3 ps-3 lh-24 me-1 ls-3 d-inline-block rounded-xl bg-messenger font-xsssss fw-700 ls-lg text-white"
                      >
                        Send
                        <BsFillSendFill className={`font-xsss `} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 ps-2 pe-2">
                <div className="card d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3">
                  <div className="card-body d-block w-100 pe-3 ps-3 pb-4 text-center">
                    <figure className="avatar me-auto ms-auto mb-0 position-relative w65 z-index-1">
                      <img
                        src={img}
                        alt="image"
                        className="float-right p-0 bg-white rounded-circle w-100 shadow-xss"
                      />
                    </figure>
                    <div className="clearfix" />
                    <h4 className="fw-700 font-xsss mt-3 mb-1">Goria Coast </h4>
                    <p className="fw-500 font-xsssss text-grey-500 mt-0 mb-3">
                      @macale343
                    </p>
                    <div className="d-flex gap-3 justify-content-center">
                      <a
                        href="#"
                        className="mt-0 btn pt-2 pb-2 pe-3 ps-3 font-xssss lh-24 me-1 ls-3 d-inline-block rounded-xl bg-danger font-xsssss fw-700 ls-lg text-white"
                      >
                        UNFRIEND
                        <HiMinus className="font-xs me-2 text-white" />
                      </a>
                      <a
                        href="#"
                        className="mt-0 btn pt-2 d-flex gap-2 font-xssss align-items-center pb-2 pe-3 ps-3 lh-24 me-1 ls-3 d-inline-block rounded-xl bg-messenger font-xsssss fw-700 ls-lg text-white"
                      >
                        Send
                        <BsFillSendFill className={`font-xsss `} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 ps-2 pe-2">
                <div className="card d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3">
                  <div className="card-body d-block w-100 pe-3 ps-3 pb-4 text-center">
                    <figure className="avatar me-auto ms-auto mb-0 position-relative w65 z-index-1">
                      <img
                        src={img}
                        alt="image"
                        className="float-right p-0 bg-white rounded-circle w-100 shadow-xss"
                      />
                    </figure>
                    <div className="clearfix" />
                    <h4 className="fw-700 font-xsss mt-3 mb-1">Goria Coast </h4>
                    <p className="fw-500 font-xsssss text-grey-500 mt-0 mb-3">
                      @macale343
                    </p>
                    <div className="d-flex gap-3 justify-content-center">
                      <a
                        href="#"
                        className="mt-0 btn pt-2 pb-2 pe-3 ps-3 font-xssss lh-24 me-1 ls-3 d-inline-block rounded-xl bg-danger font-xsssss fw-700 ls-lg text-white"
                      >
                        UNFRIEND
                        <HiMinus className="font-xs me-2 text-white" />
                      </a>
                      <a
                        href="#"
                        className="mt-0 btn pt-2 d-flex gap-2 font-xssss align-items-center pb-2 pe-3 ps-3 lh-24 me-1 ls-3 d-inline-block rounded-xl bg-messenger font-xsssss fw-700 ls-lg text-white"
                      >
                        Send
                        <BsFillSendFill className={`font-xsss `} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 ps-2 pe-2">
                <div className="card d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3">
                  <div className="card-body d-block w-100 pe-3 ps-3 pb-4 text-center">
                    <figure className="avatar me-auto ms-auto mb-0 position-relative w65 z-index-1">
                      <img
                        src={img}
                        alt="image"
                        className="float-right p-0 bg-white rounded-circle w-100 shadow-xss"
                      />
                    </figure>
                    <div className="clearfix" />
                    <h4 className="fw-700 font-xsss mt-3 mb-1">Goria Coast </h4>
                    <p className="fw-500 font-xsssss text-grey-500 mt-0 mb-3">
                      @macale343
                    </p>
                    <div className="d-flex gap-3 justify-content-center">
                      <a
                        href="#"
                        className="mt-0 btn pt-2 pb-2 pe-3 ps-3 font-xssss lh-24 me-1 ls-3 d-inline-block rounded-xl bg-danger font-xsssss fw-700 ls-lg text-white"
                      >
                        UNFRIEND
                        <HiMinus className="font-xs me-2 text-white" />
                      </a>
                      <a
                        href="#"
                        className="mt-0 btn pt-2 d-flex gap-2 font-xssss align-items-center pb-2 pe-3 ps-3 lh-24 me-1 ls-3 d-inline-block rounded-xl bg-messenger font-xsssss fw-700 ls-lg text-white"
                      >
                        Send
                        <BsFillSendFill className={`font-xsss `} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 ps-2 pe-2">
                <div className="card d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3">
                  <div className="card-body d-block w-100 pe-3 ps-3 pb-4 text-center">
                    <figure className="avatar me-auto ms-auto mb-0 position-relative w65 z-index-1">
                      <img
                        src={img}
                        alt="image"
                        className="float-right p-0 bg-white rounded-circle w-100 shadow-xss"
                      />
                    </figure>
                    <div className="clearfix" />
                    <h4 className="fw-700 font-xsss mt-3 mb-1">Goria Coast </h4>
                    <p className="fw-500 font-xsssss text-grey-500 mt-0 mb-3">
                      @macale343
                    </p>
                    <div className="d-flex gap-3 justify-content-center">
                      <a
                        href="#"
                        className="mt-0 btn pt-2 pb-2 pe-3 ps-3 font-xssss lh-24 me-1 ls-3 d-inline-block rounded-xl bg-danger font-xsssss fw-700 ls-lg text-white"
                      >
                        UNFRIEND
                        <HiMinus className="font-xs me-2 text-white" />
                      </a>
                      <a
                        href="#"
                        className="mt-0 btn pt-2 d-flex gap-2 font-xssss align-items-center pb-2 pe-3 ps-3 lh-24 me-1 ls-3 d-inline-block rounded-xl bg-messenger font-xsssss fw-700 ls-lg text-white"
                      >
                        Send
                        <BsFillSendFill className={`font-xsss `} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 ps-2 pe-2">
                <div className="card d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3">
                  <div className="card-body d-block w-100 pe-3 ps-3 pb-4 text-center">
                    <figure className="avatar me-auto ms-auto mb-0 position-relative w65 z-index-1">
                      <img
                        src={img}
                        alt="image"
                        className="float-right p-0 bg-white rounded-circle w-100 shadow-xss"
                      />
                    </figure>
                    <div className="clearfix" />
                    <h4 className="fw-700 font-xsss mt-3 mb-1">Goria Coast </h4>
                    <p className="fw-500 font-xsssss text-grey-500 mt-0 mb-3">
                      @macale343
                    </p>
                    <div className="d-flex gap-3 justify-content-center">
                      <a
                        href="#"
                        className="mt-0 btn pt-2 pb-2 pe-3 ps-3 font-xssss lh-24 me-1 ls-3 d-inline-block rounded-xl bg-danger font-xsssss fw-700 ls-lg text-white"
                      >
                        UNFRIEND
                        <HiMinus className="font-xs me-2 text-white" />
                      </a>
                      <a
                        href="#"
                        className="mt-0 btn pt-2 d-flex gap-2 font-xssss align-items-center pb-2 pe-3 ps-3 lh-24 me-1 ls-3 d-inline-block rounded-xl bg-messenger font-xsssss fw-700 ls-lg text-white"
                      >
                        Send
                        <BsFillSendFill className={`font-xsss `} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 ps-2 pe-2">
                <div className="card d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3">
                  <div className="card-body d-block w-100 pe-3 ps-3 pb-4 text-center">
                    <figure className="avatar me-auto ms-auto mb-0 position-relative w65 z-index-1">
                      <img
                        src={img}
                        alt="image"
                        className="float-right p-0 bg-white rounded-circle w-100 shadow-xss"
                      />
                    </figure>
                    <div className="clearfix" />
                    <h4 className="fw-700 font-xsss mt-3 mb-1">Goria Coast </h4>
                    <p className="fw-500 font-xsssss text-grey-500 mt-0 mb-3">
                      @macale343
                    </p>
                    <div className="d-flex gap-3 justify-content-center">
                      <a
                        href="#"
                        className="mt-0 btn pt-2 pb-2 pe-3 ps-3 font-xssss lh-24 me-1 ls-3 d-inline-block rounded-xl bg-danger font-xsssss fw-700 ls-lg text-white"
                      >
                        UNFRIEND
                        <HiMinus className="font-xs me-2 text-white" />
                      </a>
                      <a
                        href="#"
                        className="mt-0 btn pt-2 d-flex gap-2 font-xssss align-items-center pb-2 pe-3 ps-3 lh-24 me-1 ls-3 d-inline-block rounded-xl bg-messenger font-xsssss fw-700 ls-lg text-white"
                      >
                        Send
                        <BsFillSendFill className={`font-xsss `} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 ps-2 pe-2">
                <div className="card d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3">
                  <div className="card-body d-block w-100 pe-3 ps-3 pb-4 text-center">
                    <figure className="avatar me-auto ms-auto mb-0 position-relative w65 z-index-1">
                      <img
                        src={img}
                        alt="image"
                        className="float-right p-0 bg-white rounded-circle w-100 shadow-xss"
                      />
                    </figure>
                    <div className="clearfix" />
                    <h4 className="fw-700 font-xsss mt-3 mb-1">Goria Coast </h4>
                    <p className="fw-500 font-xsssss text-grey-500 mt-0 mb-3">
                      @macale343
                    </p>
                    <div className="d-flex gap-3 justify-content-center">
                      <a
                        href="#"
                        className="mt-0 btn pt-2 pb-2 pe-3 ps-3 font-xssss lh-24 me-1 ls-3 d-inline-block rounded-xl bg-danger font-xsssss fw-700 ls-lg text-white"
                      >
                        UNFRIEND
                        <HiMinus className="font-xs me-2 text-white" />
                      </a>
                      <a
                        href="#"
                        className="mt-0 btn pt-2 d-flex gap-2 font-xssss align-items-center pb-2 pe-3 ps-3 lh-24 me-1 ls-3 d-inline-block rounded-xl bg-messenger font-xsssss fw-700 ls-lg text-white"
                      >
                        Send
                        <BsFillSendFill className={`font-xsss `} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 ps-2 pe-2">
                <div className="card d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3">
                  <div className="card-body d-block w-100 pe-3 ps-3 pb-4 text-center">
                    <figure className="avatar me-auto ms-auto mb-0 position-relative w65 z-index-1">
                      <img
                        src={img}
                        alt="image"
                        className="float-right p-0 bg-white rounded-circle w-100 shadow-xss"
                      />
                    </figure>
                    <div className="clearfix" />
                    <h4 className="fw-700 font-xsss mt-3 mb-1">Goria Coast </h4>
                    <p className="fw-500 font-xsssss text-grey-500 mt-0 mb-3">
                      @macale343
                    </p>
                    <div className="d-flex gap-3 justify-content-center">
                      <a
                        href="#"
                        className="mt-0 btn pt-2 pb-2 pe-3 ps-3 font-xssss lh-24 me-1 ls-3 d-inline-block rounded-xl bg-danger font-xsssss fw-700 ls-lg text-white"
                      >
                        UNFRIEND
                        <HiMinus className="font-xs me-2 text-white" />
                      </a>
                      <a
                        href="#"
                        className="mt-0 btn pt-2 d-flex gap-2 font-xssss align-items-center pb-2 pe-3 ps-3 lh-24 me-1 ls-3 d-inline-block rounded-xl bg-messenger font-xsssss fw-700 ls-lg text-white"
                      >
                        Send
                        <BsFillSendFill className={`font-xsss `} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 ps-2 pe-2">
                <div className="card d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3">
                  <div className="card-body d-block w-100 pe-3 ps-3 pb-4 text-center">
                    <figure className="avatar me-auto ms-auto mb-0 position-relative w65 z-index-1">
                      <img
                        src={img}
                        alt="image"
                        className="float-right p-0 bg-white rounded-circle w-100 shadow-xss"
                      />
                    </figure>
                    <div className="clearfix" />
                    <h4 className="fw-700 font-xsss mt-3 mb-1">Goria Coast </h4>
                    <p className="fw-500 font-xsssss text-grey-500 mt-0 mb-3">
                      @macale343
                    </p>
                    <div className="d-flex gap-3 justify-content-center">
                      <a
                        href="#"
                        className="mt-0 btn pt-2 pb-2 pe-3 ps-3 font-xssss lh-24 me-1 ls-3 d-inline-block rounded-xl bg-danger font-xsssss fw-700 ls-lg text-white"
                      >
                        UNFRIEND
                        <HiMinus className="font-xs me-2 text-white" />
                      </a>
                      <a
                        href="#"
                        className="mt-0 btn pt-2 d-flex gap-2 font-xssss align-items-center pb-2 pe-3 ps-3 lh-24 me-1 ls-3 d-inline-block rounded-xl bg-messenger font-xsssss fw-700 ls-lg text-white"
                      >
                        Send
                        <BsFillSendFill className={`font-xsss `} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 ps-2 pe-2">
                <div className="card d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3">
                  <div className="card-body d-block w-100 pe-3 ps-3 pb-4 text-center">
                    <figure className="avatar me-auto ms-auto mb-0 position-relative w65 z-index-1">
                      <img
                        src={img}
                        alt="image"
                        className="float-right p-0 bg-white rounded-circle w-100 shadow-xss"
                      />
                    </figure>
                    <div className="clearfix" />
                    <h4 className="fw-700 font-xsss mt-3 mb-1">Goria Coast </h4>
                    <p className="fw-500 font-xsssss text-grey-500 mt-0 mb-3">
                      @macale343
                    </p>
                    <div className="d-flex gap-3 justify-content-center">
                      <a
                        href="#"
                        className="mt-0 btn pt-2 pb-2 pe-3 ps-3 font-xssss lh-24 me-1 ls-3 d-inline-block rounded-xl bg-danger font-xsssss fw-700 ls-lg text-white"
                      >
                        UNFRIEND
                        <HiMinus className="font-xs me-2 text-white" />
                      </a>
                      <a
                        href="#"
                        className="mt-0 btn pt-2 d-flex gap-2 font-xssss align-items-center pb-2 pe-3 ps-3 lh-24 me-1 ls-3 d-inline-block rounded-xl bg-messenger font-xsssss fw-700 ls-lg text-white"
                      >
                        Send
                        <BsFillSendFill className={`font-xsss `} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
