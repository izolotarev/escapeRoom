import { NameSpace } from '../root-reducer';

export const getOrderPostStatus = (state) => state[NameSpace.ORDERS].isPostSuccessfull;

export const getOrder = (state) => state[NameSpace.ORDERS].order;
