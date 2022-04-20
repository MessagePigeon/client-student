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
    add(state, action: PayloadAction<Teacher>) {
      state.teachers.unshift(action.payload);
    },
    remove(state, action: PayloadAction<{ id: string }>) {
      const index = state.teachers.findIndex(
        ({ id }) => id === action.payload.id,
      );
      state.teachers.splice(index, 1);
    },
    changeName(state, action: PayloadAction<{ id: string; newName: string }>) {
      const index = state.teachers.findIndex(
        ({ id }) => id === action.payload.id,
      );
      state.teachers[index].name = action.payload.newName;
    },
  },
});

export const teachersActions = teachersSlice.actions;

export const teachersSelector = (state: RootState) => state.teachers.teachers;

export default teachersSlice.reducer;
