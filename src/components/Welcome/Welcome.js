import React from "react";
import "./Welcome.scss";
import img from "../../assets/images/site_images/Group 14077.png";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="welcome">
      <div className="container">
        <div className="box">
          <div className="right">
            <h1>مرحبا بعودتك :)</h1>

            <p class="wel">
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
            <div className="btns">
              <Link to="/login">
                <button className="btn-reg">سجل الان</button>
              </Link>
              <Link to="/register">
                <button className="btn-reg2 ">انشاء حساب</button>
              </Link>
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

export default Welcome;
