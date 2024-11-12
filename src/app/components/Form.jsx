"use client";
import { useState, useRef } from "react";
import emailjs from "emailjs-com";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "First name is required";
    }
    if (!formData.surname.trim()) {
      newErrors.surname = "Last name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = () => {
    return emailjs.sendForm(
      'service_tzyg87u',
      'template_fpr4tx2',
      form.current,
      'tLHxzJLhqO4YWH7bh'
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        await sendEmail();
        alert("SUCCESS! Email sent.");
      } catch (error) {
       alert("FAILED to send email:", error);
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "Failed to send email. Please try again later.",
        }));
      }
    }
  };

  return (
<div className="bg-[rgb(20,12,28)] rounded-xl w-full lg:max-w-2xl p-6">
  <div className="flex flex-col p-6">
    <h1 className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-3xl md:text-4xl lg:text-5xl mb-6 md:mb-10 text-center">
      Let's work together!
    </h1>
    <form ref={form} onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row md:space-x-6 mb-6">
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <input
            type="text"
            name="name"
            placeholder="First Name"
            onChange={handleChange}
            value={formData.name}
            className="text-white h-13 p-4 w-full bg-black rounded-md"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div className="w-full md:w-1/2">
          <input
            type="text"
            name="surname"
            placeholder="Last Name"
            onChange={handleChange}
            value={formData.surname}
            className="text-white h-13 p-4 w-full bg-black rounded-md"
          />
          {errors.surname && <p className="text-red-500 text-sm">{errors.surname}</p>}
        </div>
      </div>

      {/* Make email input full width */}
      <div className="w-full mb-6">
        <input
          type="email"
          name="email"
          placeholder="Email address"
          onChange={handleChange}
          value={formData.email}
          className="h-13 p-4 w-full bg-black text-white rounded-md"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      <div className="mb-6">
        <textarea
          name="message"
          placeholder="Message..."
          onChange={handleChange}
          value={formData.message}
          className="h-36 md:h-48 p-4 w-full bg-black text-white rounded-md resize-none"
        ></textarea>
        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
      </div>
      <div className="text-white w-[170px] cursor-pointer font-semibold text-lg rounded-full h-[40px] text-center bg-gradient-to-r from-purple-500 to-pink-700">
        <button type="submit" className="w-full h-full">Send Message</button>
      </div>
    </form>
  </div>
</div>

  );
}

export default Form;
