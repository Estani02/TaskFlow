// src/redux/features/usersSlice.ts
import type { PayloadAction } from '@reduxjs/toolkit'

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

interface User {
  id: string
  name: string
  avatar: string
  createdAt: string
}

export interface UsersState {
  users: User[]
  loading: boolean
  error: string | null
}

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
}

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get('https://6172cfe5110a740017222e2b.mockapi.io/elements') // Reemplaza con tu URL real

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return response.data
})

const listadoSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    clearUsersState: (state) => {
      state.users = []
      state.loading = false
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.users = action.payload
        state.loading = false
        state.error = null
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch users'
      })
  },
})

export const { clearUsersState } = listadoSlice.actions

export default listadoSlice.reducer
