// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { getSingleRunner } from "../reducers/runnersSlice";
// import LineChart from "./LineChart";
// import AddNewRun from "./AddNewRun";
// import UserCard from "./UserCard";
// import { Typography, Card } from "@mui/material";
// import RunHistoryTable from "./RunHistoryTable";

// const UserProfile = () => {
//   const dispatch = useDispatch();
//   const params = useParams();

//   const id = params.id;
//   const runner = useSelector((state) => state.runners.singleRunner);

//   useEffect(() => {
//     dispatch(getSingleRunner(id));
//   }, [id]);

//   if (!runner.firstName) return <h2>Loading</h2>;

//   const lastSevenRuns = () => {
//     let totalMiles = 0;
//     for (let i = 0; i < runner.runs.length - 7; i++) {
//       const currentRun = parseInt(runner.runs[i].totalMiles);
//       if (currentRun) {
//         totalMiles += currentRun;
//       }
//     }

//     return totalMiles;
//   };

//   return (
//     <div className="content">
//       <UserCard props={runner} />
//       <Typography>Last 7 Runs: {lastSevenRuns()} miles</Typography>
//       <Card>
//         <div className="chart">
//           <LineChart />
//         </div>
//       </Card>
//       <RunHistoryTable props={runner} />
//       <div>
//         <AddNewRun id={runner.id} />
//       </div>
//     </div>
//   );
// };

// export default UserProfile;
