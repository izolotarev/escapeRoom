import { PageName } from 'const/const';
import { createReducer } from '@reduxjs/toolkit';
import { selectPage } from 'store/action-creators/actions';

export const initialState = {
  selectedPage: PageName.QUESTS
}

const appGlobalData = createReducer(initialState, (builder) => {
  builder
    .addCase(selectPage, (state, action) => {
      state.selectedPage = action.payload;
    });
});

export {appGlobalData};
