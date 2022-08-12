import { levelFromServer, questTypeFromServer } from 'const/const';

export const adaptQuestToClient = (data) => {
  const adaptedItem = Object.assign(
      {},
      data,
      {
        type: adaptQuestTypeToClient(data['type']),
        level: adaptLevelToClient(data['level']),
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
