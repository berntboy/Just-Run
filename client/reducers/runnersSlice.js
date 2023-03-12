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
  async ({ distance, hours, minutes, seconds, effortLevel, UserId }) => {
    const { data } = await axios.post("/api/runners", {
      totalMiles: parseInt(distance),
      hours: hours,
      minutes: minutes,
      seconds: seconds,
      perceivedEffort: effortLevel,
      UserId: UserId,
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

const runnersSlice = createSlice({
  name: "runners",
  initialState: {
    allRunners: [],
    singleRunner: {},
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
  },
});

export default runnersSlice.reducer;
