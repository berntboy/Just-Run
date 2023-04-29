import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { Box } from "@mui/material";
import { InputLabel } from "@mui/material";
import Select from "@mui/material/Select";
import { MenuItem } from "@mui/material";
import { FormControl } from "@mui/material";
import { addRun } from "../reducers/runnersSlice";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker, TimeField } from "@mui/x-date-pickers";
import dayjs from "dayjs";

export default function AddNewRun(props) {
  const dispatch = useDispatch();
  const id = props.props;

  const [runDate, setRunDate] = useState(dayjs("2023-04-24"));
  const [distance, setDistance] = useState("");
  const [runTime, setRunTime] = useState("");
  const [effortLevel, setEffortLevel] = useState("Moderate");
  const [runDateError, setRunDateError] = useState(false);
  const [distanceError, setDistanceError] = useState(false);
  const [runTimeError, setRunTimeError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setRunDateError(false);
    setDistanceError(false);
    setRunTimeError(false);

    if (parseInt(distance) < 0 || parseInt(distance) > 100) {
      setDistanceError(true);
    }
    if (runTime === "") {
      setHoursError(true);
    }
    let hours = runTime["$H"];
    let minutes = runTime["$m"];
    let seconds = runTime["$s"];
    let time = `${hours}:${minutes}:${seconds}`;

    const adjustTime = () => {
      console.log("Length", minutes.toString().length);
      if (minutes.toString().length === 1) {
        minutes = `0${minutes}`;
      }
      if (seconds.toString().length === 1) {
        seconds = `0${seconds}`;
      }
      time = `${hours}:${minutes}:${seconds}`;
      if (runTime["$H"] === 0) {
        time = `${minutes}:${seconds}`;
      }
    };
    const date = runDate["$d"].toString().slice(0, 16);
    adjustTime();
    if (parseInt(distance) > 0 && parseInt(distance) < 100) {
      dispatch(addRun({ date, distance, time, effortLevel, id }));
      setDistance("");
      setRunTime("");
      setRunDate(dayjs("2023-04-24"));
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
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              value={runDate}
              onChange={(newValue) => setRunDate(newValue)}
              sx={{ marginTop: 1, marginBottom: 1, display: "block" }}
              label="Date"
              variant="outlined"
              color="primary"
              required
              error={runDateError}
            />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimeField
              sx={{ marginTop: 1, marginBottom: 1, display: "block" }}
              label="time"
              value={runTime}
              onChange={(newValue) => setRunTime(newValue)}
              variant="outlined"
              color="primary"
              format="HH:mm:ss"
              error={runTimeError}
              fullWidth
              required
            />
          </LocalizationProvider>
          <TextField
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
            type="number"
            sx={{ marginTop: 1, marginBottom: 1, display: "block" }}
            label="Distance"
            variant="outlined"
            color="primary"
            required
            fullWidth
            error={distanceError}
          />
          <FormControl fullWidth>
            <InputLabel>Effort level</InputLabel>
            <Select
              onChange={(e) => setEffortLevel(e.target.value)}
              sx={{ marginTop: 1, marginBottom: 1, display: "block" }}
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
