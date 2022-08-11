import {createReducer} from '@reduxjs/toolkit';
import { addOrder } from 'store/action-creators/actions';

export const initialState = {
  isPostSuccessfull: false,
};

const ordersData = createReducer(initialState, (builder) => {
  builder.addCase(addOrder, (state, action) => {
    state.isPostSuccessfull = true;
  });
});

export {ordersData};
