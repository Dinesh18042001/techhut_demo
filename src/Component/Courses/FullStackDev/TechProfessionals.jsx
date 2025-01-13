import React from "react";
import TechCard from "./TechCard";

export default function TechProfessionals() {
  return (
    <>
      <div className="techprofessionals-section mt-5 mb-5">
        <div className="container">
          <div className="techprofessionals-section-tittle mb-4">
            <h2 className="text-center mb-3">
            Want to take <span>Success</span> Ladder ?
            </h2>
            <p className="text-center">
              <span>Get connected today</span> with ambitious mentors who will help you transform your career through TechHut’s programs.
            </p>
          </div>

          <div className="techprofessionals-btn-box mt-2">
            <h6 className="text-center">
              Get more insights on how TechHut can help you crack a full stack
              or backend role in top tech companies
            </h6>

            <div className="main-techprofessionals-box row justify-content-center gap-4 mt-4">
              <div className="col-12 col-sm-6 col-md-auto techprofessionals-box-one">
                <a href="assets/pdf/Curriculum.pdf" target="_blank">
                  Download Career Handbook{" "}
                  <i className="fa-solid fa-download ms-2"></i>
                </a>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
