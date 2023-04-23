import React from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

export default function RunHistoryCard({ props }) {
  const { id, date, totalMiles, perceivedEffort, time } = props;

  return (
    <div>
      <Card className="content">
        <CardHeader title={date} />
        <CardContent>
          <Typography>Miles Ran: {totalMiles}</Typography>
          <Typography>Total Time: {`${time}`}</Typography>
          <Typography>Perceived Effort: {perceivedEffort}</Typography>
        </CardContent>
      </Card>
    </div>
  );
}
