import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@mui/material";
import { Grid, Container } from "@mui/material";
import RunHistoryCard from "./RunHistoryCard";
import { getId } from "../reducers/runnersSlice";

export default function RunHistory() {
  const dispatch = useDispatch();
  const runner = useSelector((state) => state.runners.userRuns);

  useEffect(() => {
    dispatch(getId());
  }, []);

  if (runner.length === 0) return <h2>Add runs to view your history</h2>;

  const runsInReverseOrder = () => {
    let mostRecent = [];
    for (let i = runner.length - 1; i >= 0; i--) {
      const currentRun = runner[i];
      if (currentRun) {
        mostRecent.push(currentRun);
      }
    }

    return mostRecent;
  };

  const runs = runsInReverseOrder();

  return (
    <Container>
      <Typography variant="h2" align="center">
        Run History
      </Typography>
      <Grid container spacing={6} alignItems="center">
        {runs.map((run) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={run.id}>
              <RunHistoryCard props={run} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
