import React, { useEffect, useState } from "react";
import img from "../../assets/images/site_images/Group 14077.png";
import img2 from "../../assets/images/site_images/sm-logo.png";
import Typewriter from "typewriter-effect";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { AiFillLock } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";
import { Link } from "react-router-dom";
// import PhoneInput from "react-phone-input-international";
// import "react-phone-input-international/lib/style.css";
import {
  getCountries,
  getCountryCallingCode,
} from "react-phone-number-input/input";
import en from "react-phone-number-input/locale/en.json";
function Register() {
  const [checked, setChecked] = useState("");
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [value, setValue] = useState();

  return (
    <div className="register">
      <div className="container">
        <div className="box">
          <div className="img">
            <img src={img2} />
          </div>
          <hr />
          <h1>إنشاء حساب</h1>
          <form>
            <div className="form-top">
              <div className="group-label">
                <label>الاسم الاول</label>
                <input type="text" />
                <span>
                  <BsFillPersonFill />
                </span>
              </div>
              <div className="group-label">
                <label>الاسم الاخير</label>
                <input type="text" />
                <span>
                  <BsFillPersonFill />
                </span>
              </div>
              <div className="group-label">
                <label>البريد الالكتروني</label>
                <input type="email" />
                <span>
                  <BsFillEnvelopeFill />
                </span>
              </div>
              <div className="group-label">
                <label htmlFor="phone">رقم الهاتف</label>
                <span>
                  <BsTelephoneFill />
                </span>
                {/* <PhoneInput
                  enableAreaCodes={true}
                  enableAreaCodeStretch
                  value={value}
                  onChange={setValue}
                  defaultCountry="RU"
                /> */}
                <input type="text" />
                <span className="code">
                  <select
                    value={value}
                    onChange={(event) => {
                      setValue(event.target.value || undefined);

                      console.log(event.target.value);
                    }}
                  >
                    <option value="">{en["ZZ"]}</option>
                    {getCountries().map((country) => (
                      <option
                        key={country}
                        value={getCountryCallingCode(country)}
                      >
                        {en[country]} +{getCountryCallingCode(country)}
                      </option>
                    ))}
                  </select>
                </span>
              </div>
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
            <div className="remember">
              <label className="container-check ">
                <input
                  type="checkbox"
                  name="remember"
                  id="remember"
                  onClick={(e) => {
                    setChecked(e.target.checked);
                  }}
                />
                <label className="pr-5" htmlFor="remember">
                  أوافق على <span> الشروط والاحكام </span>وسياسه الخصوصيه
                </label>
                <span className="checkmark" />
              </label>
              <label className="container-check ">
                <input type="checkbox" name="remember" id="remember" />
                <label className="pr-5" htmlFor="remember">
                  أوافق على <span> الشروط والاحكام </span>وسياسه الخصوصيه
                </label>
                <span className="checkmark" />
              </label>
            </div>
            <div className="btn">
              {checked ? (
                <Link to="/register">
                  <button
                    style={checked ? { opacity: "1" } : { opacity: ".5" }}
                  >
                    انشاء حساب الان
                  </button>
                </Link>
              ) : (
                <button
                  disabled
                  style={
                    checked ? { opacity: "1", disabled: "" } : { opacity: ".5" }
                  }
                >
                  <Link to="/register">انشاء حساب الان</Link>
                </button>
              )}
            </div>
            <div className="bottom">
              <span> هل لديك حساب؟</span> <Link to="/login">تسجيل الان</Link>{" "}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
