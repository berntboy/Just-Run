import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getSingleRunner } from "../reducers/runnersSlice";
import LineChart from "./LineChart";
import AddNewRun from "./AddNewRun";
import UserCard from "./UserCard";

const UserProfile = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const id = params.id;
  const runner = useSelector((state) => state.runners.singleRunner);

  useEffect(() => {
    dispatch(getSingleRunner(id));
  }, [id]);
  console.log(runner);
  if (!runner.firstName) return <h2>Loading</h2>;

  return (
    <div className="content">
      <UserCard props={runner} />
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
