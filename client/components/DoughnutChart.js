import React, { useEffect } from "react";
import Chart from "chart.js/auto";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleRunner } from "../reducers/runnersSlice";
import { Doughnut } from "react-chartjs-2";

export default function DoughnutChart() {
  const dispatch = useDispatch();
  const params = useParams();

  const id = params.id;
  const runner = useSelector((state) => state.runners.singleRunner);

  useEffect(() => {
    dispatch(getSingleRunner(id));
  }, [id]);

  const label = ["High 160+ bpm", "Moderate 130-160 bpm", "Low < 130 bpm"];

  const runData = runner.runs.map((run) => {
    return run.averageHR;
  });

  const sortedData = () => {
    let lowHR = 0;
    let mediumHR = 0;
    let highHR = 0;

    for (let i = 0; i < runData.length; i++) {
      if (runData[i] < 130) lowHR++;
      else if (runData[i] < 160) mediumHR++;
      else {
        highHR++;
      }
    }

    return [highHR, mediumHR, lowHR];
  };

  if (!runner.name) return <h2>Loading</h2>;

  const data = {
    labels: label,
    datasets: [
      {
        label: "Heart Rate Zones",
        data: sortedData(),
        backgroundColor: "rgba(75,192,192,0.2)",
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="chart">
      <Doughnut data={data} />
    </div>
  );
}
