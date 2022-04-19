import { configureStore } from '@reduxjs/toolkit';
import connectCode from './slices/connect-code.slice';
import teachers from './slices/teachers.slice';

export const store = configureStore({ reducer: { connectCode, teachers } });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
