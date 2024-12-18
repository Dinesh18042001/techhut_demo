import React from "react";
import Accordion from "react-bootstrap/Accordion";

export default function SolidEngineerSmoll() {
  return (
    <>
    {/* d-block d-lg-none */}
      <div className="solid-engineer-smoll-section d-block d-lg-none ">
        <div className="container">
          <div className="solid-engineer-smoll-section-tittle mb-4">
            <h3 className="text-center">
              Curriculum is designed to make you a <span>solid engineer</span>
            </h3>
          </div>
          <Accordion defaultActiveKey="0">
            {/* Default active key for the first item */}
            {/* First Item: Always Open */}
            <Accordion.Item eventKey="0">
              <Accordion.Header className="position-relative">
                <div className="header-main d-flex align-items-center gap-3">
                  <div className="header-main-number">
                    <h1 className="m-0">01</h1>
                  </div>
                  <div className="fundamentals-box-card-info">
                    <p>Module</p>
                    <h6 className="p-0">Introduction to Web Development</h6>
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="body">
                  <div className="accordion-body-tittle">
                    <h5 className="text-center">1 Month</h5>
                    <p className="text-center">
                      *A learner can do as many electives as they want, but only
                      after completion of Core Curriculum.
                    </p>
                  </div>
                  <div className="accordion-body-info mt-3">
                    <h5>Module 1 : Introduction to Web Development</h5>
                    <ul>
                      <li>HTML & CSS Basics</li>
                      <li>Responsive Design</li>
                      <li>JavaScript Fundamentals</li>
                      <li>DOM Manipulation</li>
                      <li>Version Control (Git)</li>
                      <li>Forms & Validation</li>
                      <li>Introduction to Web Accessibility</li>
                      <li>Browser Developer Tools</li>
                      <li>Basic SEO Principles</li>
                      <li>Introduction to Web Hosting</li>
                      <li>Creating Simple Web Pages</li>
                    </ul>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            {/* Second Item */}
            <Accordion.Item eventKey="1">
              <Accordion.Header className="position-relative">
                <div className="header-main d-flex align-items-center gap-3">
                  <div className="header-main-number">
                    <h1 className="m-0">02</h1>
                  </div>
                  <div className="fundamentals-box-card-info">
                    <p>Module</p>
                    <h6 className="p-0">Advanced Web Development</h6>
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="body">
                  <div className="accordion-body-tittle">
                    <h5 className="text-center">1 Month</h5>
                    <p className="text-center">
                      *A learner can do as many electives as they want, but only
                      after completion of Core Curriculum.
                    </p>
                  </div>
                  <div className="accordion-body-info mt-3">
                    <h5>Module 2 : Advanced Front-End Development</h5>
                    <ul>
                      <li>Advanced Front-End Development</li>
                      <li>JavaScript ES6</li>
                      <li>ReactJS Basics</li>
                      <li>React Hooks & State Management</li>
                      <li>React Router & Navigation</li>
                      <li>CSS Frameworks (Bootstrap/Tailwind)</li>
                      <li>Front-End Testing (Jest)</li>
                      <li>REST API Integration</li>
                      <li>Component Lifecycle in React</li>
                      <li>Error Handling & Debugging</li>
                      <li>State Management with Redux</li>
                      <li>Optimizing Front-End Performance</li>
                    </ul>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header className="position-relative">
                <div className="header-main d-flex align-items-center gap-3">
                  <div className="header-main-number">
                    <h1 className="m-0">03</h1>
                  </div>
                  <div className="fundamentals-box-card-info">
                    <p>Module</p>
                    <h6 className="p-0">Back-End Development</h6>
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="body">
                  <div className="accordion-body-tittle">
                    <h5 className="text-center">1 Month</h5>
                    <p className="text-center">
                      *A learner can do as many electives as they want, but only
                      after completion of Core Curriculum.
                    </p>
                  </div>
                  <div className="accordion-body-info mt-3">
                    <h5>Module 3 : Back-End Development</h5>
                    <ul>
                      <li>Node.js Introduction</li>
                      <li>Express.js Framework</li>
                      <li>RESTful APIs</li>
                      <li>Authentication & Authorization (JWT, OAuth)</li>
                      <li>Back-End Testing (Mocha)</li>
                      <li>Asynchronous Programming (Promises, Async/Await)</li>
                      <li>Middleware & Error Handling</li>
                      <li>File Handling & Uploads</li>
                      <li>Session Management</li>
                      <li>Caching Strategies</li>
                      <li>WebSocket for Real-Time Communication</li>
                    </ul>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header className="position-relative">
                <div className="header-main d-flex align-items-center gap-3">
                  <div className="header-main-number">
                    <h1 className="m-0">04</h1>
                  </div>
                  <div className="fundamentals-box-card-info">
                    <p>Module</p>
                    <h6 className="p-0">Database Management</h6>
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="body">
                  <div className="accordion-body-tittle">
                    <h5 className="text-center">1 Month</h5>
                    <p className="text-center">
                      *A learner can do as many electives as they want, but only
                      after completion of Core Curriculum.
                    </p>
                  </div>
                  <div className="accordion-body-info mt-3">
                    <h5>Module 4 : Database Management</h5>
                    <ul>
                      <li>SQL Databases (MySQL/PostgreSQL)</li>
                      <li>NoSQL Databases (MongoDB)</li>
                      <li>Database Design & Relationships</li>
                      <li>CRUD Operations</li>
                      <li>Database Security</li>
                      <li>Data Normalization & Indexing</li>
                      <li>Advanced Querying & Aggregations</li>
                      <li>Database Migrations & Seeders</li>
                      <li>Connection Pools & Query Optimization</li>
                      <li>Data Backup & Recovery</li>
                      <li>Database Performance Tuning</li>
                    </ul>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5">
              <Accordion.Header className="position-relative">
                <div className="header-main d-flex align-items-center gap-3">
                  <div className="header-main-number">
                    <h1 className="m-0">05</h1>
                  </div>
                  <div className="fundamentals-box-card-info">
                    <p>Module</p>
                    <h6 className="p-0">DevOps & Deployment</h6>
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="body">
                  <div className="accordion-body-tittle">
                    <h5 className="text-center">1 Month</h5>
                    <p className="text-center">
                      *A learner can do as many electives as they want, but only
                      after completion of Core Curriculum.
                    </p>
                  </div>
                  <div className="accordion-body-info mt-3">
                    <h5>Module 5 : DevOps & Deployment</h5>
                    <ul>
                      <li>Server & Hosting Basics</li>
                      <li>Docker Containers</li>
                      <li>Continuous Integration & Deployment</li>
                      <li>Cloud Platforms (AWS, Heroku)</li>
                      <li>Application Monitoring & Logging</li>
                      <li>Nginx & Apache Configuration</li>
                      <li>SSL Certificates & HTTPS</li>
                      <li>Load Balancing & Scalability</li>
                      <li>Environment Variables & Secrets Management</li>
                      <li>Automating Deployments with Jenkins</li>
                      <li>Managing Multi-Environment Deployments</li>
                    </ul>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="6">
              <Accordion.Header className="position-relative">
                <div className="header-main d-flex align-items-center gap-3">
                  <div className="header-main-number">
                    <h1 className="m-0">06</h1>
                  </div>
                  <div className="fundamentals-box-card-info">
                    <p>Module</p>
                    <h6 className="p-0">Final Project & Career Preparation</h6>
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="body">
                  <div className="accordion-body-tittle">
                    <h5 className="text-center">1 Month</h5>
                    <p className="text-center">
                      *A learner can do as many electives as they want, but only
                      after completion of Core Curriculum.
                    </p>
                  </div>
                  <div className="accordion-body-info mt-3">
                    <h5>Module 6 : Final Project & Career Preparation</h5>
                    <ul>
                      <li>GitHub Portfolio Creation</li>
                      <li>Interview Preparation</li>
                      <li>Resume Building</li>
                      <li>Soft Skills Training</li>
                      <li>Problem-Solving Techniques</li>
                      <li>Mock Interviews</li>
                      <li>Collaborative Development & Team Projects</li>
                      <li>Freelancing & Remote Work Tips</li>
                      <li>Networking & Building Industry Connections</li>
                      <li>Building a Personal Brand in Tech</li>
                    </ul>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>

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

          </Accordion>
        </div>
      </div>
    </>
  );
}
