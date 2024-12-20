import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import EmailJS

export default function FullStackBanner() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    address: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Allow only numeric input for the phone number and restrict to 11 digits
    if (name === "number") {
      // Update state with only numeric values
      const numericValue = value.replace(/[^0-9]/g, '');
      if (numericValue.length <= 11) { // Restrict to 11 digits
        setFormData({ ...formData, [name]: numericValue });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex

    // Check if fields are filled
    for (const field in formData) {
      if (!formData[field]) {
        newErrors[field] = `${field} is required`;
      }
    }

    // Email validation
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    // Check if number has exactly 11 digits
    if (formData.number && (formData.number.length < 10 || formData.number.length > 12)) {
      newErrors.number = "Phone number must be between 10 and 12 digits";
    }
    

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (validateForm()) {
      // Use EmailJS to send the form data
      emailjs
        .send("service_p1fhn9x", "template_d6z5t8h", formData, "AyJgE9CLYKvZNGnjP")
        .then(
          (response) => {
            console.log("Email sent successfully:", response.status, response.text);
            // Clear form after successful submission
            setFormData({ address: "", name: "", email: "", number: "" });
            setErrors({});
          },
          (error) => {
            console.error("Failed to send email:", error);
          }
        );
    }
  };

  return (
    <>
      <div className="fullstackdev-banner-section position-relative">
        <div className="fullstackdev-banner-bg">
          <img src="./assets/banner/banner-bg.png" alt="" />
        </div>

        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 mb-5">
              <div className="fullstackdev-banner-info">
                <h1>Transform Your Career with Industry-Leading Full Stack Development Training</h1>
                
                <div className="para-info mt-4">
                  <p className="mb-3">
                    <strong>Hands-On Projects</strong> : Build real-world applications to showcase in your portfolio.
                  </p>
                  <p className="mb-3">
                    <strong>Job-Ready Skills</strong> : Learn technologies that top companies demand.

                  </p>
                  <p className="mb-3">
                    <strong>Career Support</strong> : Benefit from interview prep and guidance to land your dream job.
                  </p>
                </div>

                <div className="fullstackdev-banner-number mt-5">
                  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-5 row-cols-xxl-5 g-3 g-lg-5 justify-content-center">
                    <div className="col col1">
                      <div className="main-count text-center">
                        <h3>70%</h3>
                        <p>placed within 9 months</p>
                      </div>
                    </div>
                    <div className="col col1">
                      <div className="main-count text-center">
                        <h3>5+ LPA</h3>
                        <p>average dream job CTC</p>
                      </div>
                    </div>
                    <div className="col col1">
                      <div className="main-count text-center">
                        <h3>10+LPA</h3>
                        <p>average super-dream job CTC</p>
                      </div>
                    </div>
                    <div className="col col1">
                      <div className="main-count text-center">
                        <h3>50+</h3>
                        <p>Hiring Partners</p>
                      </div>
                    </div>
                    <div className="col">
                      <div className="main-count text-center">
                        <h3>50%</h3>
                        <p>Average Salary Hike</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 text-end">
              <div className="fullstackdev-banner-form">
                <h4 className="text-center">
                  Book a Live Class, <span>For Free!</span>
                </h4>

                <div className="main-fullstackdev-banner-form mt-4">
                  <form onSubmit={handleSubmit}>
                    <div className="row g-4">
                      {/* Name */}
                      <div className="col-12">
                        <input
                          type="text"
                          name="name"
                          className={`form-control ${errors.name ? "is-invalid" : ""}`}
                          id="name"
                          placeholder="Name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>

                      {/* Email */}
                      <div className="col-12">
                        <input
                          type="email"
                          name="email"
                          className={`form-control ${errors.email ? "is-invalid" : ""}`}
                          id="email"
                          placeholder="Email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>

                      {/* Number */}
                      <div className="col-12">
                        <input
                          type="tel"
                          name="number"
                          className={`form-control ${errors.number ? "is-invalid" : ""}`}
                          id="number"
                          placeholder="Phone No"
                          value={formData.number}
                          onChange={handleChange} // Use the modified handleChange
                        />
                      </div>

                      {/* Address */}
                      <div className="col-12">
                        <input
                          type="text"
                          name="address"
                          className={`form-control ${errors.address ? "is-invalid" : ""}`}
                          id="address"
                          placeholder="Address"
                          value={formData.address}
                          onChange={handleChange}
                        />
                      </div>

                      {/* Submit Button */}
                      <div className="col-12 text-center mt-5">
                        <div className="fullstackdev-banner-btn">
                          <button type="submit" className="w-100">
                            Book Your Trial
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="fullstackdev-banner-side-color">
          <img src="./assets/banner/side-color.png" alt="" />
        </div>
        <div className="fullstackdev-banner-side-color2">
          <img src="./assets/banner/side-color2.png" alt="" />
        </div>
      </div>
    </>
  );
}
