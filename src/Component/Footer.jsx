import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="footer-section mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="footer-logo position-relative">
                <img src="./assets/footer/footerlogo.svg" alt="" />

                <div className="footer-socal text-center d-flex  mt-3 mb-3">
                  <Link to="https://www.facebook.com/techhutacademy/" target="_blank" className="mx-1">
                  <i class="fa-brands fa-facebook-f"></i>
                  </Link>
                  <Link to="https://www.instagram.com/techhutacademy/" target="_blank" className="mx-1">
                  <i class="fa-brands fa-instagram"></i>
                  </Link>
                  <Link to="https://www.linkedin.com/company/techhutacademy/" target="_blank" className="mx-1">
                  <i class="fa-brands fa-linkedin-in"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-2 custom-col ">

              <div className="footer-link mb-3">
                <div className="main-link mb-2">
                  <a href="#">Courses</a>
                </div>
                <div className="main-link mb-2">
                  <a href="#">Mentors</a>
                </div>
                <div className="main-link mb-2">
                  <a href="#">Program Benefits</a>
                </div>
                <div className="main-link mb-2">
                  <a href="#">Blog</a>
                </div>
              </div>

            </div>

            <div className="col-lg-3 mb-3">
              <div className="footer-link">
                <div className="main-link mb-2">
                  <Link to="/refund-policy">Refund Policy</Link>
                </div>
                <div className="main-link mb-2">
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </div>
                <div className="main-link mb-2">
                  <Link to ="/terms">Terms & Conditions</Link>
                </div>
              </div>

            </div>

            <div className="col-lg-4">
              <div className="footer-contact-info">
                <div className="footer-contact-main mb-2">
                <span><i class="fa-solid fa-phone me-3"></i></span>
                  <a href="#">738791938131717171</a>
                </div>
                <div className="footer-contact-main mb-2">
                <span><i class="fa-solid fa-location-dot me-3"></i></span>
                  <a href="#">A-150, Sector 63, Noida</a>
                </div>
                <div className="footer-contact-main">
                <span><i class="fa-solid fa-envelope me-3"></i></span>
                  <a href="#">info@techhutacademy.com</a>
                </div>
              </div>
            </div>
          </div>
          <hr className="footer-line"/>

          <div className="company-link text-center">
            <p>Copyright © 2024 ,Designed by <Link to="https://webpristine.com/" target="_blank">Webpristine Technologies Pvt. Ltd.</Link></p>
          </div>
        </div>
      </div>
    </>
  );
}
