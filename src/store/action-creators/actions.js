import { createAction } from '@reduxjs/toolkit';

export const ActionType = {
  SELECT_PAGE: 'app/selectPage',
  SELECT_GENRE: 'home/selectGenre',
  LOAD_QUESTS: 'home/loadQuests',
  LOAD_QUEST_BY_ID: 'detailedQuest/loadQuestById',
  CLEAR_QUEST_BY_ID: 'detailedQuest/clearQuestById',
  POST_ORDER: 'quest/addOrder',
  REDIRECT_TO_ROUTE: `app/redirectToRoute`,
};

export const selectPage = createAction(ActionType.SELECT_PAGE, (page) => {
  return {
    payload: page,
  }
});

export const selectGenre = createAction(ActionType.SELECT_GENRE, (genre) => {
  return {
    payload: genre,
  }
});

export const addOrder = createAction(ActionType.POST_ORDER, (order) => {
  return {
    payload: order,
  }
});

export const loadQuests = createAction(ActionType.LOAD_QUESTS, (quests) => {
  return {
    payload: quests,
  }
});

export const loadQuestById = createAction(ActionType.LOAD_QUEST_BY_ID, (quest) => {
  return {
    payload: quest,
  }
})

export const clearQuestById = createAction(ActionType.CLEAR_QUEST_BY_ID);

export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => {
  return {
    payload: url,
  };
});
