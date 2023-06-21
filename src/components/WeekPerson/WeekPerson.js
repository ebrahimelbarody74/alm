import React, { useState } from "react";
import "./WeekPerson.scss";
import { BsStar, BsStarFill } from "react-icons/bs";
import img from "../../assets/img/drake.jpg";
import { AiOutlineClose } from "react-icons/ai";

function WeekPerson() {
  const [close, setClose] = useState(false);
  return (
    <>
      {!close && (
        // <div className="weekPerson card w-100 shadow-xss rounded-xxl border-0 pe-4 pt-4 ps-4 pb-3 mb-3">
        //   <div className="top">
        //     <span onClick={() => setClose(true)}>x</span>
        //   </div>
        //   <div className="info">
        //     <div className="img">
        //       <img src={img} />
        //     </div>
        //     <h3>احمد على </h3>
        //     <div className="stars">
        //       <span>
        //         {" "}
        //         <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill />{" "}
        //         <BsStarFill />{" "}
        //       </span>
        //     </div>
        //   </div>
        // </div>
        <div className="col-md-12 col-sm-12 ps-2 pe-2 weekPerson">
          <div className="top">
            <span onClick={() => setClose(true)}>
              <div className="btn-round-md bg-greylight ">
                <AiOutlineClose className="text-grey-900 font-lg fw-bolder" />
              </div>
            </span>
          </div>
          <div className="card d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3">
            <div
              className="card-body position-relative h100 bg-image-cover bg-image-center"
              style={{ backgroundImage: `url(${img})` }}
            />
            <div className="card-body d-block w-100 pr-10 pb-4 pt-0 text-left position-relative">
              <figure
                className="avatar position-absolute w75 z-index-1"
                style={{ top: "-40px", right: "15px" }}
              >
                <img
                  src={img}
                  alt="image"
                  className="float-right p-1 bg-white rounded-circle w-100"
                />
              </figure>
              <div className="clearfix" />
              <h4 className="fw-700 font-xsss mt-3 mb-1">Victor Exrixon</h4>
              <p className="fw-500 font-xsssss text-grey-500 mt-0 mb-0">
                support@gmail.com
              </p>
              <div className="stars">
                <span>
                  {" "}
                  <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill />{" "}
                  <BsStarFill />{" "}
                </span>
              </div>
              <span className="position-absolute left-15 right-auto top-0 d-flex align-items-center">
                <a
                  href="#"
                  className="text-center p-2 lh-24 w100 me-1 ls-3 d-inline-block rounded-xl bg-current font-xsssss fw-700 ls-lg text-white"
                >
                  FOLLOW
                </a>
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default WeekPerson;
