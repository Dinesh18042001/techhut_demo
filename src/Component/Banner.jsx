import React, { useState } from "react";
import Mentors from "./Mentors";
import Career from "./Career";
import Mentorship from "./Mentorship";
import Companies from "./Companies";
import AlumniSay from "./AlumniSay";
import Questions from "./Questions";
import Apply from "./Modals/Apply";
import CareerpathMain from "./CareerpathMain";

export default function Banner() {
  return (
    <>
      <div className="baneer-section position-relative mt-4">
        <div className="banner-main-box position-relative">
          <div className="banner-info">
            <div className="container">

              <div className="position-relative">
                <h2 className="text-center">Turn your Passion into a New Career Path</h2>

                <div className="text-center banner-line-img">
                  <img src="assets/banner/line-img.svg" alt="" />
                </div>

              </div>

              <div className="row custome-row">

                <div className="col-md-4 col-12 mb-4">
                  <div className="banner-icon-box d-flex justify-content-center align-items-center">
                    <span>
                      <i className="fa-solid fa-medal"></i>
                    </span>
                    <h6 className="ms-2">
                      Team up with mentors from top MNCs.
                    </h6>
                  </div>
                </div>
                <div className="col-md-4 col-12 mb-4">
                  <div className="banner-icon-box d-flex justify-content-center align-items-center">
                    <span>
                      <i className="fa-solid fa-microscope icon2"></i>
                    </span>
                    <h6 className="ms-2">
                      Experience HR workshops and mock tests.
                    </h6>
                  </div>
                </div>

                <div className="col-md-4 col-12 mb-4">
                  <div className="banner-icon-box d-flex justify-content-center align-items-center">
                    <span>
                      <i className="fa-solid fa-chalkboard-user icon3"></i>
                    </span>
                    <h6 className="ms-2">
                      Get full job placement support for one year.
                    </h6>
                  </div>
                </div>

                <div className="col-md-4 col-12 mb-4">
                  <div className="banner-icon-box d-flex justify-content-center align-items-center">
                    <span>
                      <i className="fa-solid fa-address-card icon4"></i>
                    </span>
                    <h6 className="ms-2">
                      Boost your interview with tailored resume.
                    </h6>
                  </div>
                </div>

                <div className="col-md-4 col-12 mb-4">
                  <div className="banner-icon-box d-flex justify-content-center align-items-center">
                    <span>
                    <i class="fa-solid fa-pen-nib"></i>
                    </span>
                    <h6 className="ms-2">
                      Experience HR workshops and mock tests.
                    </h6>
                  </div>
                </div>

                <div className="col-md-4 col-12 mb-4">
                  <div className="banner-icon-box d-flex justify-content-center align-items-center">
                    <span>
                    <i class="fa-regular fa-face-smile"></i>
                    </span>
                    <h6 className="ms-2">
                      Team up with mentors from top MNCs.
                    </h6>
                  </div>
                </div>
              </div>

              <div className="banner-btn d-flex flex-column flex-md-row flex-lg-row gap-4 mt-4 mb-5 justify-content-center">
                <div className="banner-btn-1">
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#applyModal"
                  >
                    Apply Now
                    <i class="fa-solid fa-chevron-right ms-1"></i>
                  </a>
                </div>

                <div className="banner-btn-2">
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#applyModal"
                  >
                    Download Syllabus
                    <i className="fa-solid fa-download ms-2 "></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="baneer-section-side-color">
          <img src="./assets/banner/side-color.png" alt="" />
        </div>

        <div className="baneer-section-side-color3">
          <img src="./assets/banner/side-color3.png" alt="" />
        </div>
      </div>
      {/* <CareerpathMain /> */}
      <div>
        <Mentors />
      </div>

      <div id="features">
        <Career />
      </div>

      <Mentorship />
      <div id="placements">
        <Companies />
      </div>

      <AlumniSay />
      <Questions />
      {/* Apply Modal */}
      <Apply />
    </>
  );
}
