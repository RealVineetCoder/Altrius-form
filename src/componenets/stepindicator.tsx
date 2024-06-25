"use client";
import React from "react";
import "../componenets/Css/stepindicator.css";

const stepindicator = () => {
  return (

    <div className="container">
    <section className="step-indicator">
        <div className="step step1 active">
            <div className="step-icon"></div>
          <p>Account</p>
        </div>
      <div className="indicator-line active"></div>
      <div className="step step2">
          <div className="step-icon"></div>
        <p>Security</p>
      </div>
      <div className="indicator-line"></div>
      <div className="step step3">
          <div className="step-icon"></div>
        <p>Business</p>
      </div>
    </section>
  </div>
  );
};

export default stepindicator;
