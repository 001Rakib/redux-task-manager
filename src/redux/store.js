import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./features/tasks/taskSlice";
import userSlice from "./features/user/userSlice";

const store = configureStore({
  reducer: {
    tasksSlice: taskSlice,
    userSlice: userSlice,
  },
});
export default store;
