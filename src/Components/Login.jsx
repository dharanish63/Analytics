import React, { useState } from "react";
import { Typography, TextField, Button } from "@mui/material";
import { axiosPost } from "../axiosServices";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import "../css/login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const Navigate = useNavigate();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    console.log(e);
    console.log(e.target.value);
  };
  const handlePassChange = (e) => {
    setPass(e.target.value);
    console.log(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(e);
      await axiosPost("/api/v1/users/login", { email, password: pass }).then(
        (res) => {
          console.log(res.data);
          localStorage.setItem("authToken", res.data.token);
          Navigate("/home", { state: { name: res.data.user.username } });
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box>
      <form onSubmit={handleSubmit} className="login-container">
        <Typography variant="h4" className="textcontent">
          Login
        </Typography>
        <TextField
          className="textField"
          label="Email"
          value={email}
          onChange={handleEmailChange}
          variant="outlined"
          margin="normal"
        />
        <TextField
          className="textField"
          label="Password"
          value={pass}
          type="password"
          variant="outlined"
          onChange={handlePassChange}
          margin="normal"
        />
        <Button variant="contained" type="submit">
          Login
        </Button>
      </form>
    </Box>
  );
};

export default Login;
