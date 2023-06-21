import React from "react";
import img from "../../../assets/images/325100930_23852874196000773_2622244091878946588_n.png";
import {BsFillSendFill} from "react-icons/bs"
import { HiMinus } from "react-icons/hi";
function Friends() {
    const themeColor = localStorage.getItem("themeColor");

  return (
    <div className="middle-sidebar-bottom">
      <div className="middle-sidebar-left ps-0">
        <div className="row">
          <div className="col-xl-12">
            <div className="card shadow-xss w-100 d-block d-flex border-0 p-4 mb-3">
              <div className="card-body d-flex align-items-center p-0">
                <h2 className="fw-700 mb-0 mt-0 font-md text-grey-900">
                  الاصدقاء
                </h2>
                <div className="search-form-2 me-auto">
                  <i className="ti-search font-xss left-15 right-auto" />
                  <input
                    type="text"
                    className="form-control text-grey-500 mb-0 bg-greylight theme-dark-bg border-0"
                    placeholder="ابحث هنا ..."
                  />
                </div>
                <a
                  href="#"
                  className="btn-round-md me-2 bg-greylight theme-dark-bg rounded-3"
                >
                  <i className="feather-filter font-xss text-grey-500" />
                </a>
              </div>
            </div>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Friends;
