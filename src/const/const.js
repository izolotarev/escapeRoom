export const AppRoute = {
  ROOT: '/',
  QUEST: '/quest',
  CONTACTS: '/contacts',
  NOT_FOUND: '/not-found',
  NEWBIES: '/newbies',
  REVIEWS: '/reviews',
  PROMO: '/promo',
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

export const EMAIL = 'info@escape-room.ru';
export const EMAIL_LINK = 'mailto:info@escape-room.ru';

export const PHONE_NUMBER_PATTERN = '.{10,10}';
export const PHONE_NUMBER_PATTERN_TITLE = '10 characters length';

export const APIRoute = {
  QUESTS: '/quests',
  ORDERS: '/orders',
};

export const Genres = {
  ALL: 'Все квесты',
  ADVENTURES: 'Приключения',
  HORROR: 'Ужасы',
  MYSTIC: 'Мистика',
  DETECTIVE: 'Детектив',
  SCIFI: 'Sci-fi',
};

export const QuestTypeFromServer = {
  'horror' : Genres.HORROR,
  'mystic' : Genres.MYSTIC,
  'detective' : Genres.DETECTIVE,
  'adventures' : Genres.ADVENTURES,
  'sci-fi' : Genres.SCIFI,
};

export const LevelFromServer = {
  'hard':'сложный',
  'medium':'средний',
  'easy': 'простой'
};

export const INITIAL_NUMBER_OF_PEOPLE = 1;

export const ERROR_MESSAGE = 'Ошибка. Не удалось загрузить данные.'

export const MAP_ZOOM_LEVEL = 17;

export const URL_MARKER_DEFAULT = './img/pin.svg';

export const MAP_LOCATION = {
  latitude: 59.96846530770314,
  longitude: 30.317607455951382,
}
