// import React, { useEffect, useState } from "react";
// import $ from "jquery";
// import "jquery-validation";
// import emailjs from "emailjs-com";

// export default function Apply() {
//   const [selectedUserType, setSelectedUserType] = useState("Student");
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     college: "",
//     companyName: "",
//     degree: "",
//     graduationYear: "Student",
//     yearsOfExperience: "",
//     message: "",
//   });
//   const [formStatus, setFormStatus] = useState(""); 

//   const handleUserTypeChange = (event) => {
//     const value = event.target.value;
//     setSelectedUserType(value);
//     setFormData((prev) => ({
//       ...prev,
//       graduationYear: value,
//       college: "",
//       companyName: "",
//       degree: "",
//       yearsOfExperience: "",
//     }));
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const serviceID = "service_voy70ze"; // Replace with your Service ID
//     const templateID = "template_jazbfwf"; // Replace with your Template ID
//     const userID = "UkQfN586uEmDSirO4"; // Replace with your User ID

//     const subject = `New Application Submission from ${formData.fullName}`;

//     const templateParams = {
//       fullName: formData.fullName,
//       email: formData.email,
//       phone: formData.phone,
//       college: formData.college || "N/A",
//       message: formData.message || "No additional message provided.",
//       subject: subject,
//     };

//     emailjs
//       .send(serviceID, templateID, templateParams, userID)
//       .then((response) => {
//         console.log("SUCCESS!", response.status, response.text);
        
//         // After successful email send, download the PDF
//         const pdfUrl = "/assets/pdf/TechHut.pdf";
//         const link = document.createElement("a");
//         link.href = pdfUrl;
//         link.setAttribute("download", "TechHut.pdf");
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);

//         // Show success message at the top of the form
//         setFormStatus("Your application has been forwarded. Our team will connect with you shortly.");

//         // Reset form fields
//         setFormData({
//           fullName: "",
//           email: "",
//           phone: "",
//           college: "",
//           companyName: "",
//           degree: "",
//           graduationYear: "Student",
//           yearsOfExperience: "",
//           message: "",
//         });
//         setSelectedUserType("Student");
//       })
//       .catch((err) => {
//         console.error("FAILED...", err);
//         setFormStatus("Failed to send form. Please try again.");
//       });
//   };

//   useEffect(() => {
//     $("#applyForm").validate({
//       rules: {
//         fullName: { required: true },
//         email: { required: true, email: true },
//         phone: { required: true, minlength: 10, maxlength: 15 },
//         college: { required: selectedUserType === "Student" },
//         degree: { required: selectedUserType === "Student" },
//         companyName: { required: selectedUserType === "Working professional" },
//         yearsOfExperience: { required: selectedUserType === "Working professional" },
//         message: { required: true },
//       },
//       messages: {
//         fullName: "Please enter your full name.",
//         email: "Please enter a valid email address.",
//         phone: {
//           required: "Please enter your phone number.",
//           minlength: "Your phone number must be at least 10 digits long.",
//           maxlength: "Your phone number cannot exceed 15 digits.",
//         },
//         college: "Please enter your college name.",
//         degree: "Please enter your degree.",
//         companyName: "Please enter your company name.",
//         yearsOfExperience: "Please select your work experience.",
//         message: "Please enter a message.",
//       },
//       errorPlacement: function (error, element) {
//         return true; // Suppress error messages in the UI
//       },
//       highlight: function (element) {
//         $(element).addClass("is-invalid");
//       },
//       unhighlight: function (element) {
//         $(element).removeClass("is-invalid");
//       },
//       submitHandler: function () {
//         handleSubmit();
//       },
//     });
//   }, [selectedUserType]);

//   return (
//     <>
//       <div
//         className="modal fade"
//         id="applyModal"
//         tabIndex="-1"
//         aria-labelledby="exampleModalLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog modal-lg">
//           <div className="modal-content">
//             <div className="modal-header">
//               <div>
//                 <h5 className="modal-title" id="exampleModalLabel">
//                   Apply now
//                 </h5>
//                 {/* <p>Next Batch Starts in November</p> */}
//               </div>
//               <button
//                 type="button"
//                 className="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               ></button>
//             </div>
//             <div className="modal-body">
//               <div className="modal-body-info">
//                 <form id="applyForm" onSubmit={handleSubmit}>
//                   {formStatus && (
//                     <div className="alert alert-info">{formStatus}</div>
//                   )}
//                   <div className="row form-main mb-3 mt-4">
//                     <div className="col-lg-6 col-md-6 mb-3">
//                       <input
//                         type="text"
//                         className="form-control"
//                         id="fullName"
//                         name="fullName"
//                         placeholder="Full Name *"
//                         value={formData.fullName}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>

//                     <div className="col-lg-6 col-md-6 mb-3">
//                       <input
//                         type="email"
//                         className="form-control"
//                         id="email"
//                         name="email"
//                         placeholder="Email id *"
//                         value={formData.email}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>

//                     <div className="col-lg-6 col-md-6 mb-3">
//                       <input
//                         type="tel"
//                         className="form-control"
//                         id="phone"
//                         name="phone"
//                         placeholder="Phone Number *"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>

//                     <div className="col-lg-6 col-md-6 mb-3">
//                       <select
//                         className="form-control"
//                         id="graduationYear"
//                         name="graduationYear"
//                         value={formData.graduationYear}
//                         onChange={handleUserTypeChange}
//                         required
//                       >
//                         <option value="Student">Student</option>
//                         <option value="Working professional">Working Professional</option>
//                       </select>
//                     </div>

//                     {selectedUserType === "Student" ? (
//                       <>
//                         <div className="col-lg-6 col-md-6 mb-3">
//                           <input
//                             type="text"
//                             className="form-control"
//                             id="college"
//                             name="college"
//                             placeholder="College Name *"
//                             value={formData.college}
//                             onChange={handleChange}
//                             required
//                           />
//                         </div>
//                         <div className="col-lg-6 col-md-6 mb-3">
//                           <input
//                             type="text"
//                             className="form-control"
//                             id="degree"
//                             name="degree"
//                             placeholder="Your Degree *"
//                             value={formData.degree}
//                             onChange={handleChange}
//                             required
//                           />
//                         </div>
//                       </>
//                     ) : (
//                       <>
//                         <div className="col-lg-6 col-md-6 mb-3">
//                           <input
//                             type="text"
//                             className="form-control"
//                             id="companyName"
//                             name="companyName"
//                             placeholder="Company Name *"
//                             value={formData.companyName}
//                             onChange={handleChange}
//                             required
//                           />
//                         </div>
//                         <div className="col-lg-6 col-md-6 mb-3">
//                           <select
//                             className="form-control"
//                             id="yearsOfExperience"
//                             name="yearsOfExperience"
//                             value={formData.yearsOfExperience}
//                             onChange={handleChange}
//                             required
//                           >
//                             <option value="">Work Experience *</option>
//                             <option value="1 year">1 year</option>
//                             <option value="2 years">2 years</option>
//                             <option value="3 years">3 years</option>
//                           </select>
//                         </div>
//                       </>
//                     )}

//                     <div className="col-lg-12 mb-3">
//                       <textarea
//                         className="form-control"
//                         id="message"
//                         name="message"
//                         rows="3"
//                         placeholder="Your message *"
//                         value={formData.message}
//                         onChange={handleChange}
//                         required
//                       ></textarea>
//                     </div>
//                   </div>
//                   <div className="text-center">
//                     <button type="submit" className="applymodel-btn">
//                       Submit
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }



// import React, { useEffect, useState } from "react";
// import $ from "jquery";
// import "jquery-validation";
// import emailjs from "emailjs-com";

// export default function Apply() {
//   const [selectedUserType, setSelectedUserType] = useState("select");
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     college: "",
//     companyName: "",
//     degree: "",
//     graduationYear: "select",
//     yearsOfExperience: "",
//     message: "",
//   });
//   const [formStatus, setFormStatus] = useState("");

//   const handleUserTypeChange = (event) => {
//     const value = event.target.value;
//     setSelectedUserType(value);
//     setFormData((prev) => ({
//       ...prev,
//       graduationYear: value,
//       college: "",
//       companyName: "",
//       degree: "",
//       yearsOfExperience: "",
//     }));
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     if (!$("#applyForm").valid()) return;

//     const serviceID = "service_voy70ze";
//     const templateID = "template_jazbfwf";
//     const userID = "UkQfN586uEmDSirO4";

//     const templateParams = {
//       fullName: formData.fullName,
//       email: formData.email,
//       phone: formData.phone,
//       college: formData.college || "N/A",
//       companyName: formData.companyName || "N/A",
//       degree: formData.degree || "N/A",
//       graduationYear: formData.graduationYear,
//       yearsOfExperience: formData.yearsOfExperience || "N/A",
//       message: formData.message || "No additional message provided.",
//     };

//     emailjs
//       .send(serviceID, templateID, templateParams, userID)
//       .then(() => {
//         setFormStatus("Your application has been successfully submitted.");
//         setFormData({
//           fullName: "",
//           email: "",
//           phone: "",
//           college: "",
//           companyName: "",
//           degree: "",
//           graduationYear: "select",
//           yearsOfExperience: "",
//           message: "",
//         });
//         setSelectedUserType("select");
//       })
//       .catch(() => {
//         setFormStatus("Failed to send the application. Please try again.");
//       });
//   };

//   useEffect(() => {
//     $("#applyForm").validate({
//       rules: {
//         fullName: { required: true },
//         email: { required: true, email: true },
//         phone: { required: true, minlength: 10, maxlength: 15 },
//         college: { required: selectedUserType === "Student" },
//         companyName: { required: selectedUserType === "Working professional" },
//         degree: { required: selectedUserType === "Student" },
//         graduationYear: { required: true, valueNotEquals: "select" },
//         yearsOfExperience: { required: selectedUserType === "Working professional" },
//         message: { required: true },
//       },
//       messages: {
//         graduationYear: { valueNotEquals: "Please select a valid user type." },
//         companyName: "Company name is required for working professionals.",
//         yearsOfExperience: "Years of experience is required for working professionals.",
//       },
//       highlight: (element) => $(element).addClass("is-invalid"),
//       unhighlight: (element) => $(element).removeClass("is-invalid"),
//     });

//     // Add custom validation method for select inputs
//     $.validator.addMethod(
//       "valueNotEquals",
//       function (value, element, arg) {
//         return arg !== value;
//       },
//       "Please select a value."
//     );
//   }, [selectedUserType]);

//   return (
//     <div className="modal fade" id="applyModal" tabIndex="-1" aria-hidden="true">
//       <div className="modal-dialog modal-lg">
//         <div className="modal-content">
//           <div className="modal-header">
//             <h5 className="modal-title">Apply Now</h5>
//             <button
//               type="button"
//               className="btn-close"
//               data-bs-dismiss="modal"
//               aria-label="Close"
//             ></button>
//           </div>
//           <div className="modal-body">
//             <form id="applyForm" onSubmit={handleSubmit}>
//               {formStatus && <div className="alert alert-info">{formStatus}</div>}
//               <div className="row mb-3 mt-4">
//                 <div className="col-lg-6 mb-3">
//                   <input
//                     type="text"
//                     className="form-control"
//                     name="fullName"
//                     placeholder="Full Name *"
//                     value={formData.fullName}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <div className="col-lg-6 mb-3">
//                   <input
//                     type="email"
//                     className="form-control"
//                     name="email"
//                     placeholder="Email *"
//                     value={formData.email}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <div className="col-lg-6 mb-3">
//                   <input
//                     type="tel"
//                     className="form-control"
//                     name="phone"
//                     placeholder="Phone *"
//                     value={formData.phone}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <div className="col-lg-6 mb-3">
//                   <select
//                     className="form-control"
//                     name="graduationYear"
//                     value={formData.graduationYear}
//                     onChange={handleUserTypeChange}
//                   >
//                     <option value="select">Select User Type *</option>
//                     <option value="Student">Student</option>
//                     <option value="Working professional">Working Professional</option>
//                   </select>
//                 </div>
//                 {selectedUserType === "Student" ? (
//                   <>
//                     <div className="col-lg-6 mb-3">
//                       <input
//                         type="text"
//                         className="form-control"
//                         name="college"
//                         placeholder="College Name *"
//                         value={formData.college}
//                         onChange={handleChange}
//                       />
//                     </div>
//                     <div className="col-lg-6 mb-3">
//                       <input
//                         type="text"
//                         className="form-control"
//                         name="degree"
//                         placeholder="Your Degree *"
//                         value={formData.degree}
//                         onChange={handleChange}
//                       />
//                     </div>
//                   </>
//                 ) : (
//                   <>
//                     <div className="col-lg-6 mb-3">
//                       <input
//                         type="text"
//                         className="form-control"
//                         name="companyName"
//                         placeholder="Company Name *"
//                         value={formData.companyName}
//                         onChange={handleChange}
//                       />
//                     </div>
//                     <div className="col-lg-6 mb-3">
//                       <select
//                         className="form-control"
//                         name="yearsOfExperience"
//                         value={formData.yearsOfExperience}
//                         onChange={handleChange}
//                       >
//                         <option value="">Work Experience *</option>
//                         <option value="1 year">1 year</option>
//                         <option value="2 years">2 years</option>
//                         <option value="3 years">3 years</option>
//                       </select>
//                     </div>
//                   </>
//                 )}
//                 <div className="col-lg-12 mb-3">
//                   <textarea
//                     className="form-control"
//                     name="message"
//                     rows="3"
//                     placeholder="Your message *"
//                     value={formData.message}
//                     onChange={handleChange}
//                   ></textarea>
//                 </div>
//               </div>
//               <div className="text-center">
//                 <button type="submit" className="btn btn-primary">
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




import React, { useEffect, useState } from "react";
import $ from "jquery";
import "jquery-validation";
import emailjs from "emailjs-com";

export default function Apply() {
  const [selectedUserType, setSelectedUserType] = useState("select");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    college: "",
    companyName: "",
    degree: "",
    graduationYear: "select",
    yearsOfExperience: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");

  const handleUserTypeChange = (event) => {
    const value = event.target.value;
    setSelectedUserType(value);
    setFormData((prev) => ({
      ...prev,
      graduationYear: value,
      college: "",
      companyName: "",
      degree: "",
      yearsOfExperience: "",
    }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const inputs = [
      { name: "fullName", required: true },
      { name: "email", required: true },
      { name: "phone", required: true },
      { name: "college", required: selectedUserType === "Student" },
      { name: "companyName", required: selectedUserType === "Working professional" },
      { name: "degree", required: selectedUserType === "Student" },
      { name: "graduationYear", required: true, invalidValue: "select" },
      { name: "yearsOfExperience", required: selectedUserType === "Working professional" },
      { name: "message", required: true },
    ];

    let isValid = true;
    inputs.forEach((input) => {
      const field = $(`[name=${input.name}]`);
      if (
        input.required &&
        (!formData[input.name] || formData[input.name] === input.invalidValue)
      ) {
        field.addClass("is-invalid");
        isValid = false;
      } else {
        field.removeClass("is-invalid");
      }
    });

    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    const serviceID = "service_voy70ze";
    const templateID = "template_jazbfwf";
    const userID = "UkQfN586uEmDSirO4";

    const templateParams = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      college: formData.college || "N/A",
      companyName: formData.companyName || "N/A",
      degree: formData.degree || "N/A",
      graduationYear: formData.graduationYear,
      yearsOfExperience: formData.yearsOfExperience || "N/A",
      message: formData.message || "No additional message provided.",
    };

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then(() => {
        setFormStatus("Your application has been successfully submitted.");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          college: "",
          companyName: "",
          degree: "",
          graduationYear: "select",
          yearsOfExperience: "",
          message: "",
        });
        setSelectedUserType("select");
        $(".form-control").removeClass("is-invalid");
      })
      .catch(() => {
        setFormStatus("Failed to send the application. Please try again.");
      });
  };

  return (
    <div className="modal fade" id="applyModal" tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Apply Now</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form id="applyForm" onSubmit={handleSubmit}>
              {formStatus && <div className="alert alert-info">{formStatus}</div>}
              <div className="row mb-3 mt-4">
                <div className="col-lg-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="fullName"
                    placeholder="Full Name *"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-lg-6 mb-3">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Email *"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-lg-6 mb-3">
                  <input
                    type="tel"
                    className="form-control"
                    name="phone"
                    placeholder="Phone *"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-lg-6 mb-3">
                  <select
                    className="form-control"
                    name="graduationYear"
                    value={formData.graduationYear}
                    onChange={handleUserTypeChange}
                  >
                    <option value="select">Select User Type *</option>
                    <option value="Student">Student</option>
                    <option value="Working professional">Working Professional</option>
                  </select>
                </div>
                {selectedUserType === "Student" ? (
                  <>
                    <div className="col-lg-6 mb-3">
                      <input
                        type="text"
                        className="form-control"
                        name="college"
                        placeholder="College Name *"
                        value={formData.college}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-lg-6 mb-3">
                      <input
                        type="text"
                        className="form-control"
                        name="degree"
                        placeholder="Your Degree *"
                        value={formData.degree}
                        onChange={handleChange}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="col-lg-6 mb-3">
                      <input
                        type="text"
                        className="form-control"
                        name="companyName"
                        placeholder="Company Name *"
                        value={formData.companyName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-lg-6 mb-3">
                      <select
                        className="form-control"
                        name="yearsOfExperience"
                        value={formData.yearsOfExperience}
                        onChange={handleChange}
                      >
                        <option value="">Work Experience *</option>
                        <option value="1 year">1 year</option>
                        <option value="2 years">2 years</option>
                        <option value="3 years">3 years</option>
                      </select>
                    </div>
                  </>
                )}
                <div className="col-lg-12 mb-3">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="3"
                    placeholder="Your message *"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
              <div className="text-center">
                <button type="submit" className=" form-submit-btn btn btn-primary w-100">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
