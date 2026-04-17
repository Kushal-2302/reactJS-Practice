import React, { useState } from "react";
import "./login.css";

const Login = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div id="cardContainerLogin">
      <div className="card-container">
        <div className={`card ${isFlipped ? "flipped" : ""}`}>
          {/* Login Form */}
          <div className="card-front">
            <h2>Login</h2>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
            <p onClick={handleFlip}>Don't have an account? Sign Up</p>
          </div>

          {/* Signup Form */}
          <div className="card-back">
            <h2>Sign Up</h2>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
            <p onClick={handleFlip}>Already have an account? Login</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
