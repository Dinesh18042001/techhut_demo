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
                    <h6 className="p-0"> Introduction to Web Designing</h6>
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="body">
                  <div className="accordion-body-tittle">
                    <h5 className="text-center mb-0">1 Month</h5>
                  </div>
                  <div className="accordion-body-info mt-3">
                    <h5>Module 1 :Introduction to Web Designing (Month 1)</h5>
                    <ul>
                      <li>Basics of web design principles</li>
                      <li>Overview of HTML, CSS</li>
                      <li>HTML Basic</li>
                      <li>Media Integration</li>
                      <li>HTML Forms & Validation</li>
                      <li>DOM Manipulation</li>
                      <li>Browser Developer Tools</li>
                      <li>Basic SEO Principles</li>
                      <li>CSS Basics</li>
                      <li>CSS Layout</li>
                      <li>Overview of Designing Framework</li>
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
                    <h6 className="p-0">Introduction to JavaScript</h6>
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="body">
                  <div className="accordion-body-tittle">
                    <h5 className="text-center mb-0">1 Month</h5>
                  </div>
                  <div className="accordion-body-info mt-3">
                    <h5>Module 2 : Introduction to JavaScript (Month 1)</h5>
                    <ul>
                      <li>Data Types and Variables</li>
                      <li>Operators, Control Flow</li>
                      <li>Functions and Scope</li>
                      <li>Objects and Arrays</li>
                      <li>DOM Manipulation</li>
                      <li>Callbacks, Promises, and async/await</li>
                      <li>Fetch API and error handling</li>
                      <li>Error Handling</li>
                      <li>Classes and Objects</li>
                      <li>Local and Session Storage</li>
                      <li>ES6+ Features</li>
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
                    <h6 className="p-0">
                      Introduction to Data Structures in JavaScript
                    </h6>
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="body">
                  <div className="accordion-body-tittle">
                    <h5 className="text-center mb-0"> 15 Days</h5>
                  </div>
                  <div className="accordion-body-info mt-3">
                    <h5>
                      Module 4 : Introduction to Data Structures in JavaScript ( 15 Days )
                    </h5>
                    <ul>
                      <li>How JavaScript's built-in data structures work</li>
                      <li>Linked Lists</li>
                      <li>Stacks and Queues</li>
                      <li>Trees</li>
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
                    <h6 className="p-0">
                      Introduction to React.js 
                    </h6>
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="body">
                  <div className="accordion-body-tittle">
                    <h5 className="text-center mb-0">1 Month</h5>
                  </div>
                  <div className="accordion-body-info mt-3">
                    <h5>Module 4 : Introduction to React.js ( Month 1 )</h5>
                    <ul>
                      <li>Setting Up the Environment</li>
                      <li>React Basics</li>
                      <li>State Management</li>
                      <li>Handling Events and Forms</li>
                      <li>React Router</li>
                      <li>React Hooks</li>
                      <li>State Management Libraries</li>
                      <li>API Integration</li>
                      <li>Advanced Topics</li>
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
                    <h6 className="p-0">Back End Development </h6>
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="body">
                  <div className="accordion-body-tittle">
                    <h5 className="text-center mb-0">1 Month</h5>
                  </div>
                  <div className="accordion-body-info mt-3">
                    <h5>Module 5 : Back End Development (1 Month)</h5>
                    <ul>
                      <li>Introduction to Node.js</li>
                      <li>Building a Basic Server</li>
                      <li>Asynchronous Programming</li>
                      <li>Express.js Framework</li>
                      <li>Middleware</li>
                      <li>RESTful APIs</li>
                      <li>Authentication and Authorization</li>
                      <li>Testing and Debugging</li>
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
                    <h6 className="p-0">Database Management  </h6>
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="body">
                  <div className="accordion-body-tittle">
                    <h5 className="text-center mb-0"> 15 Days </h5>
                  </div>
                  <div className="accordion-body-info mt-3">
                    <h5>Module 6 : Database Management ( 15 Days )</h5>
                    <ul>
                      <li>Introduction to MongoDB</li>
                      <li>Advanced MongoDB for Developers</li>
                      <li>Data Modelling in MongoDB</li>
                      <li>Full Stack Development with MongoDB</li>
                      <li>Build Real World Projects with MongoDB</li>
                    </ul>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="7">
              <Accordion.Header className="position-relative">
                <div className="header-main d-flex align-items-center gap-3">
                  <div className="header-main-number">
                    <h1 className="m-0">07</h1>
                  </div>
                  <div className="fundamentals-box-card-info">
                    <p>Module</p>
                    <h6 className="p-0">Advanced DevOps </h6>
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="body">
                  <div className="accordion-body-tittle">
                    <h5 className="text-center mb-0">1 Month</h5>
                  </div>
                  <div className="accordion-body-info mt-3">
                    <h5>Module 7 : Advanced DevOps (Month 1)</h5>
                    <ul>
                      <li>Github & Bitbucket</li>
                      <li>Cloud Platforms</li>
                      <li>AWS Introduction, S3 Bucket, EC2</li>
                      <li>Website hosting and Deployment</li>
                      <li>CI/CD Pipeline</li>
                    </ul>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="8">
              <Accordion.Header className="position-relative">
                <div className="header-main d-flex align-items-center gap-3">
                  <div className="header-main-number">
                    <h1 className="m-0">08</h1>
                  </div>
                  <div className="fundamentals-box-card-info">
                    <p>Module</p>
                    <h6 className="p-0">
                      Final Project & Career Preparation 
                    </h6>
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="body">
                  <div className="accordion-body-tittle">
                    <h5 className="text-center mb-0">1 Month</h5>
                  </div>
                  <div className="accordion-body-info mt-3">
                    <h5>
                      Module 8 : Final Project & Career Preparation (Month 1)
                    </h5>
                    <ul>
                      <li>Full Stack Project Development</li>
                      <li>Interview Preparation</li>
                      <li>Resume Building</li>
                      <li>Freelancing & Remote Work Tips</li>
                      <li>Networking & Building Industry Connections</li>
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
