// Form.js
import React, { useState } from "react";
import { useLog } from "./FormProvider";

const Form = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { isLoggedIn, login } = useLog();

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid = password.length >= 8;

  const handleLogin = () => {
    if (isEmailValid && isPasswordValid && login(password)) {
      alert("Login successful");
    } else {
      alert("Login failed");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {isLoggedIn ? (
        <p>You are already logged in.</p>
      ) : (
        <>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {!isEmailValid && <p> enter a valid email address.</p>}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {!isPasswordValid && <p>Password need to be 8 characters long.</p>}
          <button onClick={handleLogin}>Login</button>
        </>
      )}
    </div>
  );
};

export default Form;
