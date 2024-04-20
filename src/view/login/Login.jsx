import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../axios/axiosInstance";
import {useAuth} from "../../context/authContext"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  const handleLogin = async() => {
    // Validate username and password (you can add more complex validation)
    if (email.trim() === "" || password.trim() === "") {
      alert("Please enter a email and password");
      return;
    }
     
    try {
      const res = await axios.post("api/v1/auth/login",{email, password});
      if (res){
        setAuth({
          ...auth,
          user:res.data.user,
          token:res.data.token
        });
        localStorage.setItem('auth',JSON.stringify(res.data))
        navigate("/chats")
      }
    } catch (error) {
     // console.log(error);
    }
    // Call the onLogin function passed from the parent component
    // with the username and password as arguments
    //onLogin(username, password);
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="emil"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
