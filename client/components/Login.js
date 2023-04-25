import React, { useState } from "react";
import { Button } from "@mui/material";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUserIdNumber } from "../reducers/runnersSlice";
const axios = require("axios");

export default function Login() {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUsernameError(false);
    setPasswordError(false);

    if (username === "") {
      setUsernameError(true);
    }
    if (password === "") {
      setPasswordError(true);
    }

    if (username && password) {
      await axios.post("./api/runners/login", {
        username: username,
        password: password,
      });
      const num = await dispatch(getUserIdNumber());

      if (await axios.get("/runners/verify")) {
        navigate(`./runners/${num.payload}`);
      }
    }
  };

  return (
    <Container>
      <Box className="content">
        <Typography variant="h1">Just Run</Typography>
        <Typography variant="h6">
          Take your training to the next level
        </Typography>
        <Typography variant="h4" marginTop={5}>
          Login
        </Typography>
        <form
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
          className="content"
        >
          <TextField
            onChange={(e) => setUsername(e.target.value)}
            sx={{ marginTop: 1, marginBottom: 1, display: "block" }}
            label="Username"
            variant="outlined"
            color="primary"
            required
            error={usernameError}
          />
          <TextField
            onChange={(e) => setPassword(e.target.value)}
            sx={{ marginTop: 1, marginBottom: 1, display: "block" }}
            label="Password"
            type="password"
            variant="outlined"
            color="primary"
            error={passwordError}
          />
          <Button type="submit" color="primary" variant="contained">
            Submit
          </Button>
        </form>
        <Typography>
          Don't have an account yet? <Link to="/Signup">Signup</Link>
        </Typography>
      </Box>
    </Container>
  );
}
