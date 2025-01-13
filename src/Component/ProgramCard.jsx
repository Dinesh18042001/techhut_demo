import React from "react";
import { Link } from "react-router-dom";

export default function ProgramCard() {
  return (
    <div className="program-card-section">
      <div className="container">
        {/* Row with cards */}
        <div className="row justify-content-center">
          {/* Card 1: Full Stack Development */}
          <div className="col-lg-6 d-flex justify-content-center align-items-center mb-4">
            <div className="main-program-card position-relative">
              <div className="main-program-card-tittle position-relative">
                <div className="main-program-card-tittle-img">
                  <img src="./assets/programcard/card-tittle.webp" alt="" />
                </div>
                <div className="main-program-card-tittle-icon">
                  <img src="./assets/programcard/tittle-icon1.svg" alt="" />
                </div>
              </div>
              <div className="main-program-card-body p-3">
                <div className="card-name">
                  <h4 className="m-0">Full Stack Development</h4>
                </div>
                <hr />
                <div className="main-program-card-body-info">
                  <h6 className="mb-2">Program Highlights</h6>
                  <ul>
                    <li>Front End: HTML, CSS, JavaScript</li>
                    <li>Back End: Nodejs, Python</li>
                    <li>Databases: SQL, NoSQL(MySQL, MongoDB)</li>
                    <li>APIs</li>
                    <li>Deployment: AWS, Docker</li>
                    <li>Live Projects</li>
                  </ul>
                </div>
                <hr />
                <div className="main-program-card-footer d-flex justify-content-between align-items-center">
                  <div className="main-program-card-footer-icon">
                    <p className="mb-2">Instructor from</p>
                    <div className="footer-icons">
                      <img
                        src="./assets/programcard/facebook.svg"
                        alt="facebook"
                      />
                      <img
                        src="./assets/programcard/microsoft.svg"
                        alt="microsoft"
                      />
                      <img
                        src="./assets/programcard/apple.svg"
                        alt="apple"
                      />
                      <img
                        src="./assets/programcard/google.svg"
                        alt="google"
                      />
                    </div>
                  </div>
                  <div className="main-program-card-footer-btn">
                    <Link to="/full-stack-development">
                      Learn More{" "}
                      <span className="ms-2">
                        <i className="fa-solid fa-chevron-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="bg-icon">
                <img src="./assets/programcard/bg-icon-one.svg" alt="" />
              </div>
            </div>
          </div>

          {/* Card 2: Digital Marketer */}
          {/* <div className="col-lg-6 d-flex justify-content-center align-items-center mb-4">
            <div className="main-program-card position-relative">
              <div className="main-program-card-tittle position-relative">
                <div className="main-program-card-tittle-img">
                  <img src="./assets/programcard/card-tittle.webp" alt="" />
                </div>
                <div className="main-program-card-tittle-icon">
                  <img src="./assets/programcard/tittle-icon2.svg" alt="" />
                </div>
              </div>
              <div className="main-program-card-body p-3">
                <div className="card-name d-flex justify-content-between">
                  <h4 className="m-0">Digital Marketer</h4>
                  <p>Coming soon</p>
                </div>
                <hr />
                <div className="main-program-card-body-info">
                  <h6 className="mb-2">Program Highlights</h6>
                  <ul>
                    <li>Search Engine Optimization</li>
                    <li>Social Media</li>
                    <li>Content Marketing</li>
                    <li>PPC Advertising</li>
                    <li>Analytics</li>
                    <li>Live Projects</li>
                  </ul>
                </div>
                <hr />
                <div className="main-program-card-footer d-flex justify-content-between align-items-center">
                  <div className="main-program-card-footer-icon">
                    <p className="mb-2">Instructor from</p>
                    <div className="footer-icons">
                      <img
                        src="./assets/programcard/facebook.svg"
                        alt="facebook"
                      />
                      <img
                        src="./assets/programcard/microsoft.svg"
                        alt="microsoft"
                      />
                      <img
                        src="./assets/programcard/apple.svg"
                        alt="apple"
                      />
                      <img
                        src="./assets/programcard/google.svg"
                        alt="google"
                      />
                    </div>
                  </div>
                  <div className="main-program-card-footer-btn">
                    <button
                      className="btn btn-link"
                      disabled
                      style={{
                        cursor: "not-allowed",
                        color: "#6c757d", // Disabled color
                      }}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-icon">
                <img src="./assets/programcard/bg-icon-two.svg" alt="" />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
