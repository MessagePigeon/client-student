import { configureStore } from '@reduxjs/toolkit';
import connectCode from './slices/connect-code.slice';
import teachers from './slices/teachers.slice';
import messages from './slices/messages.slice';
import openingMessages from './slices/opening-messages.slice';

export const store = configureStore({
  // `openingMessages` need to store instances, so serializable check should be false
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  reducer: { connectCode, teachers, messages, openingMessages },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
