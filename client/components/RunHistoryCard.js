import React from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

export default function RunHistoryCard({ props }) {
  const { id, totalMiles, perceivedEffort, time } = props;

  return (
    <div>
      <Card className="content">
        <CardHeader title={`All Time Run #${id}`} />
        <CardContent>
          <Typography>Miles Ran: {totalMiles}</Typography>
          <Typography>Total Time: {`${time}`}</Typography>
          <Typography>Perceived Effort: {perceivedEffort}</Typography>
        </CardContent>
      </Card>
    </div>
  );
}
