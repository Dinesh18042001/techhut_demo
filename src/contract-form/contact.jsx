import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ContactForm = () => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    workExperience: "entry",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "number") {
      const numericValue = value.replace(/[^0-9]/g, "");
      if (numericValue.length <= 10) {
        setFormData({ ...formData, [name]: numericValue });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    for (const field in formData) {
      if (!formData[field]) {
        newErrors[field] = `${field} is required`;
      }
    }
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (formData.number && formData.number.length !== 10) {
      newErrors.number = "Phone number must be exactly 10 digits";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      emailjs
        .send(
          "service_voy70ze",
          "template_parevxn",
          formData,
          "UkQfN586uEmDSirO4"
        )
        .then(
          (response) => {
            console.log(
              "Email sent successfully:",
              response.status,
              response.text
            );
            toast.success("Email send successfully!");
            setFormData({
              name: "",
              email: "",
              number: "",
              workExperience: "entry",
            });
            setErrors({});
          },
          (error) => {
            console.error("Failed to send email:", error);
            toast.error("Failed to send your booking request. Please try again.");
          }
        );
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row g-4">
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
          <div className="col-12">
            <input
              type="tel"
              name="number"
              className={`form-control ${errors.number ? "is-invalid" : ""}`}
              id="number"
              placeholder="Phone No"
              value={formData.number}
              onChange={handleChange}
            />
          </div>
          <div className="col-12">
            <select
              name="workExperience"
              className={`form-control home-select-input ${
                errors.workExperience ? "is-invalid" : ""
              }`}
              id="workExperience"
              value={formData.workExperience}
              onChange={handleChange}
            >
              <option value="">Select Work Experience*</option>
              <option value="student">Student</option>
              <option value="entry">Entry Level (0-2 years)</option>
              <option value="mid">Mid Level (2-5 years)</option>
              <option value="senior">Senior Level (5+ years)</option>
            </select>
          </div>
          <div className="col-12 text-center mt-5">
            <div className="fullstackdev-banner-btn">
              <button type="submit" className="w-100">
                Book Your Trial
              </button>
            </div>
          </div>
        </div>
      </form>
      {/* Toast container with custom class */}
      <ToastContainer className="custom-toast-container" />
    </>
  );
};
