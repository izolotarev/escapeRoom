import browserHistory from "../../browser-history/browser-history";
import {ActionType} from "../action-creators/actions";

export const redirect = (_store) => (next) => (action) => {
  if (action.type === ActionType.REDIRECT_TO_ROUTE) {
    browserHistory.push(action.payload);
  }
  return next(action);
};
