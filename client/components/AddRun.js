// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addRun } from "../reducers/runnersSlice";

// const CreateRun = ({ props }) => {
//   const [week, setWeek] = useState("");
//   const [totalMiles, setTotalMiles] = useState("");
//   const [averageHR, setAverageHR] = useState("");
//   const [averagePace, setAveragePace] = useState("");

//   const dispatch = useDispatch();

//   const handleSubmit = (evt) => {
//     evt.preventDefault();
//     dispatch(addRun({ week, totalMiles, averageHR, averagePace, props }));
//     setWeek("");
//     setTotalMiles("");
//     setAverageHR("");
//     setAveragePace("");
//   };

//   return (
//     <form className="border" onSubmit={handleSubmit}>
//       <label>Week</label>
//       <input
//         name="week"
//         value={week}
//         onChange={(e) => setWeek(e.target.value)}
//       />
//       <label>Total Miles</label>
//       <input
//         name="totalMiles"
//         value={totalMiles}
//         onChange={(e) => setTotalMiles(e.target.value)}
//       />

//       <label>Heart Rate</label>
//       <input
//         name="averageHR"
//         value={averageHR}
//         onChange={(e) => setAverageHR(e.target.value)}
//       />

//       <label>Pace</label>
//       <input
//         name="pace"
//         value={averagePace}
//         onChange={(e) => setAveragePace(e.target.value)}
//       />

//       <button className="margin" type="submit">
//         Add Running Week
//       </button>
//     </form>
//   );
// };

// export default CreateRun;
