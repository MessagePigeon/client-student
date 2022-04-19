import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface ConnectCodeState {
  teacherUrl: string;
  connectCode: string;
}

const initialState: ConnectCodeState = { teacherUrl: '', connectCode: '' };

export const connectCodeSlice = createSlice({
  name: 'connect-code',
  initialState,
  reducers: {
    setTeacherUrl(state, action: PayloadAction<string>) {
      state.teacherUrl = action.payload;
    },
    setConnectCode(state, action: PayloadAction<string>) {
      state.connectCode = action.payload;
    },
  },
});

export const connectCodeActions = connectCodeSlice.actions;

export const connectCodeSelector = (state: RootState) =>
  state.connectCode.connectCode;
export const teacherUrlSelector = (state: RootState) =>
  state.connectCode.teacherUrl;

export default connectCodeSlice.reducer;
