import React from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

export default function UserCard({ props }) {
  const { firstName, lastName, imageUrl, runs } = props;
  const totalMiles = () => {
    let total = 0;
    for (let i = 0; i < runs.length; i++) {
      const currentNum = parseInt(runs[i].totalMiles);
      total += currentNum;
    }

    return total;
  };

  return (
    <div>
      <Card className="content">
        <CardHeader title={`${firstName} ${lastName}`} />
        <CardMedia component="img" image={imageUrl} />
        <CardContent>
          <Typography>Total Miles: {totalMiles()}</Typography>
        </CardContent>
      </Card>
    </div>
  );
}
