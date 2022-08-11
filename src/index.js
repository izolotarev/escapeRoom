import { StrictMode } from 'react';
import { render } from 'react-dom';
import App from 'components/app/app';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createAPI } from 'services/api';
import {configureStore} from '@reduxjs/toolkit';
import rootReducer from 'store/reducers/root-reducer';
import { redirect } from 'store/middlewares/redirect';
import { Provider } from 'react-redux';

const api = createAPI();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      },
    }).concat(redirect)
});

render(
  <StrictMode>
    <Provider store={store}>
      <ToastContainer/>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
