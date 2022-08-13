import { LevelFromServer, QuestTypeFromServer } from 'const/const';

export const adaptQuestToClient = (data) => {
  const adaptedItem = Object.assign(
      {},
      data,
      {
        type: adaptQuestTypeToClient(data['type']),
        level: adaptLevelToClient(data['level']),
        peopleCount: adaptPeopleCountToClient(data['peopleCount']),
      },
  );
  return adaptedItem;
};

const adaptQuestTypeToClient = (type) => {
  return QuestTypeFromServer[type];
}

const adaptLevelToClient = (level) => {
  return LevelFromServer[level];
}

const adaptPeopleCountToClient = (peopleCount) => {
  return`${peopleCount[0]}-${peopleCount[1]} чел`;
}
