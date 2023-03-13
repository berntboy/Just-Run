import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

export default function MainLineChart({ props }) {
  const label = props.map((run) => {
    return run.week;
  });

  const runData = props.map((run) => {
    return run.totalMiles;
  });

  const data = {
    labels: label,
    datasets: [
      {
        label: "Weekly Miles",
        data: runData,
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  return (
    <div className="chart">
      <Line data={data} />
    </div>
  );
}
