import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  correctAnswers: 0,
  totalQuestions: 0, // Starts at 0 and increases as questions are attempted
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    incrementScore: (state) => {
      state.correctAnswers += 1;
    },
    incrementTotalQuestions: (state) => {
      state.totalQuestions += 1;
    },
    resetScore: (state) => {
      state.correctAnswers = 0;
      state.totalQuestions = 0;
    },
  },
});

export const { incrementScore, incrementTotalQuestions, resetScore } =
  gameSlice.actions;

// Selectors
export const selectCorrectAnswers = (state) => state.game.correctAnswers;
export const selectTotalQuestions = (state) => state.game.totalQuestions;

export default gameSlice.reducer;
