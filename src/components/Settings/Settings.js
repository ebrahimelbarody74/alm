import React from "react";
import { Link } from "react-router-dom";

function Settings() {
  return (
    <div className="middle-wrap">
      <div className="card w-100 border-0 bg-white shadow-xs p-0 mb-4">
        <div className="card-body p-lg-5 p-4 w-100 border-0">
          <div className="row">
            <div className="col-lg-12">
              <h4 className="mb-4 font-xxl fw-700 mont-font mb-lg-5 mb-4 font-md-xs">
                Settings
              </h4>
              <div className="nav-caption fw-600 font-xssss text-grey-500 mb-2">
                Genaral
              </div>
              <ul className="list-inline mb-4">
                <li className="list-inline-item d-block border-bottom me-0">
                  <Link to="/portfolio/3" className="pt-2 pb-2 d-flex align-items-center">
                    <i className="btn-round-md bg-primary-gradiant text-white feather-home font-md ms-3" />{" "}
                    <h4 className="fw-600 font-xsss mb-0 mt-0">
                      Porifle
                    </h4>
                    <i className="ti-angle-left font-xsss text-grey-500 me-auto mt-3" />
                  </Link>
                </li>
                <li className="list-inline-item d-block border-bottom me-0">
                  <a href="#" className="pt-2 pb-2 d-flex align-items-center">
                    <i className="btn-round-md bg-primary-gradiant text-white feather-home font-md ms-3" />{" "}
                    <h4 className="fw-600 font-xsss mb-0 mt-0">
                      Acount Information
                    </h4>
                    <i className="ti-angle-left font-xsss text-grey-500 me-auto mt-3" />
                  </a>
                </li>
                <li className="list-inline-item d-block border-bottom me-0">
                  <a href="#" className="pt-2 pb-2 d-flex align-items-center">
                    <i className="btn-round-md bg-gold-gradiant text-white feather-map-pin font-md ms-3" />{" "}
                    <h4 className="fw-600 font-xsss mb-0 mt-0">
                      Saved Address
                    </h4>
                    <i className="ti-angle-left font-xsss text-grey-500 me-auto mt-3" />
                  </a>
                </li>
                <li className="list-inline-item d-block ms-0">
                  <a href="#" className="pt-2 pb-2 d-flex align-items-center">
                    <i className="btn-round-md bg-red-gradiant text-white feather-twitter font-md ms-3" />{" "}
                    <h4 className="fw-600 font-xsss mb-0 mt-0">
                      Social Acount
                    </h4>
                    <i className="ti-angle-left font-xsss text-grey-500 me-auto mt-3" />
                  </a>
                </li>
              </ul>
              <div className="nav-caption fw-600 font-xsss text-grey-500 mb-2">
                Acount
              </div>
              <ul className="list-inline mb-4">
                <li className="list-inline-item d-block border-bottom me-0">
                  <a href="#" className="pt-2 pb-2 d-flex align-items-center">
                    <i className="btn-round-md bg-mini-gradiant text-white feather-credit-card font-md ms-3" />{" "}
                    <h4 className="fw-600 font-xsss mb-0 mt-0">My Cards</h4>
                    <i className="ti-angle-left font-xsss text-grey-500 me-auto mt-3" />
                  </a>
                </li>
                <li className="list-inline-item d-block  ms-0">
                  <a href="#" className="pt-2 pb-2 d-flex align-items-center">
                    <i className="btn-round-md bg-blue-gradiant text-white feather-inbox font-md ms-3" />{" "}
                    <h4 className="fw-600 font-xsss mb-0 mt-0">Password</h4>
                    <i className="ti-angle-left font-xsss text-grey-500 me-auto mt-3" />
                  </a>
                </li>
              </ul>
              <div className="nav-caption fw-600 font-xsss text-grey-500 mb-2">
                Other
              </div>
              <ul className="list-inline">
                <li className="list-inline-item d-block border-bottom me-0">
                  <a href="#" className="pt-2 pb-2 d-flex align-items-center">
                    <i className="btn-round-md bg-gold-gradiant text-white feather-bell font-md ms-3" />{" "}
                    <h4 className="fw-600 font-xsss mb-0 mt-0">Notification</h4>
                    <i className="ti-angle-left font-xsss text-grey-500 me-auto mt-3" />
                  </a>
                </li>
                <li className="list-inline-item d-block border-bottom me-0">
                  <a href="#" className="pt-2 pb-2 d-flex align-items-center">
                    <i className="btn-round-md bg-primary-gradiant text-white feather-help-circle font-md ms-3" />{" "}
                    <h4 className="fw-600 font-xsss mb-0 mt-0">Help</h4>
                    <i className="ti-angle-left font-xsss text-grey-500 me-auto mt-3" />
                  </a>
                </li>
                <li className="list-inline-item d-block ms-0">
                  <a href="#" className="pt-2 pb-2 d-flex align-items-center">
                    <i className="btn-round-md bg-red-gradiant text-white feather-lock font-md ms-3" />{" "}
                    <h4 className="fw-600 font-xsss mb-0 mt-0">Logout</h4>
                    <i className="ti-angle-left font-xsss text-grey-500 me-auto mt-3" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
