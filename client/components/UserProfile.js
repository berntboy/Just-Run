import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleRunner } from "../reducers/runnersSlice";
import LineChart from "./LineChart";
import AddNewRun from "./AddNewRun";
import UserCard from "./UserCard";
import { Typography, Card } from "@mui/material";
import RunHistoryTable from "./RunHistoryTable";
import { Grid, Paper, Container } from "@mui/material";

const UserProfile = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const id = params.id;
  const runner = useSelector((state) => state.runners.singleRunner);

  useEffect(() => {
    dispatch(getSingleRunner(id));
  }, [id]);

  if (!runner.firstName) return <h2>Loading</h2>;

  const lastSevenRuns = () => {
    let totalMiles = 0;
    for (let i = 0; i < runner.runs.length - 7; i++) {
      const currentRun = parseInt(runner.runs[i].totalMiles);
      if (currentRun) {
        totalMiles += currentRun;
      }
    }

    return totalMiles;
  };

  return (
    <Container>
      <Grid container spacing={6} alignItems="center">
        <Grid item xs={12} sm={6} md={6}>
          <UserCard props={runner} />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Paper>
            <AddNewRun props={runner.id} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Paper>
            <RunHistoryTable props={runner} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Paper>
            <Typography align="center">
              Last 7 Runs: {lastSevenRuns()} miles
            </Typography>
            <Card>
              <div className="chart">
                <LineChart />
              </div>
            </Card>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserProfile;
