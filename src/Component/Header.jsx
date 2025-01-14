import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Apply from "./Modals/Apply";
import { Offcanvas } from "bootstrap";
import { useNavigate } from 'react-router-dom';

export default function Header() {
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

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector(".navbar");
      if (document.documentElement.scrollTop > 20) {
        nav.classList.add("header-scrolled");
      } else {
        nav.classList.remove("header-scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const offcanvasElement = document.getElementById("offcanvasNavbar");
    const offcanvas = new Offcanvas(offcanvasElement);

    const toggleLinks = document.querySelectorAll("#toggle-tab");
    toggleLinks.forEach((link) => {
      link.addEventListener("click", () => {
        offcanvas.hide();
      });
    });


    const handleBackdropRemoval = () => {
      const backdrop = document.querySelector(".offcanvas-backdrop");
      if (backdrop) {
        backdrop.classList.remove("show");
        backdrop.remove(); 
      }
    };


    offcanvasElement.addEventListener(
      "hidden.bs.offcanvas",
      handleBackdropRemoval
    );
    

    return () => {
      toggleLinks.forEach((link) => {
      });
      offcanvasElement.removeEventListener(
        "hidden.bs.offcanvas",
        handleBackdropRemoval
      );
    };

    
  }, []);

  return (
    <>
      {/* Main Navbar */}
      <div id="home"></div>
      <nav className="navbar navbar-expand-lg navbar-light"  >
        <div className="container">
          <div className="logo">
            <Link onClick={() => doRedirect('#home')}>
              <img src="./assets/img/logo.png" alt="Logo" />
              <p className="mt-1 mb-1" >Where Learning Meets Opportunity</p>
            </Link>
          </div>

          {/* Mobile toggle button */}
          <a
            data-bs-toggle="offcanvas"
            href="#offcanvasNavbar"
            role="button"
            aria-controls="offcanvasNavbar"
            className="d-lg-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                fill="#000"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </a>

          {/* Main navigation links */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-lg-0">

              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  // href="#mentors"
                  onClick={() => doRedirect('#home')}
                >
                  Home
                </a>
              </li>
              <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="mobileServicesDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Courses
                  </a>
                  <ul class="drop_down">
                    <Link className="dropdown-item mb-3 mt-3" to="/full-stack-development">
                    Full Stack Development
                    </Link>
                    <Link className="dropdown-item mb-3" to="#">
                    Data Science/AI 
                    </Link>
                  </ul>
                </li>

              

              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  // href="#mentors"
                  onClick={() => doRedirect('#mentors')}

                >
                  Mentors
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                >
                 Program benefits
                </a>
              </li>

            </ul>

            {/* Contact Us button */}
            <div className="callbtn main-btn2">
              <a href="#" data-bs-toggle="modal" data-bs-target="#applyModal">
              Apply Free Counselling 
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Off-canvas for Mobile Navigation */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
            <img src="./assets/img/logo.png" alt="Logo" width="100" />
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" id="toggle-tab" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" id="toggle-tab "
              data-bs-dismiss="offcanvas"
                // to="/mentors" 
                onClick={() => doRedirect('#mentors')}
              >
                Mentors
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                data-bs-dismiss="offcanvas"
                to="/full-stack-development">
                Program
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link"
                onClick={() => doRedirect('#placements')}
                data-bs-dismiss="offcanvas"
                // href="#" 
                id="toggle-tab">
                Placements
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blogs" id="toggle-tab">
                Blog
              </Link>
            </li>

          </ul>
          {/* Adding the Contact Us button in off-canvas too */}
          <div className="d-flex gap-3 mt-4">
            <div className="nav-btn">
              <a
                href="#"
                data-bs-dismiss="offcanvas"
                data-bs-toggle="modal"
                id="toggle-tab"
                data-bs-target="#applyModal"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Apply Modal */}
      <Apply />
    </>
  );
}
