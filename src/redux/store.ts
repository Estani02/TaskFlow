// src/redux/store.ts
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import listadoReducer from '@/redux/features/list/listadoSlice'
import tasksReducer from '@/redux/features/tasks/tasksSlice'

// Configuración para el persistir solo el reducer de tasks
const tasksPersistConfig = {
  key: 'tasks',
  storage,
}

const rootReducer = combineReducers({
  tasks: persistReducer(tasksPersistConfig, tasksReducer),
  listado: listadoReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
