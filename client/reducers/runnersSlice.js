import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllRunners = createAsyncThunk("runners/getAll", async () => {
  const { data } = await axios.get("/api/runners");
  return data;
});

export const getSingleRunner = createAsyncThunk(
  "runners/getOne",
  async (id) => {
    const { data } = await axios.get(`/api/runners/${id}`);
    return data;
  }
);

export const addRun = createAsyncThunk(
  "run/addOne",
  async ({ date, distance, time, effortLevel, id }) => {
    const { data } = await axios.post("/api/runners", {
      date: date,
      totalMiles: parseInt(distance),
      time: time,
      perceivedEffort: effortLevel,
      userId: id,
    });
    return data;
  }
);

export const addUser = createAsyncThunk(
  "user/addOne",
  async ({ username, password, firstName, lastName, imageUrl }) => {
    const { data } = await axios.post("/api/runners/addUser", {
      username: username,
      password: password,
      firstName: firstName,
      lastName: lastName,
      imageUrl: imageUrl,
    });

    return data;
  }
);

export const getId = createAsyncThunk("user/getid", async () => {
  const { data } = await axios.get("/api/user/userId");

  return data;
});

export const getUserIdNumber = createAsyncThunk("user/getuserid", async () => {
  const { data } = await axios.get("/api/user/id");

  return data;
});

const runnersSlice = createSlice({
  name: "runners",
  initialState: {
    allRunners: [],
    singleRunner: {},
    userRuns: [],
    userId: [],
  },
  extraReducers: (builder) => {
    builder.addCase(getAllRunners.fulfilled, (state, { payload }) => {
      state.allRunners = payload;
    });

    builder.addCase(getSingleRunner.fulfilled, (state, { payload }) => {
      state.singleRunner = payload;
    });

    builder.addCase(addRun.fulfilled, (state, { payload }) => {
      state.singleRunner.runs.push(payload);
    });

    builder.addCase(getId.fulfilled, (state, { payload }) => {
      state.userRuns = payload;
    });

    builder.addCase(getUserIdNumber.fulfilled, (state, { payload }) => {
      state.userId = payload;
    });
  },
});

export default runnersSlice.reducer;
