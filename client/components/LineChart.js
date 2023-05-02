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

  if (runner.runs.length === 0) {
    return <h5 class="LineChart">Add runs to view your line chart</h5>;
  }

  const runData = () => {
    const recentRuns = [];

    for (let i = runner.runs.length - 1; i >= 0; i--) {
      const currentRun = runner.runs[i];
      recentRuns.push(currentRun.totalMiles);
    }

    return recentRuns;
  };

  if (!runner.firstName) return <h2>Loading</h2>;

  const data = {
    labels: [1, 2, 3, 4, 5, 6, 7],
    datasets: [
      {
        label: "Miles",
        data: runData(),
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
