import { createSlice } from '@reduxjs/toolkit';
const dropBackDropReducer = createSlice({
  name: 'dropBackDropReducer',
  initialState: {
    isDropBackDropTrue: false,
  },
  reducers: {
    setBackDrop: (state, action) => {
      state.isDropBackDropTrue = action.payload;
    },
  },
});

export const { setBackDrop } = dropBackDropReducer.actions;
export default dropBackDropReducer.reducer;
