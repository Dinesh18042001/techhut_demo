import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="footer-section mt-5">
        <div className="container">
          <div className="row ">
            <div className="col-lg-6">
              <div className="footer-logo mb-4">
                <Link to="/"><img src="./assets/img/logo.png" alt="" /></Link>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="row justify-content-between align-items-center">
                <div className="col-lg-8">
                  <div className="link-main-box d-flex gap-3">
                    <p><Link to="/refund-policy">Refund Policy</Link></p>
                    <p><Link to="/privacy-policy">Privacy Policy</Link></p>
                    <p><Link to="/terms">Terms & Condition</Link></p>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="socal-link d-flex gap-3 justify-content-center justify-content-lg-start sm-mt-4">
                    <span>
                      <Link to="https://www.facebook.com/techhutacademy/" target="_blank"><i className="fa-brands fa-facebook-f"></i></Link>
                    </span>
                    <span>
                      <Link to="https://www.linkedin.com/company/techhutacademy/" target="_blank"><i className="fa-brands fa-linkedin-in"></i></Link>
                    </span>
                    <span>
                      <Link to="https://www.instagram.com/techhutacademy/" target="_blank"><i className="fa-brands fa-instagram"></i></Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="company-name text-center mb-4">
            <Link to="https://webpristine.com/" target="_blank">Copyright © 2024 ,Designed by Webpristine Technologies Pvt. Ltd.</Link>
          </div>
        </div>
      </div>
    </>
  );
}
