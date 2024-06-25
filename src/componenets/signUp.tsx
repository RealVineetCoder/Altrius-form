// 'use client'
// import React, { useState } from 'react';

// const MyForm = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     password: '',
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log('Form submitted with:', formData);
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Username:
//         <input
//           type="text"
//           name="username"
//           value={formData.username}
//           onChange={handleChange}
//         />
//       </label>
//       <label>
//         Password:
//         <input
//           type="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//         />
//       </label>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default MyForm;
import Navbar from "../componenets/navbar";
import HeroSection from "./heroSection";
import HalfScreenBackground from "./halfScreenBackground";
import "../componenets/Css/signUp.css";
import Footer from "../componenets/footer";
import StepIndicator from "../componenets/stepindicator";

const signUp = () => {
  return (
    <>
      <div className="class-width2">
        <HalfScreenBackground />
      </div>
      <div className="class-width">
        <Navbar />
        <StepIndicator  />
        <HeroSection />
        <Footer />
      </div>
    </>
  );
};

export default signUp;
