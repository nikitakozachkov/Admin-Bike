import { createSlice } from "@reduxjs/toolkit";
import { getBikes, addBike, deleteBike, updateBikeStatus } from "./actions";

const bikesSlice = createSlice({
  name: "bikes",
  initialState: { items: [] },
  extraReducers: {
    [getBikes.fulfilled](state, action) {
      state.items = action.payload;
    },
    [addBike.pending](state) {
      state.error = null;
    },
    [addBike.fulfilled](state, action) {
      state.items.push(action.payload)
    },
    [deleteBike.fulfilled](state, action) {
      state.items = state.items.filter(({ _id }) => _id !== action.payload._id);
    },
    [updateBikeStatus.fulfilled](state, action) {
      state.items.splice(
        state.items.findIndex(({ _id }) => _id === action.payload._id),
        1,
        action.payload
      );
    },
  },
});

export const bikesReducer = bikesSlice.reducer;
