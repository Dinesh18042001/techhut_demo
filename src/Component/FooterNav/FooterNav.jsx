import React from "react";
import { Link } from "react-router-dom";

export default function FooterNav() {
  return (
    <div className="footer-nav-section">
      <div className="footer-nav-box d-flex justify-content-between">
        <div className="footer-nav-link">
          <Link to="/">
            <div className="footer-nav-link-main text-center">
              <img src="./assets/FooterNav/icon1.png" alt="" />
              <p className="mt-1">Home</p>
            </div>
          </Link>
        </div>

        {/* <div className="footer-nav-link">
          <a href="#">
            <div className="footer-nav-link-main footer-nav-link-main2 text-center">
            <img src="./assets/FooterNav/telephone.png" alt="" />
              <p>Contact</p>
            </div>
          </a>
        </div> */}

        <div className="footer-nav-link">
          <Link to="features">
            <div className="footer-nav-link-main footer-nav-link-main3 text-center">
              <img src="./assets/FooterNav/instructor.png" alt="" />
              <p className="mt-1">Courses</p>
            </div>
          </Link>
        </div>

        {/* <div className="footer-nav-link">
          <a href="#">
            <div className="footer-nav-link-main text-center">
              <img src="./assets/FooterNav/application.png" alt="" />
              <p className="mt-1">Features</p>
            </div>
          </a>
        </div> */}

        <div className="footer-nav-link">
          <Link to="/mentors">
            <div className="footer-nav-link-main text-center">
              <img src="./assets/FooterNav/mentee.png" alt="" />
              <p className="mt-1">Mentors</p>
            </div>
          </Link>
        </div>

        <div className="footer-nav-link">
          <a href="tel:+9650878020">
            <div className="footer-nav-link-main footer-nav-link-main2 text-center">
              <img src="./assets/FooterNav/telephone.png" alt="" />
              <p className="mt-1">call now</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
