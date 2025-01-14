import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

export default function Questions() {
  return (
    <div className="question-section mt-5">
      <div className="question-section-tittle mb-5">
        <h2 className="text-center">
          Frequently Asked <span>Questions</span>
        </h2>
        <p className="text-center">
          Explore more about how TechHut can help you grow your skills and
          achieve great heights.
        </p>
      </div>

      <Container>
        <Row>
          <Col lg={6} className=" mb-3">
            <div className="accordion-main">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    What courses does
                  TechHut Academy offer?
                  </Accordion.Header>
                  <Accordion.Body>
                    TechHut Academy provides courses in{" "}
                    <strong>Full Stack Development</strong> and{" "}
                    <strong>Digital Marketing</strong>.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    Are the courses
                    suitable for beginners?
                  </Accordion.Header>
                  <Accordion.Body>
                    <strong>Yes,</strong> all the courses are designed for{" "}
                    <strong>beginners</strong> as well as for{" "}
                    <strong>working professionals</strong>.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    What is the duration of
                     each course?
                  </Accordion.Header>
                  <Accordion.Body>
                    Course durations are <strong>6 to 7 months</strong>, but we
                    offer <strong>placement assistance</strong> for up to 1 year
                    after that.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    Do the courses include
                   hands-on projects?
                  </Accordion.Header>
                  <Accordion.Body>
                    <strong>Yes,</strong> practical projects are incorporated to
                    enhance learning.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    Is there a certificate upon
                     course completion?
                  </Accordion.Header>
                  <Accordion.Body>
                    <strong>Yes,</strong> certificates are awarded after
                    successfully completing a course.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Col>

          <Col lg={6}>
            <div className="question-main">
              <div className="question-img">
                <img
                  src="./assets/question/question.svg"
                  alt="FAQ Illustration"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
