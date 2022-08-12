import { NameSpace } from '../root-reducer';

export const getOrderPostStatus = (state) => state[NameSpace.ORDERS].isPostSuccessfull;

