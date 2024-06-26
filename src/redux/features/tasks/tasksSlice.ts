import type { PayloadAction } from '@reduxjs/toolkit'

import { createSlice } from '@reduxjs/toolkit'

interface Task {
  id: number
  title: string
  description: string
  completed: boolean
}

interface TasksState {
  tasks: Task[]
}

const initialState: TasksState = {
  tasks: [],
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.unshift(action.payload)
    },
    updateTask: (state, action: PayloadAction<Task>) => {
      const existingTask = state.tasks.find((task) => task.id === action.payload.id)

      if (existingTask) {
        existingTask.title = action.payload.title
        existingTask.description = action.payload.description
        existingTask.completed = action.payload.completed
      }
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload)
    },
    toggleTaskCompletion(state, action: PayloadAction<number>) {
      const task = state.tasks.find((taskFinde) => taskFinde.id === action.payload)

      if (task) {
        task.completed = !task.completed
      }
    },
  },
})

export const { addTask, updateTask, deleteTask, toggleTaskCompletion } = tasksSlice.actions

export default tasksSlice.reducer
