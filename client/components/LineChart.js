import React, { useEffect } from "react";
import Chart from "chart.js/auto";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleRunner } from "../reducers/runnersSlice";
import { Line } from "react-chartjs-2";

export default function LineChart() {
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
    return run.totalMiles;
  });

  if (!runner.name) return <h2>Loading</h2>;

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
    <div className="App">
      <Line data={data} />
    </div>
  );
}
