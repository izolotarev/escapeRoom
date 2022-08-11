import { ThemeProvider } from 'styled-components';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'components/common/common';
import DetailedQuest from 'components/detailed-quest/detailed-quest';
import Contacts from 'components/contacts/contacts';
import Home from 'components/home/home';
import { appTheme } from './common';
import * as S from './app.styled';
import { AppRoute } from 'const/const';
import NotFound from 'components/not-found/not-found';
import browserHistory from 'browser-history/browser-history';

const App = () => (
  <ThemeProvider theme={appTheme}>
    <S.GlobalStyle />
    <Router history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Home />
        </Route>
        <Route exact path={`${AppRoute.QUEST}/:id`}>
          <DetailedQuest />
        </Route>
        <Route exact path={AppRoute.CONTACTS}>
          <Contacts />
        </Route>
        <Route path={AppRoute.NOT_FOUND}>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
