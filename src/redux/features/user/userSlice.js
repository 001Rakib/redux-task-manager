import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Rakib Hasan",
  email: "rakib334@gmail.com",
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
});
export default userSlice.reducer;
