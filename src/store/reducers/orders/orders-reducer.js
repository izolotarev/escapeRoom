import {createReducer} from '@reduxjs/toolkit';
import { addOrder, clearPostOrderStatus } from 'store/action-creators/actions';

export const initialState = {
  isPostSuccessfull: false,
};

const ordersData = createReducer(initialState, (builder) => {
  builder.addCase(addOrder, (state, action) => {
    state.isPostSuccessfull = true;
  });
  builder.addCase(clearPostOrderStatus, (state) => {
    state.isPostSuccessfull = initialState.isPostSuccessfull;
  });
});

export {ordersData};
