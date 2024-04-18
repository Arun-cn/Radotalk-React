import React, { useState } from "react";

const Register = ({ onRegister }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    // Validate inputs (you can add more complex validation)
    if (
      name.trim() === "" ||
      email.trim() === "" ||
      username.trim() === "" ||
      password.trim() === ""
    ) {
      alert("Please fill in all fields");
      return;
    }

    // Call the onRegister function passed from the parent component
    // with the registration data as arguments
    onRegister({ name, email, username, password });
  };

  return (
    <div>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
