"use client";
import { useState } from "react";

const form = [
  { id: 1, type: "text", placeholder: "First Name" },
  { id: 2, type: "text", placeholder: "Last Name" },
  { id: 3, type: "email", placeholder: "Email address" },
  { id: 4, type: "text", placeholder: "Phone number" },
];

function Form() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [isSending, setIsSending] = useState(false);
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };
//   const validate = () => {
//     let errors = {};
//     if (!formData.name) errors.name = 'Name is required';
//     if (!formData.email) {
//       errors.email='Email is required'
//     }
//     else if () {
//       errors.email='Email is invalid'
//     }
//     if(!formData/)
//   }
  
//   function handleSubmit(e) {
//   else {
//       setErrors({});
//       setIsSending(true)
//       EmailJSResponseStatus.send("service_38l5bqr").then((response) => {
//         console.log("SUCCESS",response.status,response.text)
//       })
//   }
// }
  return (
    <div className="bg-[rgb(20,12,28)] rounded-xl w-full lg:max-w-2xl p-6">
      <div className="flex flex-col p-6">
        <h1 className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-3xl md:text-4xl lg:text-5xl mb-6 md:mb-10 text-center">
          Let's work together!
        </h1>
        <form>
          <div className="flex flex-col md:flex-row md:space-x-6 mb-6">
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <input
                type="text"
                placeholder="First Name"
                className="text-white h-13 p-4 w-full bg-black rounded-md"
              />
            </div>
            <div className="w-full md:w-1/2">
              <input
                type="text"
                placeholder="Last Name"
                className="text-white h-13 p-4 w-full bg-black rounded-md"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-6 mb-6">
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <input
                type="email"
                placeholder="Email address"
                className="h-13 p-4 w-full bg-black text-white rounded-md"
              />
            </div>
            <div className="w-full md:w-1/2">
              <input
                type="text"
                placeholder="Phone number"
                className="h-13 p-4 w-full bg-black text-white rounded-md"
              />
            </div>
          </div>

          <div className="mb-6">
            <input
              type="text"
              placeholder="Subject..."
              className="h-13 p-4 w-full bg-black text-white rounded-md"
            />
          </div>
          <div className="mb-6">
            <textarea
              placeholder="Message..."
              className="h-36 md:h-48 p-4 w-full bg-black text-white rounded-md resize-none"
            ></textarea>
          </div>
        </form>
        <div className="text-white w-[170px] cursor-pointer font-semibold text-lg rounded-full h-[40px]  text-center bg-gradient-to-r from-purple-500 to-pink-700 ">
          <button>Send Message</button>
        </div>
      </div>
    </div>
  );
}

export default Form;
