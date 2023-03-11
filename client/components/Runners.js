// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { getAllRunners } from "../reducers/runnersSlice";
// import { Link } from "react-router-dom";
// import MainLineChart from "./MainLineChart";

// const AllRunners = () => {
//   const dispatch = useDispatch();

//   const runners = useSelector((state) => state.runners.allRunners);

//   useEffect(() => {
//     dispatch(getAllRunners());
//   }, []);

//   if (!runners[0]) return <h2>Loading</h2>;

//   return (
//     <div className="content">
//       <ul>
//         {runners.map((runner) => {
//           return (
//             <li className="content" key={runner.id}>
//               <h2>
//                 <Link to={`/runners/${runner.id}`}>Runner: {runner.name}</Link>
//               </h2>
//               <img src={runner.imageUrl}></img>
//               <MainLineChart props={runner.runs} />
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };

// export default AllRunners;
