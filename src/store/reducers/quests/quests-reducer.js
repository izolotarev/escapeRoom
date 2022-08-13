import { createReducer } from '@reduxjs/toolkit';
import { Genres } from 'const/const';
import { clearQuestById, loadQuestById, loadQuests, selectGenre } from 'store/action-creators/actions';
import { adaptQuestToClient } from 'utils/utils';

export const initialState = {
  selectedGenre: Genres.ALL,
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
    })
    .addCase(loadQuestById, (state, action) => {
      state.detailedQuest = adaptQuestToClient(action.payload);
      state.isDetailedQuestLoaded = true;
    })
    .addCase(clearQuestById, (state, action) => {
      state.detailedQuest = initialState.detailedQuest;
      state.isDetailedQuestLoaded = initialState.isDetailedQuestLoaded;
    });
})

export {questsData};
