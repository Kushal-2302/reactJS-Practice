import React, { useState, useEffect } from "react";
import './otpvalidation.css'


const OtpValidation = () => {
   const [otp, setOtp] = useState("");
  const [inputOtp, setInputOtp] = useState("");
  const [timer, setTimer] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const generateOTP = () => {
    const newOtp = Math.floor(1000 + Math.random() * 9000).toString();
    setOtp(newOtp);
    setTimer(10);
    setMessage("");
    setInputOtp("");
  };

  const validateOTP = () => {
    if (timer === 0) {
      setMessage("❌ OTP Expired");
    } else if (inputOtp === otp) {
      setMessage("✅ OTP Verified Successfully");
    } else {
      setMessage("❌ Invalid OTP");
    }
  };
    return (
         <div className="otp-container">
      <div className="card">
        <h1>OTP Verification</h1>

        {timer === 0 && (
        <button className="btn primary" onClick={generateOTP}>
          Generate OTP
        </button>
      )}

        {otp && (
          <p className="otp-text">
            Your OTP: <span>{otp}</span>
          </p>
        )}

        {timer > 0 && (
          <p className="timer">Expires in: {timer}s</p>
        )}

        <input
          type="text"
          maxLength="4"
          value={inputOtp}
          onChange={(e) => setInputOtp(e.target.value)}
          placeholder="Enter OTP"
          className="input"
        />

        <button className="btn success" onClick={validateOTP}>
          Verify OTP
        </button>

        {message && <p className="message">{message}</p>}
      </div>
    </div>
    )
}

export default OtpValidation
