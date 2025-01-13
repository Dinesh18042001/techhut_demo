import React, { useState } from "react";
import { ContactForm } from "../../../contract-form/contact";

export default function DigitalMarketerBanner() {
 

  return (
    <>
      <div className="fullstackdev-banner-section position-relative">
        <div className="fullstackdev-banner-bg">
          <img src="./assets/banner/banner-bg.png" alt="" />
        </div>

        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 mb-5">
              <div className="fullstackdev-banner-info">
                <h1>Learn digital marketing at India's top tech companies</h1>
                <div className="line-img mb-4">
                  {/* <img src="./assets/banner/line-img.png" alt="" /> */}
                </div>
                <h6>
                  Work-experience based learning programs to land your dream tech job
                </h6>
                <div className="para-info mt-4">
                  <p className="mb-3">
                    <strong>Build </strong>professional projects like the top 1% tech professionals.
                  </p>
                  <p className="mb-3">
                    <strong>Master</strong> the latest Fullstack/Backend/Automation tech with real work-ex.
                  </p>
                  <p className="mb-3">
                    <strong>Crack</strong> your dream role at the best tech companies
                  </p>
                </div>

                <div className="fullstackdev-banner-number mt-5">
                  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-5 row-cols-xxl-5 g-3 g-lg-5 justify-content-center">
                    <div className="col col1">
                      <div className="main-count text-center">
                        <h3>95%</h3>
                        <p>placed within 9 months of graduation</p>
                      </div>
                    </div>
                    <div className="col col1">
                      <div className="main-count text-center">
                        <h3>10 LPA</h3>
                        <p>average dream job CTC</p>
                      </div>
                    </div>
                    <div className="col col1">
                      <div className="main-count text-center">
                        <h3>21 LPA</h3>
                        <p>average super-dream job CTC</p>
                      </div>
                    </div>
                    <div className="col col1">
                      <div className="main-count text-center">
                        <h3>1000+</h3>
                        <p>Hiring Partners</p>
                      </div>
                    </div>
                    <div className="col">
                      <div className="main-count text-center">
                        <h3>60%</h3>
                        <p>Average Salary Hike</p>
                      </div>
                    </div>
                  </div>
                </div>
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

        <div className="fullstackdev-banner-side-color">
          <img src="./assets/banner/side-color.png" alt="" />
        </div>
        <div className="fullstackdev-banner-side-color2">
          <img src="./assets/banner/side-color2.png" alt="" />
        </div>
      </div>
    </>
  );
}
