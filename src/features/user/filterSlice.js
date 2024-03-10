import { createSlice } from '@reduxjs/toolkit';

let initialState = {
  isLoading: false,
  isError: false,
  name: "",
  location: {},
  interest: [],
  distance: null,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    addLocation: (state, action) => {
      // Assuming action.payload contains the location data
      console.log(action.payload);
      const { name, location, interest, distance } = action.payload;
      state.name = name;
      state.location = location;
      state.interest = interest;
      state.distance = distance;
    },
  },
});

export default filterSlice.reducer;
export const { addLocation } = filterSlice.actions;
