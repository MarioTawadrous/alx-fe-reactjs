import React, { useState } from "react";

const RegistrationForm = () => {
  // Individual state variables
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validation checks for all fields
    if (!username) newErrors.username = "Username is required";
    if (!email) newErrors.email = "Email is required"; // Added email check
    if (!password) newErrors.password = "Password is required"; // Added password check

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors); // Using setErrors to update error state
      return;
    }

    console.log("Form submitted:", { username, email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors.username && <div className="error">{errors.username}</div>}
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <div className="error">{errors.email}</div>} // Added
        email error
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <div className="error">{errors.password}</div>} //
        Added password error
      </div>

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
