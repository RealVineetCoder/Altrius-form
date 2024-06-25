"use client";
import React from "react";
import "./Css/heroSection.css";

const heroSection = () => {
  return (
    <div className="hero-css">
      <h1 className="hero-h1">Create your account</h1>
      <div>
        <div className="email-css">
          <label htmlFor="Email">Email</label>
          <br />
          <input className="email-input" type="text" id="Email" name="Email" />
        </div>
        <div className="p-all">
          <input className="checkbox-css" type="checkbox" id="conditions" name="tcondition" />
          <label htmlFor="conditions">
            <div className="p-css">
              <p className="p1-css">By singning you agree to our </p>
              <p className="p2-css">privacy policy and users terms</p>
            </div>
            <div className="p-css">
              <p className="p1-css">and</p>
              <p className="p2-css">merchant agreements</p>
            </div>
          </label>
        </div>
        <button className="button-css" type="submit">NEXT STEP</button>
      </div>
    </div>
  );
};

export default heroSection;
