import React from "react";
import { Link } from "react-router-dom";

export default function ProgramCard() {
  return (
    <div className="program-card-section">
      <div className="container">
        {/* Row with cards */}
        <div className="row justify-content-center">
          {/* Card 1: Full Stack Development */}

          <div className="col-lg-6 d-flex justify-content-center align-items-center mb-4 ">
            <div className="main-program-card position-relative h-100">
              <div className="main-program-card-tittle position-relative">
                <div className="main-program-card-tittle-img">
                  <img src="./assets/programcard/card-tittle.webp" alt="" />
                </div>
              </div>
              <div className="main-program-card-body p-3">
                <div className="card-name">
                  <h4 className="m-0">
                    Full Stack Specialization (MERN) in Software Development
                  </h4>
                </div>
                <div className="main-program-card-body-info">
                  <h6 className="mb-2 mt-2">Program Highlights</h6>
                  <p>
                    <img
                      className="me-2"
                      src="./assets/programcard/arrow.svg"
                      alt=""
                    />
                    Front End: HTML, CSS, JavaScript
                  </p>
                  <p>
                    <img
                      className="me-2"
                      src="./assets/programcard/arrow.svg"
                      alt=""
                    />
                    Back End: Nodejs, Python
                  </p>
                  <p>
                    <img
                      className="me-2"
                      src="./assets/programcard/arrow.svg"
                      alt=""
                    />
                    Databases: SQL, NoSQL(MySQL, MongoDB)
                  </p>
                  <p>
                    <img
                      className="me-2"
                      src="./assets/programcard/arrow.svg"
                      alt=""
                    />
                    APIs
                  </p>
                  <p>
                    <img
                      className="me-2"
                      src="./assets/programcard/arrow.svg"
                      alt=""
                    />
                    Deployment: AWS, Docker
                  </p>
                  <p>
                    <img
                      className="me-2"
                      src="./assets/programcard/arrow.svg"
                      alt=""
                    />
                    Live Projects
                  </p>
                </div>
                <hr />

                <div className="batch-start-box d-flex justify-content-between align-items-center mb-4 mt-4">
                  <p>Next batch starting from</p>

                  <div className="date">
                    <p>01/24/25</p>
                  </div>
                </div>

                <div className="main-program-card-footer d-flex flex-wrap justify-content-between align-items-center">
                  <div className="main-program-card-footer-btn1 text-center mb-2">
                    <Link to="/full-stack-development">Learn More</Link>
                  </div>
                  <div className="main-program-card-footer-btn2 text-center mb-2">
                    <Link to="#">Apply for Free Counselling</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Card 2: Data Science/AI  */}
          <div className="col-lg-6 d-flex justify-content-center align-items-center mb-4">
            <div className="main-program-card position-relative h-100">
              <div className="main-program-card-tittle position-relative">
                <div className="main-program-card-tittle-img">
                  <img src="./assets/programcard/card-tittle2.webp" alt="" />
                </div>
              </div>
              <div className="main-program-card-body p-3">
                <div className="card-name">
                  <h4 className="m-0">Data Science/AI</h4>
                </div>
                <div className="main-program-card-body-info">
                  <h6 className="mb-2 mt-2">Program Highlights</h6>
                  <p>
                    <img
                      className="me-2"
                      src="./assets/programcard/arrow.svg"
                      alt=""
                    />
                    Front End: HTML, CSS, JavaScript
                  </p>
                  <p>
                    <img
                      className="me-2"
                      src="./assets/programcard/arrow.svg"
                      alt=""
                    />
                    Back End: Nodejs, Python
                  </p>
                  <p>
                    <img
                      className="me-2"
                      src="./assets/programcard/arrow.svg"
                      alt=""
                    />
                    Databases: SQL, NoSQL(MySQL, MongoDB)
                  </p>
                  <p>
                    <img
                      className="me-2"
                      src="./assets/programcard/arrow.svg"
                      alt=""
                    />
                    APIs
                  </p>
                  <p>
                    <img
                      className="me-2"
                      src="./assets/programcard/arrow.svg"
                      alt=""
                    />
                    Deployment: AWS, Docker
                  </p>
                  <p>
                    <img
                      className="me-2"
                      src="./assets/programcard/arrow.svg"
                      alt=""
                    />
                    Live Projects
                  </p>
                </div>
                <hr />

                <div className="batch-start-box d-flex justify-content-between align-items-center mb-4 mt-4">
                  <p>Next batch starting from</p>

                  <div className="date">
                    <p>01/24/25</p>
                  </div>
                </div>

                <div className="main-program-card-footer d-flex flex-wrap justify-content-between align-items-center">
                  <div className="main-program-card-footer-btn1 text-center mb-2">
                    <Link to="/full-stack-development">Learn More</Link>
                  </div>
                  <div className="main-program-card-footer-btn2 text-center mb-2">
                    <Link to="#">Apply for Free Counselling</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
