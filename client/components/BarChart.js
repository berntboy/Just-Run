import React, { useEffect } from "react";
import Chart from "chart.js/auto";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleRunner } from "../reducers/runnersSlice";
import { Bar } from "react-chartjs-2";

export default function BarChart() {
  const dispatch = useDispatch();
  const params = useParams();

  const id = params.id;
  const runner = useSelector((state) => state.runners.singleRunner);

  useEffect(() => {
    dispatch(getSingleRunner(id));
  }, [id]);

  const label = runner.runs.map((run) => {
    return run.week;
  });

  const runData = runner.runs.map((run) => {
    return run.averagePace;
  });

  if (!runner.name) return <h2>Loading</h2>;

  const data = {
    labels: label,
    datasets: [
      {
        label: "Average Mile Pace",
        data: runData,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="chart">
      <Bar data={data} />
    </div>
  );
}
