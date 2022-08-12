import { createReducer } from '@reduxjs/toolkit';
import { genres } from 'const/const';
import { loadQuests, selectGenre } from 'store/action-creators/actions';
import { adaptQuestToClient } from 'utils/utils';

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
    .addCase(loadQuests, (state, action) => {
      state.quests = action.payload.map((item) => adaptQuestToClient(item));
      state.questsLoaded = true;
    });
})

export {questsData};
