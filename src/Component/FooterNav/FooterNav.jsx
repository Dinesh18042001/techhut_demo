import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function FooterNav() {

  const navigate = useNavigate();
  const doRedirect = (tag) => {
    console.log(tag);
    navigate('/');

    setTimeout(() => {
      let divId = tag?.replace("#", "")
      const element = document.getElementById(divId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100)
  }

  return (
    <div className="footer-nav-section">
      <div className="footer-nav-box d-flex justify-content-between">
        <div className="footer-nav-link">
          <Link onClick={() => doRedirect('#home')}>
            <div className="footer-nav-link-main text-center">
              <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 96 960 960" width="30" fill="currentColor">
                <path d="M480 296 160 576h80v280h160V656h120v200h160V576h80L480 296Z" />
              </svg>

              <p className="mt-0">Home</p>
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
          <Link to="/full-stack-development">
            <div className="footer-nav-link-main footer-nav-link-main3 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="30"
                height="30"
              >
                <path d="M12 2L1 7l11 5 9-4.55v5.95c0 .85.35 1.7 1 2.35l1 1-2 2v1h-8v-1H7v1H5v-1L3 18.75l1-1c.65-.65 1-1.5 1-2.35v-6.4L12 2zm9 5.1L12 10.9 3 7.1v.75l9 4.55 9-4.55V7.1z" />
              </svg>

              <p className="mt-0">Courses</p>
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
          <Link onClick={() => doRedirect('#mentors')}>
            <div className="footer-nav-link-main text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="30"
                height="30"
              >
                <path d="M12 12c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V20h14v-2.5c0-2.33-4.67-3.5-7-3.5zm6-5c.83 0 1.5-.67 1.5-1.5S18.83 6 18 6s-1.5.67-1.5 1.5S17.17 9 18 9zm0 2c-1.11 0-3 .56-3 1.5V14h6v-1.5c0-.94-1.89-1.5-3-1.5zM6 9c.83 0 1.5-.67 1.5-1.5S6.83 6 6 6 4.5 6.67 4.5 7.5 5.17 9 6 9zm0 2c-1.11 0-3 .56-3 1.5V14h6v-1.5C9 11.56 7.11 11 6 11z" />
              </svg>

              <p className="mt-0">Mentors</p>
            </div>
          </Link>
        </div>

        <div className="footer-nav-link">
          <a href="tel:+9650878020">
            <div className="footer-nav-link-main footer-nav-link-main2 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="30"
                height="30"
              >
                <path d="M6.62 10.79a15.093 15.093 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1v3.64c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1H6c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.34.03.74-.25 1.02l-2.2 2.2z" />
              </svg>

              <p className="mt-0">call now</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
