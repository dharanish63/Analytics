import React, { useState } from "react";
import { Typography, TextField, Box, Button, Link, Paper } from "@mui/material";
import { axiosPost } from "../axiosServices";
import { useNavigate } from "react-router-dom";
import "../css/signup.css";
const Signup = () => {
  const [username, setuserName] = useState("");
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
  const handleNameChange = (e) => {
    setuserName(e.target.value);
    console.log(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("email", email);
    console.log("password", pass);
    console.log("name", username);
    try {
      await axiosPost("/user/signup", { username, password: pass, email }).then(
        async (res) => {
          // const chatid = await axiosPost("api/chatid");
          // console.log(chatid);
          console.log(res.data);
          localStorage.setItem("authToken", res.data.token);
          Navigate("/home", { state: { name: username } });
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Sign up
          </Typography>
          <TextField
            required
            // id="outlined-required"
            value={username}
            label="Name"
            onChange={handleNameChange}
            sx={{ mb: 2 }}
          />
          <br />
          <TextField
            required
            // id="outlined-required"
            value={email}
            label="Email"
            onChange={handleEmailChange}
            sx={{ mb: 2 }}
          />
          <br />
          <TextField
            required
            // id="outlined-required"
            label="Password"
            value={pass}
            onChange={handlePassChange}
            sx={{ mb: 2 }}
            type="password"
          />
          <br />
          <Typography>
            Do you have an account ?<Link href="/">Login</Link>
          </Typography>
          <Button variant="contained" type="submit">
            Sign up
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Signup;
