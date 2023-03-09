import React, { useState } from "react";
import { Button } from "@mui/material";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { Box } from "@mui/material";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsernameError(false);
    setPasswordError(false);
    console.log("username:", username, "password:", password);

    if (username === "") {
      setUsernameError(true);
    }
    if (password === "") {
      setPasswordError(true);
    }

    if (username && password) {
      console.log(username, password);
    }
  };

  return (
    <Container>
      <Box className="content">
        <Typography variant="h3" color="primary">
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
            variant="outlined"
            color="primary"
            error={passwordError}
          />
          <Button type="submit" color="primary" variant="contained">
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
}
