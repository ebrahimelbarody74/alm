import React, { useState } from "react";
import img from "../../assets/images/site_images/Group 14077.png";
import res from "../../assets/images/site_images/rest.png";
import Typewriter from "typewriter-effect";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { AiFillLock } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";

function ForgetPassword() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [pass, setPass] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      {pass ? (
        <div className="forgetPassword">
          <div className="container">
            <div className="box">
              <div className="right">
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                  <div className="form-reg">
                    <div className="top">
                      <h1 className="wel"> اعاده ضبط كلمه السر</h1>
                      <div className="img">
                        <img src={res} />
                      </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                      <input
                        type="hidden"
                        name="_token"
                        defaultValue="hTDGF5QPianGB7ickqS8R8XCB9fFmLGJtPlDE51z"
                      />{" "}
                      <div className="form-row">
                        <div className="form-group ">
                          <label htmlFor="inputEmail4">
                            البريد الالكتروني{" "}
                          </label>
                          <input
                            id="email"
                            type="email"
                            className="form-control "
                            name="email"
                            defaultValue=""
                            required=""
                            autoComplete="email"
                            autofocus=""
                          />
                          <span className="icon-input ">
                            <BsFillEnvelopeFill />
                          </span>
                        </div>
                      </div>
                      <div className="p-3 pt-5 ">
                        <div className="box-btn d-flex justify-content-center row">
                          <div className="btns">
                            <button
                              className="btn-reg"
                              onClick={() => setPass(false)}
                            >
                              التالى
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="left">
                <div className="logo">
                  <img src={img} />
                </div>
                <h3>
                  <Typewriter
                    options={{
                      strings: [
                        "الموقع العربي الأول",
                        "الافضل فى الوطن العربى",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h3>
                <p>للأبحاث والمحتوى العلمي في مكان واحد</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="forgetPassword">
          <div className="container">
            <div className="box">
              <div className="right">
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                  <div className="form-reg">
                    <div className="top">
                      <h1 className="wel"> اعاده ضبط كلمه السر</h1>
                      <div className="img">
                        <img src={res} />
                      </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                      <input
                        type="hidden"
                        name="_token"
                        defaultValue="hTDGF5QPianGB7ickqS8R8XCB9fFmLGJtPlDE51z"
                      />{" "}
                      <div className="form-top">
                        <div className="form-row">
                          <div className="group-label">
                            <label>كلمة السر</label>
                            <input type={show ? "password" : "text"} />
                            <span>
                              <AiFillLock />
                            </span>
                            {show ? (
                              <span onClick={() => setShow(false)}>
                                <BiShow />
                              </span>
                            ) : (
                              <span onClick={() => setShow(true)}>
                                <BiHide />
                              </span>
                            )}
                          </div>
                          <div className="group-label">
                            <label>اعادة كلمة السر</label>
                            <input type={show2 ? "password" : "text"} />
                            <span>
                              <AiFillLock />
                            </span>
                            {show2 ? (
                              <span onClick={() => setShow2(false)}>
                                <BiShow />
                              </span>
                            ) : (
                              <span onClick={() => setShow2(true)}>
                                <BiHide />
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="p-3 pt-5 ">
                        <div className="box-btn d-flex justify-content-center row">
                          <div className="btns">
                            <button className="btn-reg">التالى</button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="left">
                <div className="logo">
                  <img src={img} />
                </div>
                <h3>
                  <Typewriter
                    options={{
                      strings: [
                        "الموقع العربي الأول",
                        "الافضل فى الوطن العربى",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h3>
                <p>للأبحاث والمحتوى العلمي في مكان واحد</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ForgetPassword;
