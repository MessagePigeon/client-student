import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

type Teacher = { id: string; name: string };

interface TeachersState {
  teachers: Teacher[];
}

const initialState: TeachersState = { teachers: [] };

export const teachersSlice = createSlice({
  name: 'teachers',
  initialState,
  reducers: {
    set(state, action: PayloadAction<Teacher[]>) {
      state.teachers = action.payload;
    },
  },
});

export const teachersActions = teachersSlice.actions;

export const teachersSelector = (state: RootState) => state.teachers.teachers;

export default teachersSlice.reducer;
