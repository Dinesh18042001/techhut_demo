import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css"; 
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Helmet } from "react-helmet-async";

export default function Mentors() {
  const options = {
    loop: true,
    margin: 30,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    navText: [
      '<i class="fa-solid fa-arrow-left"></i>',
      '<i class="fa-solid fa-arrow-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <>
      <Helmet>
        {/* <title>Techhut - Explore Technology</title> */}
        <meta
          name="description"
          content="Connect with experienced mentors who inspire, guide, and empower you. Achieve your goals with personalized coaching and expert support tailored to your growth journey."
        />
      </Helmet>

      <div className="mentoes-section mt-4 mb-5" id="mentoes">
        <div className="container">
          <div className="mentoes-section-tittle mb-5">
            <h2 className="text-center">
              Meet Our Inspirational <span>Mentors</span>
            </h2>
            <p className="text-center">
              Mentors who are ready to guide, inspire, and empower you. Get to
              know our accomplished experts and Mentors to help you reach your
              goals.
            </p>
          </div>

          <OwlCarousel className="owl-theme" {...options}>
            <div className="item">
              <div className="mentoes-card position-relative">
                <div className="mentoes-card-tittle d-flex align-items-center gap-3">
                  <div className="mentoes-card-img">
                    <img src="./assets/Mentors/img1.jpg" alt="" />
                  </div>
                  <div className="mentoes-card-name">
                    <h6>Virindra Singh</h6>
                    <p>3+ years experience</p>
                    <p>Senior Engineer</p>
                  </div>
                </div>
                <hr />

                <div className="mentoes-card-company d-flex justify-content-center mb-2">
                  <img src="./assets/Mentors/daxko.png" alt="" />
                </div>

                <div className="mentoes-card-linkedin">
                  <a href="#">
                    <img src="./assets/Mentors/linkedin.png" alt="" />
                  </a>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="mentoes-card position-relative">
                <div className="mentoes-card-tittle d-flex align-items-center gap-3">
                  <div className="mentoes-card-img">
                    <img src="./assets/Mentors/img2.webp" alt="" />
                  </div>
                  <div className="mentoes-card-name">
                    <h6>Mahendra Singh</h6>
                    <p>6+ years experience</p>
                    <p>Sr. Associate</p>
                  </div>
                </div>
                <hr />

                <div className="mentoes-card-company d-flex justify-content-center mb-2">
                  <img src="./assets/Mentors/Cognizant.png" alt="" />
                </div>

                <div className="mentoes-card-linkedin">
                  <a href="#">
                    <img src="./assets/Mentors/linkedin.png" alt="" />
                  </a>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="mentoes-card position-relative">
                <div className="mentoes-card-tittle d-flex align-items-center gap-3">
                  <div className="mentoes-card-img">
                    <img src="./assets/Mentors/img3.jpeg" alt="" />
                  </div>
                  <div className="mentoes-card-name">
                    <h6>Simpy Gupta</h6>
                    <p>4+ years experience</p>
                    <p>Application Development Lead</p>
                  </div>
                </div>
                <hr />

                <div className="mentoes-card-company d-flex justify-content-center mb-2">
                  <img src="./assets/Mentors/accenture.png" alt="" />
                </div>

                <div className="mentoes-card-linkedin">
                  <a href="#">
                    <img src="./assets/Mentors/linkedin.png" alt="" />
                  </a>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="mentoes-card position-relative">
                <div className="mentoes-card-tittle d-flex align-items-center gap-3">
                  <div className="mentoes-card-img">
                    <img src="./assets/Mentors/img4.jpeg" alt="" />
                  </div>
                  <div className="mentoes-card-name">
                    <h6>Akshat Gupta</h6>
                    <p>2+ years experience</p>
                    <p>Software Engineer</p>
                  </div>
                </div>
                <hr />

                <div className="mentoes-card-company d-flex justify-content-center mb-2">
                  <img src="./assets/Mentors/phonepe.png" alt="" />
                </div>

                <div className="mentoes-card-linkedin">
                  <a href="#">
                    <img src="./assets/Mentors/linkedin.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </>
  );
}
