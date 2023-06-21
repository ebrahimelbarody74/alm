import React, { useContext, useEffect, useState } from "react";
import "./Login.scss";
import img from "../../assets/images/site_images/Group 14077.png";
import img2 from "../../assets/images/site_images/sm-logo.png";
import Typewriter from "typewriter-effect";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { AiFillLock } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
function Auth() {
  const [checked, setChecked] = useState("");
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    if (email == "a@a.com") {
      navigate("/home");
    }
  };
  return (
    <div className="login">
      <div className="container">
        <div className="box">
          <div className="right">
            <div className="">
              <div className="form-reg">
                <h1 className="wel"> مرحبا بعودتك (:</h1>
                <p className="wel">
                  <Typewriter
                    options={{
                      strings: [
                        "ههناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي",
                        ,
                        "ههناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </p>
                <form>
                  <input
                    type="hidden"
                    name="_token"
                    defaultValue="hTDGF5QPianGB7ickqS8R8XCB9fFmLGJtPlDE51z"
                  />{" "}
                  <div className="form-row">
                    <div className="form-group ">
                      <label htmlFor="inputEmail4">البريد الالكتروني </label>
                      <input
                        id="email"
                        type="email"
                        className="form-control "
                        name="email"
                        defaultValue={email}
                        required=""
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <span className="icon-input ">
                        <BsFillEnvelopeFill />
                      </span>
                    </div>
                    <div className="form-group  ">
                      <span className="icon-input" style={{ bottom: 65 }}>
                        <AiFillLock />
                      </span>
                      <label htmlFor="inputPassword4">كلمة السر</label>
                      <input
                        id="password"
                        type="password"
                        className="form-control "
                        name="password"
                        required=""
                        autoComplete="current-password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="showPassword">
                      <input
                        type="checkbox"
                        id="showPassword"
                        className="ml-2"
                      />{" "}
                      <span>عرض كلمة السر </span>
                    </div>
                    <div className="remember">
                      <label className="container-check ">
                        <input type="checkbox" name="remember" id="remember" />
                        <label className="pr-5" htmlFor="remember">
                          تذكرني
                        </label>
                        <span className="checkmark" />
                      </label>
                      <Link className="forg-pass" to="/forgetPassword">
                        هل نسيت كلمه المرور؟
                      </Link>
                    </div>
                  </div>
                  <div>
                    <div className="box-btn d-flex justify-content-center row">
                      <div className="btns">
                        <button
                          className="btn-reg"
                          onClick={(e) => handleSubmit(e)}
                        >
                          تسجيل دخول
                        </button>
                        <Link to="/">
                          <button className="btn-reg2 ">الغاء</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <span className="or">او</span>
                  <div>
                    <div className="box-btn d-flex justify-content-center row">
                      <div className="btns-bottom">
                        <button className="btn-reg">
                          تسجيل الدخول بجوجل
                          <FcGoogle />
                        </button>
                        <button className="btn-reg2 ">
                          <Link to="/">تسجيل الدخول عبر البريد الالكترونى</Link>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="bottom">
                    <span> ليس لديك حساب؟</span>{" "}
                    <Link to="/register">تسجيل الان</Link>
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
                  strings: ["الموقع العربي الأول", "الافضل فى الوطن العربى"],
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
  );
}

export default Auth;
