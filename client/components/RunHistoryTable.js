import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
} from "@mui/material";

export default function RunHistoryTable({ props }) {
  const { runs } = props;
  const lastSevenRuns = () => {
    let run = [];
    for (let i = runs.length - 1; i > runs.length - 9; i--) {
      const currentRun = runs[i];
      if (currentRun) {
        run.push(currentRun);
      }
    }

    return run;
  };
  const recentRuns = lastSevenRuns();

  return (
    <Box>
      <TableContainer
        className="content"
        component={Paper}
        sx={{ maxWidth: 600 }}
      >
        <Table sx={{ maxWidth: 600 }}>
          <TableHead>
            <TableRow>
              <TableCell>Run Date</TableCell>
              <TableCell align="right">Distance (Miles)</TableCell>
              <TableCell align="right">Time</TableCell>
              <TableCell align="right">Perceived Effort</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {recentRuns.map((run) => (
              <TableRow
                key={run.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {run.date}
                </TableCell>
                <TableCell align="right">{run.totalMiles}</TableCell>
                <TableCell align="right">{`${run.time}`}</TableCell>
                <TableCell align="right">{run.perceivedEffort}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
