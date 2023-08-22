import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/auth/authSlice'
import petReducer from './slices/pets/petSlice'
import { apiSlice } from './slices/apiSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    pet: petReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
})

export default store
