import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { addUser } from "../reducers/runnersSlice";
import { getUserIdNumber } from "../reducers/runnersSlice";
const axios = require("axios");

export default function Signup() {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [imageUrl, setImageUrl] = useState(
    "https://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Running/580/quote-1.jpg"
  );
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setUsernameError(false);
    setPasswordError(false);
    setFirstNameError(false);
    setLastNameError(false);

    if (username === "") {
      setUsernameError(true);
    }
    if (password === "") {
      setPasswordError(true);
    }
    if (firstName === "") {
      setFirstNameError(true);
    }
    if (lastName === "") {
      setLastNameError(true);
    }

    if (username && password && firstName && lastName) {
      await dispatch(
        addUser({ username, password, firstName, lastName, imageUrl })
      );

      await axios.post("./api/runners/login", {
        username: username,
        password: password,
      });

      const num = await dispatch(getUserIdNumber());

      if (await axios.get("/runners/verify")) {
        console.log(num);
        navigate(`/runners/${num.payload}`);
      }
    }
  };

  return (
    <Container>
      <Box className="content">
        <Typography variant="h3">Signup</Typography>
        <form
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
          className="content"
        >
          <TextField
            onChange={(e) => setFirstName(e.target.value)}
            sx={{ marginTop: 1, marginBottom: 1, display: "block" }}
            label="First Name"
            variant="outlined"
            color="primary"
            error={firstNameError}
          />
          <TextField
            onChange={(e) => setLastName(e.target.value)}
            sx={{ marginTop: 1, marginBottom: 1, display: "block" }}
            label="Last Name"
            variant="outlined"
            color="primary"
            error={lastNameError}
          />
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
            variant="outlined"
            color="primary"
            type="password"
            error={passwordError}
          />
          <TextField
            onChange={(e) => setImageUrl(e.target.value)}
            sx={{ marginTop: 1, marginBottom: 1, display: "block" }}
            label="Image Url"
            variant="outlined"
            color="primary"
          />
          <Button type="submit" color="primary" variant="contained">
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
}
