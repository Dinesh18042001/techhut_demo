import React from "react";
import { Link } from "react-router-dom";

export default function Blogs() {
  return (
    <>
      <div className="blogs-section pb-5 mt-2">
        <div className="container">
          <div className="blogs-section-tittle mb-5">
            <h1 className="text-center mb-3 ">
              Our <span>Blog</span>
            </h1>
            <p className="text-center">
              We enable organizations from startups to large enterprises to make
              their work environment more efficient.
            </p>
          </div>

          <div className="row align-items-center mb-5">
            <div className="col-lg-7">
              <div className="page-blog-info">
                <h4 className="mb-2">
                  Choose Your Career Path: <span>Full Stack Development</span>{" "}
                  or Getting Mastery in <span>Digital Marketing</span>
                </h4>
                <p className="mb-4">
                  Carving your future requires choosing the right line of
                  career. Full Stack Development and Digital Marketing are two
                  of the most promising fields today that have opened doors to
                  highly paid jobs, a secure career, and unlimited growth. Which
                  one is the best for you? Let's break things down into each so
                  you may confidently take your next step.
                </p>
              </div>

              <div className="blog-btn-date d-flex gap-5 align-items-center mt-4">
                <div className="blog-btn">
                  <Link to="/full-stack-development-blog">View More</Link>
                </div>

                <div className="date-icon d-flex align-items-center">
                  <i className="fa-solid fa-calendar-days me-2"></i>
                  <h6 className="mb-0">April 7, 2023</h6>
                </div>
              </div>
            </div>

            <div className="col-lg-5 text-center">
              <div className="blog-img">
                <img
                  src="./assets/blogs/blog5.jpg"
                  alt=""
                  className="img-fluid mx-auto d-block"
                />
              </div>
            </div>
          </div>

          <div className="row align-items-center mb-5">
            <div className="col-lg-5 order-lg-1 order-2 text-center">
              <div className="blog-img">
                <img
                  src="./assets/blogs/blog6.jpg"
                  alt=""
                  className="img-fluid mx-auto d-block"
                />
              </div>
            </div>

            <div className="col-lg-7 order-lg-2 order-1">
              <div className="page-blog-info">
                <h4 className="mb-2">
                  The Dos and Don’ts of Successful{" "}
                  <span>Digital Marketing </span> Campaigns.
                </h4>
                <p className="mb-4">
                  The time to start your digital marketing is now—but with a
                  plan. So many businesses dive in without knowing who the
                  audience is or what the overall goals are. In fact, this can
                  be likened to attempting to find treasures without a map. Be
                  it launching a product or giving your brand a boost, you do
                  need a well-thought-out strategy if you are to succeed.
                </p>
              </div>

              <div className="blog-btn-date d-flex gap-5 align-items-center mt-4">
                <div className="blog-btn">
                  <Link to="/digital-marketing-blog">View More</Link>
                </div>

                <div className="date-icon d-flex align-items-center">
                  <i className="fa-solid fa-calendar-days me-2"></i>
                  <h6 className="mb-0">August 9 ,2024</h6>
                </div>
              </div>
            </div>
          </div>

          <div className="row align-items-center mb-5">
            <div className="col-lg-7">
              <div className="page-blog-info">
                <h4 className="mb-2">
                  <span>Digital Marketing</span> Demystified: Strategies for
                  Success in 2025
                </h4>
                <p className="mb-4">
                  Even as you contemplate the effectiveness of the Internet
                  today, it does not hit you how quickly digital marketing has
                  evolved as a field within a short time. The good news is that
                  there should not be much stress in trying to adapt. This means
                  that if one uses the right strategies, 2025 could be the year
                  that one’s business finally breaks into the big marketing
                  leagues.
                </p>
              </div>

              <div className="blog-btn-date d-flex gap-5  align-items-center mt-4">
                <div className="blog-btn">
                  <Link to="/digital-marketing-Demystified-blog">
                    View More
                  </Link>
                </div>

                <div className="date-icon d-flex align-items-center">
                  <i className="fa-solid fa-calendar-days me-2"></i>
                  <h6 className="mb-0">April 29, 2024</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-5 text-center">
              <div className="blog-img">
                <img
                  src="./assets/blogs/blog7.jpg"
                  alt=""
                  className="img-fluid mx-auto d-block"
                />
              </div>
            </div>
          </div>

          <div className="row align-items-center mb-5">
            <div className="col-lg-5 order-lg-1 order-2 text-center">
              <div className="blog-img">
                <img
                  src="./assets/blogs/blog8.jpg"
                  alt=""
                  className="img-fluid mx-auto d-block"
                />
              </div>
            </div>

            <div className="col-lg-7 order-lg-2 order-1">
              <div className="page-blog-info">
                <h4 className="mb-2">
                  Is <span>Programming Holding</span> You Back? Let Expert
                  Mentors Help You Excel!
                </h4>
                <p className="mb-4">
                  When programming seems to get in the way, it's a real downer
                  to want to keep going with your tech career. You may not be
                  able to get any job interviews, haven't got any kind of
                  referrals, and sometimes the complex concepts of coding bug
                  you. But these need not stop you from pursuing your dreams.
                  Instead, in due time, with proper guidance, programming will
                  become your strength rather than a roadblock.
                </p>
              </div>

              <div className="blog-btn-date d-flex gap-5 align-items-center mt-4">
                <div className="blog-btn">
                  <Link to="/programming-blog">View More</Link>
                </div>

                <div className="date-icon d-flex align-items-center">
                  <i className="fa-solid fa-calendar-days me-2"></i>
                  <h6 className="mb-0">May 15, 2024</h6>
                </div>
              </div>
            </div>
          </div>

          <div className="row align-items-center mb-5">
            <div className="col-lg-7">
              <div className="page-blog-info">
                <h4 className="mb-2">
                  Exploring the <span>Psychology</span> of High-Impact Content
                  Marketing
                </h4>
                <p className="mb-4">
                  There is a bit of science behind why some advertisements or
                  messages deeply strike a chord while others hardly leave any
                  dent in your memory. High-impact content marketing should
                  entail more than catchy slogans or flashy images. It means
                  using knowledge of psychological insights to tap into how
                  people think and feel and craft messages that stick. In this
                  blog, we will break down the psychological drivers of viral
                  content while showing how these tools can enable brands to
                  create truly sticky content. Ready to learn what makes
                  high-impact content just so unforgettable? Let's dive in.
                </p>
              </div>

              <div className="blog-btn-date d-flex gap-5  align-items-center mt-4">
                <div className="blog-btn">
                  <Link to="/psychology-blog">View More</Link>
                </div>

                <div className="date-icon d-flex align-items-center">
                  <i className="fa-solid fa-calendar-days me-2"></i>
                  <h6 className="mb-0">November 30, 2024</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-5 text-center">
              <div className="blog-img">
                <img
                  src="./assets/blogs/blog9.jpg"
                  alt=""
                  className="img-fluid mx-auto d-block"
                />
              </div>
            </div>
          </div>

          <div className="row align-items-center mb-5">
            <div className="col-lg-5 order-lg-1 order-2 text-center">
              <div className="blog-img">
                <img
                  src="./assets/blogs/blog10.jpg"
                  alt=""
                  className="img-fluid mx-auto d-block"
                />
              </div>
            </div>

            <div className="col-lg-7 order-lg-2 order-1">
              <div className="page-blog-info">
                <h4 className="mb-2">
                  Top <span>Digital Marketing Trends</span> You Can’t Ignore
                  This Year
                </h4>
                <p className="mb-4">
                  The world of digital marketing is fast-moving, and the ability
                  to keep up with new trends is what makes brands relevant.
                  Changes in technology, consumer behaviour, and platform
                  updates are some of the drivers of innovation, and how fast
                  one adapts can make a difference between leading the pack and
                  bringing up the rear. This year, 2024, several trends have
                  emerged to be game-changers, from enhancements in AI to
                  immersive virtual experiences. Following are ten trends that
                  can reshape your marketing strategy in terms of better
                  audience engagement, building trust, and driving growth.
                </p>
              </div>

              <div className="blog-btn-date d-flex gap-5 align-items-center mt-4">
                <div className="blog-btn">
                  <Link to="/digital-marketing-trends-blog">View More</Link>
                </div>

                <div className="date-icon d-flex align-items-center">
                  <i className="fa-solid fa-calendar-days me-2"></i>
                  <h6 className="mb-0">November 22, 2024</h6>
                </div>
              </div>
            </div>
          </div>

          <div className="row align-items-center mb-5">
            <div className="col-lg-7">
              <div className="page-blog-info">
                <h4 className="mb-2">
                  Which <span>Language</span> Is Best for Full Stack Developers?
                </h4>
                <p className="mb-4">
                  When choosing which language is better for full stack
                  developers, it is important to pay attention to the nature of
                  web development as it continues to be and the particular
                  requirements of the current projects. In 2025, a number of
                  programming languages would enable full stack development that
                  is more regardless of being a general-purpose language. These
                  are the languages that we would like to present in detail and
                  explain why they might be the best fit. Let’s get into it.
                </p>
              </div>

              <div className="blog-btn-date d-flex gap-5  align-items-center mt-4">
                <div className="blog-btn">
                  <Link to="/Language-blog">View More</Link>
                </div>

                <div className="date-icon d-flex align-items-center">
                  <i className="fa-solid fa-calendar-days me-2"></i>
                  <h6 className="mb-0">November 10, 2024</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-5 text-center">
              <div className="blog-img">
                <img
                  src="./assets/blogs/blog11.jpg"
                  alt=""
                  className="img-fluid mx-auto d-block"
                />
              </div>
            </div>
          </div>

          <div className="row align-items-center mb-5">
            <div className="col-lg-5 order-lg-1 order-2 text-center">
              <div className="blog-img">
                <img
                  src="./assets/blogs/blog12.jpg"
                  alt=""
                  className="img-fluid mx-auto d-block"
                />
              </div>
            </div>

            <div className="col-lg-7 order-lg-2 order-1">
              <div className="page-blog-info">
                <h4 className="mb-2">
                  What is the role of a <span>Digital Marketer</span>? Getting
                  Started
                </h4>
                <p className="mb-4">
                  The world of digital marketing is fast-moving, and the ability
                  to keep up with new trends is what makes brands relevant.
                  Changes in technology, consumer behaviour, and platform
                  updates are some of the drivers of innovation, and how fast
                  one adapts can make a difference between leading the pack and
                  bringing up the rear. This year, 2024, several trends have
                  emerged to be game-changers, from enhancements in AI to
                  immersive virtual experiences. Following are ten trends that
                  can reshape your marketing strategy in terms of better
                  audience engagement, building trust, and driving growth.
                </p>
              </div>

              <div className="blog-btn-date d-flex gap-5 align-items-center mt-4">
                <div className="blog-btn">
                  <Link to="/Role-of-digital-marketing-blog">View More</Link>
                </div>

                <div className="date-icon d-flex align-items-center">
                  <i className="fa-solid fa-calendar-days me-2"></i>
                  <h6 className="mb-0">14 December, 2024</h6>
                </div>
              </div>
            </div>
          </div>

          <div className="row align-items-center mb-5">
            <div className="col-lg-7">
              <div className="page-blog-info">
                <h4 className="mb-2">
                  Understanding the Three Layers of{" "}
                  <span>Full Stack Development</span>
                </h4>
                <p className="mb-4">
                  Once deep inside full-stack development, it is like peeling
                  off the layers of a well-oiled machine. Each layer plays an
                  important role in creating seamless, functional web
                  applications. Put simply, full stack development is the master
                  of three distinct layers: the graphical interface, the
                  application, and the database. Allow us to explain this by
                  showing you how these layers are integrated into the modern
                  construction of websites.
                </p>
              </div>

              <div className="blog-btn-date d-flex gap-5  align-items-center mt-4">
                <div className="blog-btn">
                  <Link to="/layers-full-stack-blog">View More</Link>
                </div>

                <div className="date-icon d-flex align-items-center">
                  <i className="fa-solid fa-calendar-days me-2"></i>
                  <h6 className="mb-0">20 December, 2024</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-5 text-center">
              <div className="blog-img">
                <img
                  src="./assets/blogs/blog13.jpg"
                  alt=""
                  className="img-fluid mx-auto d-block"
                />
              </div>
            </div>
          </div>

          
          <div className="row align-items-center mb-5">
            <div className="col-lg-5 order-lg-1 order-2 text-center">
              <div className="blog-img">
                <img
                  src="./assets/blogs/blog14.jpg"
                  alt=""
                  className="img-fluid mx-auto d-block"
                />
              </div>
            </div>

            <div className="col-lg-7 order-lg-2 order-1">
              <div className="page-blog-info">
                <h4 className="mb-2">
                Mastering <span>Full-stack Development</span> : Key Skills and Tools to Get You Started
                </h4>
                <p className="mb-4">
                In today's technology-driven world, the art of full stack development opens several doors to a world of advantages. But what does it take to excel in this field, and what is it exactly? Be it a career one is eying in the domain of web development or upgrading one's existing skill set, knowing these essential skills and tools can give one an edge over others. Let's break it down step by step.
                </p>
              </div>

              <div className="blog-btn-date d-flex gap-5 align-items-center mt-4">
                <div className="blog-btn">
                  <Link to="/mastering-full-stack-blog">View More</Link>
                </div>

                <div className="date-icon d-flex align-items-center">
                  <i className="fa-solid fa-calendar-days me-2"></i>
                  <h6 className="mb-0">25 December, 2024</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
