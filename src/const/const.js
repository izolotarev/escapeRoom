export const AppRoute = {
  ROOT: '/',
  QUEST: '/quest',
  CONTACTS: '/contacts',
  NOT_FOUND: '/not-found',
};

export const PageName = {
  QUESTS: 'Квесты',
  NEWBIES: 'Новичкам',
  REVIEWS: 'Отзывы',
  PROMO: 'Акции',
  CONTACTS: 'Контакты',
};

export const PHONE_NUMBER = '8 (800) 333-55-99';
export const PHONE_NUMBER_LINK = 'tel:88003335599';

export const APIRoute = {
  QUESTS: '/quests',
};

export const genres = {
  ALL: 'Все квесты',
  ADVENTURES: 'Приключения',
  HORROR: 'Ужасы',
  MYSTIC: 'Мистика',
  DETECTIVE: 'Детектив',
  SCIFI: 'Sci-fi',
};

export const questTypeFromServer = {
  'horror' : genres.HORROR,
  'mystic' : genres.MYSTIC,
  'detective' : genres.DETECTIVE,
  'adventures' : genres.ADVENTURES,
  'sci-fi' : genres.SCIFI,
};

export const levelFromServer = {
  'hard':'сложный',
  'medium':'средний',
  'easy': 'простой'
};
