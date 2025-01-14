import React from "react";

export const MentorModelsOne = () => {
  return (
    <>
      <div
        className="modal fade"
        id="mentorModalOne"
        tabIndex="-1"
        aria-labelledby="mentorModalOneLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="mentorModalOneLabel">
                Mentor Details
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mentor-details-section">
                <div className="mentor-detail-tittle">
                  <div className="mentor-img text-center">
                    <img src="./assets/Mentors/img2.webp" alt="" />
                  </div>
                   <div className="mentor-detail-tittle-info">
                    <h5>Mahendra Singh</h5>
                    <p>6+ years of experience</p>
                    <p>Sr. Associate</p>
                   </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
