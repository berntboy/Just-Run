import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { InputLabel } from "@mui/material";
import Select from "@mui/material/Select";
import { MenuItem } from "@mui/material";
import { FormControl } from "@mui/material";
import { addRun } from "../reducers/runnersSlice";

export default function AddNewRun(id) {
  const dispatch = useDispatch();
  const UserId = id.id;

  const [distance, setDistance] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [effortLevel, setEffortLevel] = useState("Moderate");
  const [distanceError, setDistanceError] = useState(false);
  const [hoursError, setHoursError] = useState(false);
  const [minutesError, setMinutesError] = useState(false);
  const [secondsError, setSecondsError] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setDistanceError(false);
    setHoursError(false);
    setMinutesError(false);
    setSecondsError(false);

    if (parseInt(distance) < 0 || parseInt(distance) > 100) {
      setDistanceError(true);
    }
    if (parseInt(hours) < 0 || parseInt(hours) > 24) {
      setHoursError(true);
    }
    if (parseInt(minutes) < 0 || parseInt(minutes) > 59) {
      setMinutesError(true);
    }
    if (parseInt(seconds) < 0 || parseInt(seconds) > 59) {
      setSecondsError(true);
    }
    if (
      parseInt(distance) > 0 &&
      parseInt(distance) < 100 &&
      parseInt(hours) >= 0 &&
      parseInt(hours) < 24 &&
      parseInt(minutes) >= 0 &&
      parseInt(minutes) < 60 &&
      (parseInt(seconds) >= 0 || parseInt(seconds) > 59)
    ) {
      console.log(
        "About to dispatch:",
        distance,
        hours,
        minutes,
        seconds,
        effortLevel
      );
      dispatch(
        addRun({ distance, hours, minutes, seconds, effortLevel, UserId })
      );
    }
  };

  return (
    <Container>
      <Box className="content">
        <Typography variant="h5">Add a Run</Typography>
        <form
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
          className="content"
        >
          <InputLabel>hi</InputLabel>
          <TextField
            onChange={(e) => setDistance(e.target.value)}
            type="number"
            sx={{ marginTop: 1, marginBottom: 1, display: "block" }}
            label="Distance"
            variant="outlined"
            color="primary"
            required
            error={distanceError}
          />
          <TextField
            onChange={(e) => setHours(e.target.value)}
            sx={{ marginTop: 1, marginBottom: 1, display: "block" }}
            type="number"
            label="Hours"
            variant="outlined"
            color="primary"
            required
            error={hoursError}
          />
          <TextField
            onChange={(e) => setMinutes(e.target.value)}
            sx={{ marginTop: 1, marginBottom: 1, display: "block" }}
            label="Minutes"
            type="number"
            variant="outlined"
            color="primary"
            required
            error={minutesError}
          />
          <TextField
            onChange={(e) => setSeconds(e.target.value)}
            sx={{ marginTop: 1, marginBottom: 1, display: "block" }}
            label="Seconds"
            type="number"
            variant="outlined"
            color="primary"
            required
            error={secondsError}
          />
          <FormControl fullWidth>
            <InputLabel>hi</InputLabel>
            <Select
              onChange={(e) => setEffortLevel(e.target.value)}
              sx={{ marginTop: 1, marginBottom: 1, display: "block" }}
              // label="Percieved Effort"
              value={effortLevel}
              variant="outlined"
              color="primary"
            >
              <MenuItem value={"Light"}>Light</MenuItem>
              <MenuItem value={"Moderate"}>Moderate</MenuItem>
              <MenuItem value={"Vigorous"}>Vigorous</MenuItem>
              <MenuItem value={"Max"}>Max</MenuItem>
            </Select>
          </FormControl>
          <Button type="submit" color="primary" variant="contained">
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
}
