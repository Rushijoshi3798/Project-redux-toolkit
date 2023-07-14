import { createSlice } from "@reduxjs/toolkit";
import { removeAllUsers } from "../extraReducer/action";

const userSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
      //console.log(action.payload);
    },
    removeSingleUser(state, action) {
      //state.splice(action.payload, 1)
      // 1. Ye hai Aam Zindgi (when you get the name of user as action.payload)
      // const IndexofUser = state.indexOf(action.payload);
      // state.splice(IndexofUser, 1);

      // 2. ye hai Mentos wali zindgi (when you get the index of user as action.payload)
      // Optimized-easy Way
      state.splice(action.payload, 1);
    },
    removeAllUsers(state, action) {
      // 1. Works, But Not deleting existing data instead assigning new Array to initalState, memory leakage could happen
      // return state = [];

      // 2. Good Way to make all data clear / deleted !!
      return [];

      // after addming this method to extraReducer, It's okay if it's present but even if we'll delete it then there will be no Impact on the store, Thug life !!
    },
  },
  extraReducers: (builder) => {
    builder.addCase(removeAllUsers, (state, action) => {
      return [];
    });
  }, 
});

//console.log(userSlice.actions);

export default userSlice.reducer;
export const { addUser, removeSingleUser } = userSlice.actions;
