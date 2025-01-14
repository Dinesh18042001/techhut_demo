import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function AlumniSay() {
  const options = {
    loop: true,
    margin: 20,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 800,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  };

  return (
    <div className="alumuisay-section mb-5">
      <div className="container">
        <div className="alumuisay-section-tittle mb-5">
          <h2 className="text-center">
            What Our <span>Alumni Say</span>
          </h2>
          <p className="text-center">
            Explore the heartfelt testimonials from all satisfied students.
            These glowing reviews reflect the positive impact our platform has
            had on their journeys. Join the community and experience success
            just like they did!
          </p>
        </div>

        {/* Owl Carousel */}
        <OwlCarousel className="owl-theme" {...options}>
          <div className="item h-100">
            <div className="alumuisay-card mb-4 h-100 position-relative">

              <div className="alumuisay-card-tittle d-flex align-items-center">
                <div className="alumuisay-card-tittle-img me-3">
                  <img src="./assets/AlumniSay/img1.jpg" alt="" />
                </div>
                <div>
                  
                </div>
                <div className="alumuisay-card-tittle-info">
                  <h6>Abhijay Anand</h6>

                  <div className="date">
                    <p>2024-07-27</p>
                  </div>
                </div>
              </div>
              <div className="alumuisay-card-main-info mt-3">
                <div className="ratting">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>

                <p className="mb-3">
                  “I had an amazing experience using this platform. I not only
                  found a mentor here but also completed a course that helped
                  guide me on a solid career path. Highly recommend it for
                  anyone looking to grow!”
                </p>
              </div>

              <div className="google-icon">
                <img src="./assets/AlumniSay/google.svg" alt="" />
              </div>
            </div>
          </div>

          <div className="item h-100">
            <div className="alumuisay-card mb-4 h-100">
              <div className="alumuisay-card-tittle d-flex align-items-center">
                <div className="alumuisay-card-tittle-img me-3">
                  <img src="./assets/AlumniSay/img2.jpg" alt="" />
                </div>
                <div className="alumuisay-card-tittle-info">
                  <h6>Dev Bana</h6>
                  <div className="date">
                    <p>2024-07-27</p>
                  </div>
                  
                </div>
              </div>
              <div className="alumuisay-card-main-info mt-3">
              <div className="ratting ">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                <p className="mb-3">
                  “Using this platform was a turning point for me. The
                  mentorship and course I completed here were instrumental in
                  shaping my career path. I highly recommend it for anyone
                  looking to invest in their personal and professional
                  growth.”👍
                </p>
              </div>
              <div className="google-icon">
                <img src="./assets/AlumniSay/google.svg" alt="" />
              </div>
            </div>
          </div>

          <div className="item h-100">
            <div className="alumuisay-card mb-4 h-100">
              <div className="alumuisay-card-tittle d-flex align-items-center">
                <div className="alumuisay-card-tittle-img me-3">
                  <img src="./assets/AlumniSay/img3.jpg" alt="" />
                </div>
                <div className="alumuisay-card-tittle-info">
                  <h6>Srijan Jaiswal</h6>
                  <div className="date">
                    <p>2024-07-27</p>
                  </div>
                  
                </div>
              </div>
              <div className="alumuisay-card-main-info mt-3">
              <div className="ratting ">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                <p className="mb-3">
                  “This platform truly helped me level up. The mentorship I
                  received and the course I completed gave me valuable insights
                  and direction for my career. It’s a great resource for anyone
                  looking to make progress professionally!”
                </p>
              </div>
              <div className="google-icon">
                <img src="./assets/AlumniSay/google.svg" alt="" />
              </div>
            </div>
          </div>

          <div className="item h-100">
            <div className="alumuisay-card mb-4 h-100">
              <div className="alumuisay-card-tittle d-flex align-items-center">
                <div className="alumuisay-card-tittle-img me-3">
                  <img src="./assets/AlumniSay/img4.jpg" alt="" />
                </div>
                <div className="alumuisay-card-tittle-info">
                  <h6>Janardhan</h6>
                  <div className="date">
                    <p>2024-07-27</p>
                  </div>
                </div>
              </div>
              <div className="alumuisay-card-main-info mt-3">
              <div className="ratting ">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                <p className="mb-3">
                  Tech-hut exceeded my personal expectations with their
                  innovative and job appealing courses. here, team is extremely
                  professional, responsive, and delivered high-quality results
                  on time. Highly recommend them for anyone seeking for career
                  switch.
                </p>
              </div>
              <div className="google-icon">
                <img src="./assets/AlumniSay/google.svg" alt="" />
              </div>
            </div>
          </div>

          <div className="item h-100">
            <div className="alumuisay-card mb-4 h-100">
              <div className="alumuisay-card-tittle d-flex align-items-center">
                <div className="alumuisay-card-tittle-img me-3">
                  <img src="./assets/AlumniSay/img5.jpg" alt="" />
                </div>
                <div className="alumuisay-card-tittle-info">
                  <h6>Ramavtar Verma</h6>
                  <div className="date">
                    <p>2024-07-27</p>
                  </div>
                 
                </div>
              </div>
              <div className="alumuisay-card-main-info mt-3">
              <div className="ratting ">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                <p className="mb-3">
                  Before joining Techhut Academy I had few doubts but after
                  joining , Techhut curriculum is very well structured, and if I
                  miss any live class, I can always watch the recording at my
                  convenience. They provide a mentor who is available for
                  practice and mock interviews, which is incredibly helpful.
                </p>
              </div>
            </div>
          </div>

          <div className="item h-100">
            <div className="alumuisay-card mb-4 h-100">
              <div className="alumuisay-card-tittle d-flex align-items-center">
                <div className="alumuisay-card-tittle-img me-3">
                  <img src="./assets/AlumniSay/img6.jpg" alt="" />
                </div>
                <div className="alumuisay-card-tittle-info">
                  <h6>Bryan Warner</h6>
                  <div className="date">
                    <p>2024-07-27</p>
                  </div>
                  
                </div>
              </div>
              <div className="alumuisay-card-main-info mt-3">
              <div className="ratting ">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                <p className="mb-3">
                  A very recommeneded platform for beginners, who is seeking for
                  a good carrer path. If you want a mentor you can get it from
                  here and very precisely you can choose any MNC mentors. Happy
                  with the culture of mentors and their guideance.
                </p>
              </div>
              <div className="google-icon">
                <img src="./assets/AlumniSay/google.svg" alt="" />
              </div>
            </div>
          </div>

          <div className="item h-100">
            <div className="alumuisay-card mb-4 h-100">
              <div className="alumuisay-card-tittle d-flex align-items-center">
                <div className="alumuisay-card-tittle-img me-3">
                  <img src="./assets/AlumniSay/img7.jpg" alt="" />
                </div>
                <div className="alumuisay-card-tittle-info">
                  <h6>Akhlesh maurya</h6>
                  <div className="date">
                    <p>2024-07-27</p>
                  </div>
                
                </div>
              </div>
              <div className="alumuisay-card-main-info mt-3">
              <div className="ratting ">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                <p className="mb-3">
                  This platform and the courses are excellent and the doubt
                  support was really quick and the mentors are good you can gain
                  hands on experience by doing real world projects and getting
                  ready for the interviews.❤
                </p>
              </div>
              <div className="google-icon">
                <img src="./assets/AlumniSay/google.svg" alt="" />
              </div>
            </div>
          </div>

          <div className="item h-100">
            <div className="alumuisay-card mb-4 h-100">
              <div className="alumuisay-card-tittle d-flex align-items-center">
                <div className="alumuisay-card-tittle-img me-3">
                  <img src="./assets/AlumniSay/img8.jpg" alt="" />
                </div>
                <div className="alumuisay-card-tittle-info">
                  <h6>Pankaj Kumar</h6>
                  <div className="date">
                    <p>2024-07-27</p>
                  </div>
                 
                </div>
              </div>
              <div className="alumuisay-card-main-info mt-3">
              <div className="ratting ">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                <p className="mb-3">
                  I was introduced to Techhut Academy by a friend, and it has
                  been an amazing experience! Highly recommend it for people who
                  face the issue to get Dream job !
                </p>
              </div>
              <div className="google-icon">
                <img src="./assets/AlumniSay/google.svg" alt="" />
              </div>
            </div>
          </div>

          <div className="item h-100">
            <div className="alumuisay-card mb-4 h-100">
              <div className="alumuisay-card-tittle d-flex align-items-center">
                <div className="alumuisay-card-tittle-img me-3">
                  <img src="./assets/AlumniSay/img9.jpg" alt="" />
                </div>
                <div className="alumuisay-card-tittle-info">
                  <h6>Zaara Hasan</h6>
                  <div className="date">
                    <p>2024-07-27</p>
                  </div>
                 
                </div>
              </div>
              <div className="alumuisay-card-main-info mt-3">
              <div className="ratting ">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                <p className="mb-3">
                  Very good platform I meet my mentor from here. Must recommend.
                </p>
              </div>
              <div className="google-icon">
                <img src="./assets/AlumniSay/google.svg" alt="" />
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
}
