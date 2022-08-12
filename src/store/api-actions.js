import { APIRoute, AppRoute } from 'const/const';
import { toast } from 'react-toastify';
import { addOrder, loadQuestById, loadQuests, redirectToRoute } from './action-creators/actions';


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

export const sendOrder = (order) => (dispatch, _getState, api) => (
  api.post(APIRoute.QUESTS, order)
    .then(({data}) => dispatch(addOrder(data)))
    .catch(handleError)
)

const handleError = (err) => toast.info(err.response);
