import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import * as yup from "yup";
import swal from "sweetalert";

// Validation schema using Yup
const Emai = () => {
  const [isLoading, setIsLoading] = useState(false);

  const validationSchema = yup.object({
    mailAddress: yup
      .string()
      .email("Invalid email address")
      .required("Email is required"),
    location: yup.string().required("Location is required"),
    phone: yup.string().required("Phone number is required"),
    service: yup.string().required("Service is required"),
    clientPreferredTime: yup.string().required("Preferred time is required"),
    name: yup.string().required("Name is required"),
    messageContent: yup.string().required("Message content is required"),
  });

  // Formik Configuration
  const formik = useFormik({
    initialValues: {
      mailAddress: "",
      location: "",
      phone: "",
      service: "",
      clientPreferredTime: "",
      name: "",
      messageContent: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        // Logging the payload for debugging
        console.log({
          mailAddress: values.mailAddress,
          location: values.location,
          phone: values.phone,
          service: values.service,
          clientPreferredTime: values.clientPreferredTime,
          name: values.name,
          messageContent: values.messageContent,
        });

        // API Request with headers
        const response = await axios.post(
          "https://agile-x3ly.onrender.com/email/send",
          {
            mailAddress: values.mailAddress,
            location: values.location,
            phone: values.phone,
            service: values.service,
            clientPreferredTime: values.clientPreferredTime,
            name: values.name,
            messageContent: values.messageContent,
          },
          {
            headers: {
              "Content-Type": "application/json", // Ensure correct content type
            },
          }
        );
        console.log("Response:", response);

        // Success Handling
        if (
          response.status === 200 ||
          response.data.message === "Email sent successfully to string"
        ) {
          swal(
            "Success!",
            "Thank you for reaching out! We'll get back to you soon.",
            "success"
          );
          formik.resetForm();
        } else {
          swal(
            "Error",
            "Something went wrong. Please try again later.",
            "error"
          );
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        swal("Error", "Something went wrong. Please try again later.", "error");
      } finally {
        setIsLoading(false);
      }
    },
  });

  // Input Render Function
  const renderInput = (label, name, placeholder, type = "text") => (
    <div className="form-control">
      <label className="label">
        <span className="label-text font-bold text-white">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="input input-bordered text-white bg-[#2b2f33]"
        value={formik.values[name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched[name] && formik.errors[name] && (
        <p className="text-red-500 text-sm mt-2">{formik.errors[name]}</p>
      )}
    </div>
  );

  return (
    <section
      id="contact"
      className="bg-[#08020e] text-white py-12 px-4 sm:px-8 lg:px-16"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-12">
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="co text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Reach Out with your
            <br /> Thoughts
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl w-full sm:w-[80%] md:w-[70%] pop">
            For more information, send us your details, requirements, and
            project details. We will reach out to you within 2-23 working hours.
            <span className="m-4 text-purple-600 text-base sm:text-lg md:text-xl font-bold ma">
              Happy Browsing!!
            </span>
          </p>
        </div>

        <div className="bg-[#0f041a] rounded-lg shadow-lg p-4 sm:p-6 lg:p-10">
          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {renderInput("Email Address", "mailAddress", "Enter your email")}
              {renderInput("Address", "location", "Enter your address")}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {renderInput("Name", "name", "Enter your name")}
              {renderInput(
                "Your Free Time for a Meeting",
                "clientPreferredTime",
                "Enter your free time"
              )}
            </div>

            <div className="grid  grid-cols-1 md:grid-cols-2 gap-6">
              {renderInput("Phone Number", "phone", "Enter your phone number")}
              <div>
                <label
                  htmlFor="service"
                  className="block text-xs sm:text-sm font-medium mb-2 text-white"
                >
                  Services You Want
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full bg-[#2b2f33] text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-800"
                  value={formik.values.service}
                  onChange={formik.handleChange}
                >
                  <option value="">Select a service</option>
                  <option value="Personal Website">Personal Website</option>
                  <option value="Portfolio Website">Portfolio Website</option>
                </select>
                {formik.errors.service && formik.touched.service && (
                  <div className="text-red-500 text-xs mt-2">
                    {formik.errors.service}
                  </div>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="messageContent"
                className="block text-xs sm:text-sm font-medium mb-2"
              >
                Describe What You Want
              </label>
              <textarea
                id="messageContent"
                name="messageContent"
                placeholder="Briefly describe your requirements"
                className="w-full bg-[#2b2f33] text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-800"
                rows="10"
                value={formik.values.messageContent}
                onChange={formik.handleChange}
              />
              {formik.errors.messageContent &&
                formik.touched.messageContent && (
                  <div className="text-red-500 text-xs mt-2">
                    {formik.errors.messageContent}
                  </div>
                )}
            </div>

            <div>
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-800 text-white py-3 px-6 rounded-lg w-full"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Emai;
