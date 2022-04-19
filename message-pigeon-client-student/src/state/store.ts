import { configureStore } from '@reduxjs/toolkit';
import connectCode from './slices/connect-code.slice';

export const store = configureStore({ reducer: { connectCode } });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
