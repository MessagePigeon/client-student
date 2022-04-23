import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Child } from '@tauri-apps/api/shell';
import { RootState } from '../store';

type Message = { id: number; proc: Child; closeByTeacher: boolean };

interface OpeningMessagesState {
  openingMessages: Message[];
}

const initialState: OpeningMessagesState = { openingMessages: [] };

export const openingMessagesSlice = createSlice({
  name: 'opening-messages',
  initialState,
  reducers: {
    add(state, action: PayloadAction<Message>) {
      state.openingMessages.push(action.payload);
    },
    remove(state, action: PayloadAction<{ id: number }>) {
      const index = state.openingMessages.findIndex(
        ({ id }) => id === action.payload.id,
      );
      state.openingMessages.splice(index, 1);
    },
    setCloseByTeacher(state, action: PayloadAction<{ id: number }>) {
      const index = state.openingMessages.findIndex(
        ({ id }) => id === action.payload.id,
      );
      state.openingMessages[index].closeByTeacher = true;
    },
  },
});

export const openingMessagesActions = openingMessagesSlice.actions;

export const openingMessagesSelector = (state: RootState) =>
  state.openingMessages.openingMessages;
export const openingMessageIdsSelector = (state: RootState) =>
  state.openingMessages.openingMessages.map(({ id }) => id);
export const closeByTeacherMessageIdsSelector = (state: RootState) =>
  state.openingMessages.openingMessages
    .filter(({ closeByTeacher }) => closeByTeacher)
    .map(({ id }) => id);

export default openingMessagesSlice.reducer;
