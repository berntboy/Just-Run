import React from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

export default function RunHistoryCard({ props }) {
  const { id, totalMiles, perceivedEffort, hours, minutes, seconds } = props;

  return (
    <div>
      <Card className="content">
        <CardHeader title={`All Time Run #${id}`} />
        <CardContent>
          <Typography>Miles Ran: {totalMiles}</Typography>
          <Typography>
            Total Time: {`${hours}:${minutes}:${seconds}`}
          </Typography>
          <Typography>Perceived Effort: {perceivedEffort}</Typography>
        </CardContent>
      </Card>
    </div>
  );
}
