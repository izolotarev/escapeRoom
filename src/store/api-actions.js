import { APIRoute } from 'const/const';
import { toast } from 'react-toastify';
import { loadQuests } from './action-creators/actions';

export const fetchQuests = () => (dispatch, _getState, api) => (
  api.get(APIRoute.QUESTS)
    .then(({data}) => dispatch(loadQuests(data)))
    .catch(handleError)
);

const handleError = (err) => toast.info(err.response.data.error);
