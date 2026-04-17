import React, { useState } from "react";
import "./pancard.css";

const PanCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="card-container" onClick={() => setIsFlipped(!isFlipped)}>
      <div className={`card ${isFlipped ? "flipped" : ""}`}>

        {/* 🔹 Front Side */}
        <div className="card-front">
          <h3>INCOME TAX DEPARTMENT</h3>
          <p>Government of India</p>

          <div className="details">
            <p><strong>Name:</strong> KUSHAL S</p>
            <p><strong>PAN:</strong> ABCPK1234F</p>
            <p><strong>DOB:</strong> 01/01/2000</p>
          </div>
        </div>

        {/* 🔹 Back Side */}
        <div className="card-back">
          <h4>Permanent Account Number</h4>
          <p>Signature</p>

          <div className="barcode">
            ||||||||||||||||||||
          </div>

          <p>Authorized Signature</p>
        </div>

      </div>
    </div>
  );
};

export default PanCard;