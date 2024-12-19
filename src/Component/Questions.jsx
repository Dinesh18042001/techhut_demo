import React from "react";

export default function Questions() {
  return (
    <>
      <div className="qusetion-section mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="qusetion-main">
                <h2 className="text-center">
                  Frequently Asked <span>Questions</span>
                </h2>
                <p className="text-center">
                  Explore more about how TechHut can help you grow your skills
                  and achieve great height.
                </p>

                <div className="qusetion-img">
                  <img src="./assets/question/question.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="according-main">
                <div className="accordion" id="accordionExample">
                  {/* Accordion Item 1 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                       <h6>What courses does TechHut Academy offer?</h6> 
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                        TechHut Academy provides courses of <strong>Full Stack Development</strong> and <strong>Digital Marketing</strong>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Accordion Item 2 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                       <h6>Are the courses suitable for beginners?</h6>
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                        <strong>Yes,</strong> all the courses are designed for <strong>beginners,</strong> as well as for the <strong>working professionals.</strong>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Accordion Item 3 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        <h6>What is the duration of each course?</h6>
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                        Course durations are <strong>6 to 7 Months</strong> but we offer <strong>placement assistance upto 1 year</strong> after that.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Accordion Item 4 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        <h6>Do the courses include hands-on projects?
                        </h6>
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                        <strong>Yes,</strong> practical projects are incorporated to enhance learning.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Accordion Item 5 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        <h6>Is there a certificate upon course completion?</h6>
                      </button>
                    </h2>
                    <div
                      id="collapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFive"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                        <strong>Yes,</strong> certificates are awarded after successfully completing a course.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

