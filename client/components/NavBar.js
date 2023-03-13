import React from "react";
import { AppBar } from "@mui/material";
import { Box } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import { useNavigate } from "react-router-dom";
const axios = require("axios");

export default function NavBar() {
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    await axios.put("/api/runners/logout");
    navigate("/");
  };

  const otherClick = async (e) => {
    e.preventDefault();
    navigate("/runhistory");
  };

  const anotherClick = async (e) => {
    e.preventDefault();
    navigate("/runners/1");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <DirectionsRunIcon />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, marginLeft: 1 }}
          >
            Just Run
          </Typography>
          <Button color="inherit" onClick={anotherClick}>
            Profile
          </Button>
          <Button color="inherit" onClick={otherClick}>
            Run History
          </Button>
          <Button color="inherit" onClick={handleClick}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
