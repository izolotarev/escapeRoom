import { APIRoute, AppRoute } from 'const/const';
import { toast } from 'react-toastify';
import { loadQuestById, loadQuests, redirectToRoute } from './action-creators/actions';


export const fetchQuests = () => (dispatch, _getState, api) => (
  api.get(APIRoute.QUESTS)
    .then(({data}) => dispatch(loadQuests(data)))
    .catch(handleError)
);

export const fetchQuestById = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.QUESTS}/${id}`)
    .then(({data}) => dispatch(loadQuestById(data)))
    .catch(() => dispatch(redirectToRoute(AppRoute.NOT_FOUND)))
);

const handleError = (err) => toast.info(err.response.data.error);
