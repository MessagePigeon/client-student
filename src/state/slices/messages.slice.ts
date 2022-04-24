import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

type Message = {
  id: number;
  createdAt: string;
  message: string;
  teacherName: string;
};

interface MessagesState {
  messages: Message[];
  total: number;
}

const initialState: MessagesState = { messages: [], total: 0 };

export const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    set(state, action: PayloadAction<Message[]>) {
      state.messages = action.payload;
    },
    appendMany(state, action: PayloadAction<Message[]>) {
      state.messages = [...state.messages, ...action.payload];
    },
    setTotal(state, action: PayloadAction<number>) {
      state.total = action.payload;
    },
    unshift(state, action: PayloadAction<Message>) {
      state.messages.unshift(action.payload);
    },
  },
});

export const messagesActions = messagesSlice.actions;

export const messagesSelector = (state: RootState) => state.messages.messages;
export const messagesCountSelector = (state: RootState) =>
  state.messages.messages.length;
export const messagesTotalSelector = (state: RootState) => state.messages.total;

export default messagesSlice.reducer;
