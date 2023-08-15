import { configureStore } from '@reduxjs/toolkit'
import { petsApi } from './slices/petApiSlice'

export const store = configureStore({
  reducer: {
    [petsApi.reducerPath]: petsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(petsApi.middleware),
  devTools: true,
})

export default store
