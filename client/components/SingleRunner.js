// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { getSingleRunner } from "../reducers/runnersSlice";
// import LineChart from "./LineChart";
// import DoughnutChart from "./DoughnutChart";
// import BarChart from "./BarChart";
// import CreateRun from "./AddRun";
// import AddNewRun from "./AddNewRun";

// const SingleRunner = () => {
//   const [chart, setChart] = useState("WeeklyMileage");
//   let chartShown = (
//     <div className="chart">
//       <LineChart />
//     </div>
//   );
//   if (chart === "WeeklyMileage") {
//     chartShown = (
//       <div className="chart">
//         <LineChart />
//       </div>
//     );
//   } else if (chart === "HeartRateZones") {
//     chartShown = (
//       <div className="chart">
//         <DoughnutChart />
//       </div>
//     );
//   } else {
//     chartShown = (
//       <div className="chart">
//         <BarChart />
//       </div>
//     );
//   }

//   const dispatch = useDispatch();
//   const params = useParams();

//   const id = params.id;
//   const runner = useSelector((state) => state.runners.singleRunner);

//   useEffect(() => {
//     dispatch(getSingleRunner(id));
//   }, [id]);

//   if (!runner.name) return <h2>Loading</h2>;

//   return (
//     <div className="content">
//       <h2>{runner.name}</h2>
//       <img src={runner.imageUrl}></img>
//       <p>Weekly Mileage Goal: {runner.weeklyGoal}</p>

//       <label>Select a Chart</label>
//       <select name="chart" onChange={(e) => setChart(e.target.value)}>
//         <option value="WeeklyMileage">Weekly Mileage</option>
//         <option value="HeartRateZones">Heart Rate Zones</option>
//         <option value="Pacing">Pacing</option>
//       </select>
//       {chartShown}
//       <div>
//         <AddNewRun props={runner.id} />
//       </div>
//     </div>
//   );
// };

// export default SingleRunner;
