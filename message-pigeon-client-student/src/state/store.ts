import { configureStore } from '@reduxjs/toolkit';
import connectCode from './slices/connect-code.slice';
import teachers from './slices/teachers.slice';
import messages from './slices/messages.slice';

export const store = configureStore({
  reducer: { connectCode, teachers, messages },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
