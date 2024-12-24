import React, { useState } from "react";
import "../../styles/LoginUp.css";
import NavBar from "../NavBar";

function LoginSignUp() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div className="auth-parent">
      <NavBar/>
      <div className="auth-container">
        <div className={`auth-card ${isLogin ? "login-active" : "signup-active"}`}>
          
          <div className={`form-section ${isLogin ? "" : "hidden"}`}>
            <h2>Sign In</h2>
            <form>
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button type="submit" className="btn-primary">Sign In</button>
              <p className="toggle-link">
                Forgot your password? |{" "}
                <span onClick={toggleForm}>Sign Up</span>
              </p>
            </form>
          </div>
          <div className="message-section">
            <h2>Hello, Friend!</h2>
            <p>Enter your personal details and start your journey with us</p>
            <button onClick={toggleForm} className="btn-secondary">
              Sign Up
            </button>
          </div>
        </div>

        <div className={`auth-card ${isLogin ? "hidden" : ""}`}>
     
          <div className={`form-section ${isLogin ? "hidden" : ""}`}>
            <h2>Create Account</h2>
            <form>
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button type="submit" className="btn-primary">Sign Up</button>
              <p className="toggle-link">
                Already have an account?{" "}
                <span onClick={toggleForm}>Sign In</span>
              </p>
            </form>
          </div>
          <div className="message-section">
            <h2>Welcome Back!</h2>
            <p>To keep connected with us, please login with your personal info</p>
            <button onClick={toggleForm} className="btn-secondary">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginSignUp;
