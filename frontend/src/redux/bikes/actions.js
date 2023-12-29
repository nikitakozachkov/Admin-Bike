import { createAsyncThunk } from "@reduxjs/toolkit";
import * as bikesAPI from "services/bikes-api";

export const getBikes = createAsyncThunk(
  "bikes/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const bikes = await bikesAPI.getBikes();
      return bikes;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addBike = createAsyncThunk(
  "bikes/add",
  async (bike, { rejectWithValue }) => {
    try {
      const bikes = await bikesAPI.addBike(bike);
      return bikes;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteBike = createAsyncThunk(
  "bikes/deleteById",
  async (id, { rejectWithValue }) => {
    try {
      const bikes = await bikesAPI.deleteBike(id);
      return bikes;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateBikeStatus = createAsyncThunk(
  "bikes/updateBikeStatus",
  async (status, { rejectWithValue }) => {
    try {
      const bikes = await bikesAPI.updateBikeStatus(status);
      return bikes;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
