import { NameSpace } from '../root-reducer';
import { createSelector } from 'reselect';
import { Genres } from 'const/const';


export const getSelectedGenre = (state) => state[NameSpace.QUESTS].selectedGenre;

export const getQuests = (state) => state[NameSpace.QUESTS].quests;
export const getQuestsLoadedStatus = (state) => state[NameSpace.QUESTS].questsLoaded;

export const getQuestsInSelectedGenre = createSelector(getSelectedGenre, getQuests,
  (selectedGenre, quests) => {
    if (selectedGenre === Genres.ALL) { return quests.slice() };
    return quests.slice().filter((quest) => quest.type === selectedGenre);
  }
);

export const getQuest = (state) => state[NameSpace.QUESTS].detailedQuest;
