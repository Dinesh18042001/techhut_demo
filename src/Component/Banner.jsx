import React, { useState } from "react";
import Mentors from "./Mentors";
import Career from "./Career";
import Mentorship from "./Mentorship";
import Companies from "./Companies";
import AlumniSay from "./AlumniSay";
import Questions from "./Questions";
import Apply from "./Modals/Apply";
import CareerpathMain from "./CareerpathMain";
import { ContactForm } from './../contract-form/contact';

export default function Banner() {


  return (
    <>
      <div className="baneer-section position-relative">
        <div className="banner-main-box position-relative">
          <div className="banner-img">
            <img src="./assets/banner/banner-bg.png" alt="" />
          </div>

          <div className="banner-info">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <h2>Turn your Passion into a New Career Path</h2>
                  {/* <img src="./assets/banner/line-img.png" alt="" /> */}

                  <div className="row mt-5">
                    <div className="col-md-6 col-12 mb-4">
                      <div className="banner-icon-box d-flex justify-content-center align-items-center">
                        <span>
                          <i className="fa-solid fa-medal"></i>
                        </span>
                        <h6 className="ms-2">
                          Team up with mentors from top MNCs.
                        </h6>
                      </div>
                    </div>

                    <div className="col-md-6 col-12 mb-4">
                      <div className="banner-icon-box d-flex justify-content-center align-items-center">
                        <span>
                          <i className="fa-solid fa-microscope icon2"></i>
                        </span>
                        <h6 className="ms-2">
                          Experience HR workshops and mock tests.
                        </h6>
                      </div>
                    </div>

                    <div className="col-md-6 col-12 mb-4">
                      <div className="banner-icon-box d-flex justify-content-center align-items-center">
                        <span>
                          <i className="fa-solid fa-chalkboard-user icon3"></i>
                        </span>
                        <h6 className="ms-2">
                          Get full job placement support for one year.
                        </h6>
                      </div>
                    </div>

                    <div className="col-md-6 col-12 mb-4">
                      <div className="banner-icon-box d-flex justify-content-center align-items-center">
                        <span>
                          <i className="fa-solid fa-address-card icon4"></i>
                        </span>
                        <h6 className="ms-2">
                          Boost your interview with tailored resume.
                        </h6>
                      </div>
                    </div>
                  </div>

                  <div className="banner-btn d-flex flex-column flex-md-row flex-lg-row gap-4 mt-4 mb-5">
                    <div className="banner-btn-1">
                      {/* Trigger Modal with Join Now button */}
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#applyModal"
                      >
                        Download Syllabus{" "}
                        <i className="fa-solid fa-download me-2"></i>
                      </a>
                    </div>
                    {/* Commented out Download Syllabus button */}
                    {/* <div className="banner-btn-2">
                      <a href="#">
                        Download Syllabus{" "}
                        <i className="fa-solid fa-download"></i>
                      </a>
                    </div> */}
                  </div>
                </div>

                <div className="col-lg-5 text-end">
                  <div className="fullstackdev-banner-form">
                    <h4 className="text-center">
                      Book a Live Class, <span>For Free!</span>
                    </h4>

                    <div className="main-fullstackdev-banner-form mt-4">
                      <ContactForm/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="baneer-section-side-color">
          <img src="./assets/banner/side-color.png" alt="" />
        </div>
        <div className="baneer-section-side-color2">
          <img src="./assets/banner/side-color2.png" alt="" />
        </div>
      </div>
      <CareerpathMain/>
      <div >
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
