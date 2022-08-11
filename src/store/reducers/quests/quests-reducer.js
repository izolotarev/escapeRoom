import { createReducer } from '@reduxjs/toolkit';
import { genres } from 'const/const';
import { selectGenre } from 'store/action-creators/actions';

export const initialState = {
  selectedGenre: genres.ALL,
  quests: [],
  questsLoaded: false,
  detailedQuest: undefined,
  isDetailedQuestLoaded: false,
}

const questsData = createReducer(initialState, (builder) => {
  builder
    .addCase(selectGenre, (state, action) => {
      state.selectedGenre = action.payload;
    })
})

export {questsData};
