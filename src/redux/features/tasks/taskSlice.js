import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
      id: 1,
      status: "pending",
      title: "hhjljbhk",
      description:
        "Air Jordan 1 Mid SE Craft OG remakes the classic sneaker with new colors and textures. Premium materials and accents give fresh expression to an all-time favorite.",
      date: "2024-03-18",
      assignedTo: "Rakib Hasan",
      priority: "high",
    },
  ],
  userSpecificTasks: [],
};

const tasksSlice = createSlice({
  name: "tasksSlice",
  initialState,
  reducers: {
    addTasks: (state, { payload }) => {
      if (state.tasks.length === 0) {
        state.tasks.push({ id: 1, status: "pending", ...payload });
      } else {
        const lastElement = state.tasks.at(-1);
        state.tasks.push({
          id: lastElement.id + 1,
          status: "pending",
          ...payload,
        });
      }
    },
    removeTask: (state, { payload }) => {
      state.tasks = state.tasks.filter((item) => item.id !== payload);
    },
    updateStatus: (state, { payload }) => {
      const target = state.tasks.find((item) => item.id === payload.id);
      target.status = payload.status;
    },
    userTasks: (state, { payload }) => {
      state.userSpecificTasks = state.tasks.filter(
        (item) => item.assignedTo === payload
      );
    },
  },
});
export const { addTasks, updateStatus, removeTask, userTasks } =
  tasksSlice.actions;
export default tasksSlice.reducer;
