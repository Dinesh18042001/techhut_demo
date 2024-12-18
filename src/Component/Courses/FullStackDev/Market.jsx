import React from 'react'

export default function Market() {
  return (
    <>
    <div className="market-section mt-5 mb-5">
        <div className="container">
            <div className="market-section-tittle">
                <h2 className='text-center'>Prepare to Land Your Dream <span>Tech Job </span> </h2>
                <p className='text-center'>Our programs come with exclusive Career Services that are designed to help you apply your skills and stand out in the competitive tech job market.
                </p>
            </div>

            <div className="row justify-content-center mt-5">

                <div className="col-lg-4 mb-4">
                    <div className="market-card d-flex justify-content-start align-items-center gap-3">
                        <div className="market-card-icon">
                            <img src="./assets/market/icon1.png" alt="" />
                        </div>
                        <div className="market-card-info">
                            <p><strong>Interview Prep</strong> : Personalized mock interviews to prepare for technical rounds.</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 mb-4">
                    <div className="market-card market-card2  d-flex justify-content-start align-items-center gap-3">
                        <div className="market-card-icon">
                            <img src="./assets/market/icon2.png" alt="" />
                        </div>
                        <div className="market-card-info">
                            <p> <strong>Soft Skills Training</strong> : Enhance your communication with targeted soft skills coaching.</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 mb-4">
                    <div className="market-card market-card3 d-flex justify-content-start align-items-center gap-3">
                        <div className="market-card-icon">
                            <img src="./assets/market/icon3.png" alt="" />
                        </div>
                        <div className="market-card-info">
                        <p><strong>Mock Assessments</strong> : Practice with mock assessments to ace interviews.</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 mb-4">
                    <div className="market-card market-card4 d-flex justify-content-start align-items-center gap-3">
                        <div className="market-card-icon">
                            <img src="./assets/market/icon4.png" alt="" />
                        </div>
                        <div className="market-card-info">
                      <p> <strong> Career Coaching </strong> : Resume building and interview strategies for job readiness.</p>
                        </div>
                    </div>
                </div>


                <div className="col-lg-4 mb-4">
                    <div className="market-card market-card5 d-flex justify-content-start align-items-center gap-3">
                        <div className="market-card-icon">
                            <img src="./assets/market/icon5.png" alt="" />
                        </div>
                        <div className="market-card-info">
                            <p> <strong>GitHub Portfolio</strong> : Build a strong GitHub portfolio to impress recruiters.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    </>
  )
}
