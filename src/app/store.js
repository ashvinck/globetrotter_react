import { configureStore } from '@reduxjs/toolkit';
import authSliceReducer from '../features/auth/authSlice';
import gameScoreReducer from '../features/GameData/gameDataSlice';
import socketSliceReducer from '../features/mutliplayer/socketSlice';
import { api } from './api/api';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authSliceReducer,
    game: gameScoreReducer,
    socket: socketSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
  devTools: true,
});
