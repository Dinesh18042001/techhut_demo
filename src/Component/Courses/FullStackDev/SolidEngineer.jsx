
import React, { useState } from "react";
import DownloadCurriculum from "../../Modals/DownloadCurriculum";

export default function SolidEngineer() {
  const [activeModule, setActiveModule] = useState(1);

  const renderModuleInfo = () => {
    switch (activeModule) {
      case 1:
        return (
          <div className="month-info-card-info mt-4">
            <p>Module 1 : Introduction to Web Development</p>
            <ul className="mt-4">
              <li className="mb-2">
                <p> HTML & CSS Basics</p>
              </li>
              <li className="mb-2">
                <p>Responsive Design </p>
              </li>
              <li className="mb-2">
                <p>avaScript Fundamentals </p>
              </li>
              <li className="mb-2">
                <p>DOM Manipulation  </p>
              </li>
              <li className="mb-2">
                <p>Version Control (Git) </p>
              </li>
              <li className="mb-2">
                <p> Forms & Validation  </p>
              </li>
              <li className="mb-2">
                <p> Introduction to Web Accessibility</p>
              </li>
              <li className="mb-2">
                <p>Browser Developer Tools</p>
              </li>
              <li className="mb-2">
                <p>Basic SEO Principles</p>
              </li>
              <li className="mb-2">
                <p> Introduction to Web Hosting </p>
              </li>
              <li className="mb-4">
                <p> Creating Simple Web Pages </p>
              </li>
            </ul>
          </div>
        );
      case 2:
        return (
          <div className="month-info-card-info mt-4">
            <p>Advanced Front-End Development</p>
            <ul className="mt-4">
              <li className="mb-2">
                <p>JavaScript ES6</p>
              </li>
              <li className="mb-2">
                <p>ReactJS Basics </p>
              </li>
              <li className="mb-2">
                <p>React Hooks & State Management  </p>
              </li>
              <li className="mb-2">
                <p> React Router & Navigation  </p>
              </li>
              <li className="mb-2">
                <p>CSS Frameworks (Bootstrap/Tailwind)  </p>
              </li>
              <li className="mb-2">
                <p>Front-End Testing (Jest) </p>
              </li>
              <li className="mb-2">
                <p>REST API Integration  </p>
              </li>
              <li className="mb-2">
                <p>Component Lifecycle in React </p>
              </li>
              <li className="mb-2">
                <p>Error Handling & Debugging  </p>
              </li>
              <li className="mb-2">
                <p>State Management with Redux</p>
              </li>
              <li className="mb-4">
                <p>Optimizing Front-End Performance</p>
              </li>
            </ul>
          </div>
        );
      case 3:
        return (
          <div className="month-info-card-info mt-4">
            <p>Back-End Development</p>
            <ul className="mt-4">
              <li className="mb-2">
                <p>Node.js Introduction</p>
              </li>
              <li className="mb-2">
                <p> Express.js Framework</p>
              </li>
              <li className="mb-2">
                <p>RESTful APIs </p>
              </li>
              <li className="mb-2">
                <p>Authentication & Authorization (JWT, OAuth)</p>
              </li>
              <li className="mb-2">
                <p>Back-End Testing (Mocha)</p>
              </li>
              <li className="mb-2">
                <p>Asynchronous Programming (Promises, Async/Await)</p>
              </li>
              <li className="mb-2">
                <p>Middleware & Error Handling </p>
              </li>
              <li className="mb-2">
                <p>File Handling & Uploads</p>
              </li>
              <li className="mb-2">
                <p>Session Management</p>
              </li>
              <li className="mb-2">
                <p>Caching Strategies</p>
              </li>
              <li className="mb-4">
                <p>WebSocket for Real-Time Communication</p>
              </li>
            </ul>
          </div>
        );
      case 4:
        return (
          <div className="month-info-card-info mt-4">
            <p>Database Management</p>
            <ul className="mt-4">
              <li className="mb-2">
                <p>SQL Databases (MySQL/PostgreSQL)</p>
              </li>
              <li className="mb-2">
                <p>NoSQL Databases (MongoDB)</p>
              </li>
              <li className="mb-2">
                <p>Database Design & Relationships</p>
              </li>
              <li className="mb-2">
                <p> CRUD Operations</p>
              </li>
              <li className="mb-2">
                <p> Database Security  </p>
              </li>
              <li className="mb-2">
                <p>Data Normalization & Indexing  </p>
              </li>
              <li className="mb-2">
                <p>Advanced Querying & Aggregations</p>
              </li>
              <li className="mb-2">
                <p>Database Migrations & Seeders </p>
              </li>
              <li className="mb-2">
                <p>Connection Pools & Query Optimization  </p>
              </li>
              <li className="mb-2">
                <p>Data Backup & Recovery</p>
              </li>
              <li className="mb-4">
                <p>Database Performance Tuning</p>
              </li>
            </ul>
          </div>
        );
      case 5:
        return (
          <div className="month-info-card-info mt-4">
            <p>DevOps & Deployment</p>
            <ul className="mt-4">
              <li className="mb-2">
                <p>Server & Hosting Basics </p>
              </li>
              <li className="mb-2">
                <p>Docker Containers</p>
              </li>
              <li className="mb-2">
                <p> Continuous Integration & Deployment  </p>
              </li>
              <li className="mb-2">
                <p>Cloud Platforms (AWS, Heroku)  </p>
              </li>
              <li className="mb-2">
                <p>Application Monitoring & Logging </p>
              </li>
              <li className="mb-2">
                <p>Nginx & Apache Configuration  </p>
              </li>
              <li className="mb-2">
                <p>SSL Certificates & HTTPS</p>
              </li>
              <li className="mb-2">
                <p>Load Balancing & Scalability</p>
              </li>
              <li className="mb-2">
                <p> Environment Variables & Secrets Management</p>
              </li>
              <li className="mb-2">
                <p> Automating Deployments with Jenkins  </p>
              </li>
              <li className="mb-4">
                <p>Managing Multi-Environment Deployments</p>
              </li>
            </ul>
          </div>
        );
      case 6:
        return (
          <div className="month-info-card-info mt-4">
            <p> Full Stack Project Development </p>
            <ul className="mt-4">
              <li className="mb-2">
                <p>GitHub Portfolio Creation  </p>
              </li>
              <li className="mb-2">
                <p> Interview Preparation  </p>
              </li>
              <li className="mb-2">
                <p>Resume Building</p>
              </li>
              <li className="mb-2">
                <p>Soft Skills Training </p>
              </li>
              <li className="mb-2">
                <p>Problem-Solving Techniques</p>
              </li>
              <li className="mb-2">
                <p>Mock Interviews </p>
              </li>
              <li className="mb-2">
                <p>Collaborative Development & Team Projects  </p>
              </li>
              <li className="mb-2">
                <p>Freelancing & Remote Work Tips  </p>
              </li>
              <li className="mb-2">
                <p>Networking & Building Industry Connections</p>
              </li>
              <li className="mb-2">
                <p>Building a Personal Brand in Tech  </p>
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
      <div className="solidengineer-section">
        <div className="container">
          <div className="solidengineer-section-tittle">
            <h2 className="text-center">
              Curriculum is designed to make you a <span>solid engineer</span>
            </h2>
          </div>

          <div className="row mt-5">
            <div className="col-lg-6 mb-4">
              {/* Module Tabs */}
              {[1, 2, 3, 4, 5, 6].map((module) => (
                <a key={module} onClick={() => setActiveModule(module)}>
                  <div
                    className={`fundamentals-box position-relative mb-3 ${
                      activeModule === module ? "active" : ""
                    }`}
                    style={{
                      backgroundColor: activeModule === module ? "#0F172A" : "#f8f9fa", // Change colors as needed
                      color: activeModule === module ? "#fff" : "#000",
                    }}
                  >
                    <div className="fundamentals-box-card d-flex align-items-center justify-content-start gap-3">
                      <div className="fundamentals-box-card-num">
                        <h2>{String(module).padStart(2, '0')}</h2>
                      </div>
                      <div className="fundamentals-box-card-info">
                        <p>Module</p>
                        <h6>
                          {module === 1 && "Introduction to Web Development"}
                          {module === 2 && "Advanced Front-End Development"}
                          {module === 3 && " Back-End Development"}
                          {module === 4 && "Database Management "}
                          {module === 5 && "DevOps & Deployment "}
                          {module === 6 && " Final Project & Career Preparation"}
                        </h6>
                      </div>
                    </div>
                    <div className="months-logo">
                      <p>1 Month</p>
                    </div>
                  </div>
                </a>
              ))}

              {/* Download Curriculum button */}
              <div className="fundamentals-box-btn text-center">
                <a
                  type="button"
                  className="btn btn-primary"
                  // data-bs-toggle="modal"
                  // data-bs-target="#downloadCurriculumModal"
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
                  <p className="text-center">
                    *A learner can do as many electives as they want, but only
                    after completion of Core Curriculum.
                  </p>
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
