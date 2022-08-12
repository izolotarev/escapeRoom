import { levelFromServer, questTypeFromServer } from 'const/const';

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
  return questTypeFromServer[type];
}

const adaptLevelToClient = (level) => {
  return levelFromServer[level];
}

const adaptPeopleCountToClient = (peopleCount) => {
  return`${peopleCount[0]}-${peopleCount[1]} чел`;
}
