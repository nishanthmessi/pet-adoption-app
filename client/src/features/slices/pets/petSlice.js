import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  petProfileId: localStorage.getItem('petProfileId')
    ? localStorage.getItem('petProfileId')
    : null,
}

const petSlice = createSlice({
  name: 'pet',
  initialState,
  reducers: {
    setPetProfileId: (state, action) => {
      state.petProfileId = action.payload
      localStorage.setItem('petProfileId', action.payload)
    },
  },
})

export const { setPetProfileId } = petSlice.actions
export default petSlice.reducer
