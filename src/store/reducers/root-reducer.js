import {combineReducers} from 'redux';
import { appGlobalData } from './global/app-global-reducer';
import { ordersData } from './orders/orders-reducer';
import { questsData } from './quests/quests-reducer';

export const NameSpace = {
  APP_GLOBAL: 'APP_GLOBAL',
  QUESTS: 'QUESTS',
  ORDERS: 'ORDERS',
};

export default combineReducers({
  [NameSpace.APP_GLOBAL]: appGlobalData,
  [NameSpace.QUESTS]: questsData,
  [NameSpace.ORDERS]: ordersData,
});
