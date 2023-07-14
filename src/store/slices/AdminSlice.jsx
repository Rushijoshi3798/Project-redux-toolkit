import { createSlice } from "@reduxjs/toolkit";
import { removeAllUsers } from "../extraReducer/action";

const adminSlice = createSlice({
  name: "admin",
  initialState: [],
  reducers: {
    addAdmin(state, action) {
      state.push(action.payload);
    },
    removeSingleAdmin(state, action) {
      state.splice(action.payload, 1);
    },
  },
  extraReducers(builder) {
    builder.addCase(removeAllUsers, (state, action) => {
      return [];
    });
  },
});

export default adminSlice.reducer;
export const { addAdmin, removeSingleAdmin } = adminSlice.actions;
