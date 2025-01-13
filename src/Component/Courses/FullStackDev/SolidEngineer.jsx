import React, { useState } from "react";
import DownloadCurriculum from "../../Modals/DownloadCurriculum";

export default function SolidEngineer() {
  const [activeModule, setActiveModule] = useState(1);

  const renderModuleInfo = () => {
    switch (activeModule) {
      case 1:
        return (
          <div className="month-info-card-info mt-4">
            <p>Introduction to Web Designing (Month 1)</p>
            <ul className="mt-4">
              <li className="mb-2">
                <p>Basics of web design principles</p>
              </li>
              <li className="mb-2">
                <p>Overview of HTML, CSS</p>
              </li>
              <li className="mb-2">
                <p>HTML Basic </p>
              </li>
              <li className="mb-2">
                <p>Media Integration</p>
              </li>
              <li className="mb-2">
                <p>HTML Forms & Validation</p>
              </li>
              <li className="mb-2">
                <p> DOM Manipulation</p>
              </li>
              <li className="mb-2">
                <p>Browser Developer Tools</p>
              </li>
              <li className="mb-2">
                <p>Basic SEO Principles</p>
              </li>
              <li className="mb-2">
                <p>CSS Basics</p>
              </li>
              <li className="mb-2">
                <p> CSS Layout</p>
              </li>
              <li className="mb-4">
                <p> Overview of Designing Framework</p>
              </li>
            </ul>
          </div>
        );
      case 2:
        return (
          <div className="month-info-card-info mt-4">
            <p>Introduction to JavaScript (Month 1)</p>
            <ul className="mt-4">
              <li className="mb-2">
                <p>Data Types and Variables</p>
              </li>
              <li className="mb-2">
                <p>Operators, Control Flow</p>
              </li>
              <li className="mb-2">
                <p>Functions and Scope</p>
              </li>
              <li className="mb-2">
                <p> Objects and Arrays</p>
              </li>
              <li className="mb-2">
                <p>DOM Manipulation</p>
              </li>
              <li className="mb-2">
                <p>Callbacks, Promises, and async/await</p>
              </li>
              <li className="mb-2">
                <p>Fetch API and error handling</p>
              </li>
              <li className="mb-2">
                <p>Error Handling</p>
              </li>
              <li className="mb-2">
                <p>Classes and Objects</p>
              </li>
              <li className="mb-2">
                <p>Local and Session Storage</p>
              </li>
              <li className="mb-4">
                <p>ES6+ Features</p>
              </li>
            </ul>
          </div>
        );
      case 3:
        return (
          <div className="month-info-card-info mt-4">
            <p>Introduction to Data Structures in JavaScript ( 15 Days ) </p>
            <ul className="mt-4">
              <li className="mb-2">
                <p>How JavaScript s built in data structures work</p>
              </li>
              <li className="mb-2">
                <p> Linked Lists</p>
              </li>
              <li className="mb-2">
                <p> Stacks and Queues</p>
              </li>
              <li className="mb-2">
                <p>Trees</p>
              </li>
            </ul>
          </div>
        );
      case 4:
        return (
          <div className="month-info-card-info mt-4">
            <p>Introduction to React.js ( Month 1 )</p>
            <ul className="mt-4">
              <li className="mb-2">
                <p>Setting Up the Environment</p>
              </li>
              <li className="mb-2">
                <p>React Basics</p>
              </li>
              <li className="mb-2">
                <p>State Management</p>
              </li>
              <li className="mb-2">
                <p>Handling Events and Forms</p>
              </li>
              <li className="mb-2">
                <p>React Router</p>
              </li>
              <li className="mb-2">
                <p>React Hooks</p>
              </li>
              <li className="mb-2">
                <p>State Management Libraries</p>
              </li>
              <li className="mb-2">
                <p>API Integration</p>
              </li>
              <li className="mb-2">
                <p>Advanced Topics</p>
              </li>
            </ul>
          </div>
        );
      case 5:
        return (
          <div className="month-info-card-info mt-4">
            <p>Back End Development (1 Month)</p>
            <ul className="mt-4">
              <li className="mb-2">
                <p>Introduction to Node.js </p>
              </li>
              <li className="mb-2">
                <p>Building a Basic Server</p>
              </li>
              <li className="mb-2">
                <p>Asynchronous Programming </p>
              </li>
              <li className="mb-2">
                <p>Express.js Framework</p>
              </li>
              <li className="mb-2">
                <p>Middleware</p>
              </li>
              <li className="mb-2">
                <p>RESTful APIs</p>
              </li>
              <li className="mb-2">
                <p>Authentication and Authorization</p>
              </li>
              <li className="mb-2">
                <p>Testing and Debugging</p>
              </li>
              <li className="mb-2">
                <p> Testing and Debugging</p>
              </li>
            </ul>
          </div>
        );
      case 6:
        return (
          <div className="month-info-card-info mt-4">
            <p> Database Management ( 15 Days )</p>
            <ul className="mt-4">
              <li className="mb-2">
                <p>Introduction to MongoDB</p>
              </li>
              <li className="mb-2">
                <p> Advanced MongoDB for Developers</p>
              </li>
              <li className="mb-2">
                <p>Data Modelling in MongoDB</p>
              </li>
              <li className="mb-2">
                <p>Full Stack Development with MongoDB </p>
              </li>
              <li className="mb-2">
                <p>Build Real World Projects with MongoDB</p>
              </li>
            </ul>
          </div>
        );
      case 7:
        return (
          <div className="month-info-card-info mt-4">
            <p> Advanced DevOps (Month 1)</p>
            <ul className="mt-4">
              <li className="mb-2">
                <p>Github & Bitbucket</p>
              </li>
              <li className="mb-2">
                <p> Cloud Platforms</p>
              </li>
              <li className="mb-2">
                <p>AWS Introduction, S3 Bucket, EC2</p>
              </li>
              <li className="mb-2">
                <p>Website hosting and Deployment </p>
              </li>
              <li className="mb-2">
                <p>CI/CD Pipeline</p>
              </li>
            </ul>
          </div>
        );
      case 8:
        return (
          <div className="month-info-card-info mt-4">
            <p>Final Project & Career Preparation (Month 1)</p>
            <ul className="mt-4">
              <li className="mb-2">
                <p>Full Stack Project Development</p>
              </li>
              <li className="mb-2">
                <p> Interview Preparation</p>
              </li>
              <li className="mb-2">
                <p>Resume Building</p>
              </li>
              <li className="mb-2">
                <p>Freelancing & Remote Work Tips</p>
              </li>
              <li className="mb-2">
                <p>Networking & Building Industry Connections</p>
              </li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  // Other existing functions

  return (
    <>
      <div className="solidengineer-section d-none d-lg-block">
        <div className="container">
          <div className="solidengineer-section-tittle">
            <h2 className="text-center">
              Curriculum is designed to make you a <span>solid engineer</span>
            </h2>
          </div>

          <div className="row mt-5">
            <div className="col-lg-6 mb-4">
              {/* Module Tabs */}
              {[1, 2, 3, 4, 5, 6, 7, 8].map((module) => (
                <a key={module} onClick={() => setActiveModule(module)}>
                  <div
                    className={`fundamentals-box position-relative mb-3 ${
                      activeModule === module ? "active" : ""
                    }`}
                    style={{
                      backgroundColor:
                        activeModule === module ? "#0F172A" : "#f8f9fa", // Change colors as needed
                      color: activeModule === module ? "#fff" : "#000",
                    }}
                  >
                    <div className="fundamentals-box-card d-flex align-items-center justify-content-start gap-3 h-100">
                      <div className="fundamentals-box-card-num">
                        <h2>{String(module).padStart(2, "0")}</h2>
                      </div>
                      <div className="fundamentals-box-card-info">
                        <p>Module</p>
                        <h6>
                          {module === 1 && "Introduction to Web Designing"}
                          {module === 2 && "Introduction to JavaScript"}
                          {module === 3 &&
                            "Introduction to Data Structures in JavaScript"}
                          {module === 4 && "Introduction to React.js "}
                          {module === 5 && "Back End Development  "}
                          {module === 6 && " Database Management"}
                          {module === 7 && "Advanced DevOps"}
                          {module === 8 &&
                            "Final Project & Career Preparation "}
                        </h6>
                      </div>
                    </div>
                    {/* <div className="months-logo">
                      <p>1 Month</p>
                    </div> */}
                  </div>
                </a>
              ))}

              {/* Download Curriculum button */}
              <div className="fundamentals-box-btn text-center">
                <a
                  href="assets/pdf/TechHut.pdf"
                  download="Curriculum.pdf"
                  type="button"
                  className="btn btn-primary"
                >
                  Download Curriculum{" "}
                  <i className="fa-solid fa-download ms-2"></i>
                </a>
              </div>
            </div>

            {/* Module Content */}
            <div className="col-lg-6">
              <div className="month-info-card">
                <div className="month-info-tittle">
                  <h6 className="text-center">1 Month</h6>
                  {/* <p className="text-center">
                    *A learner can do as many electives as they want, but only
                    after completion of Core Curriculum.
                  </p> */}
                </div>

                {renderModuleInfo()}

                <hr className="line" />
                <p
                  className="text-center"
                  style={{ color: "#fff", fontWeight: "500" }}
                >
                  full stack development : Module
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DownloadCurriculum />
    </>
  );
}
