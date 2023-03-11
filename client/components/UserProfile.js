import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getSingleRunner } from "../reducers/runnersSlice";
import LineChart from "./LineChart";
import AddNewRun from "./AddNewRun";

const UserProfile = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const id = params.id;
  const runner = useSelector((state) => state.runners.singleRunner);

  useEffect(() => {
    dispatch(getSingleRunner(id));
  }, [id]);

  if (!runner.firstName) return <h2>Loading</h2>;

  return (
    <div className="content">
      <h2>
        {runner.firstName} {runner.lastName}
      </h2>
      <img src={runner.imageUrl}></img>
      <p>Username: {runner.username}</p>
      <div className="chart">
        <LineChart />
      </div>
      <div>
        <AddNewRun id={runner.id} />
      </div>
    </div>
  );
};

export default UserProfile;
