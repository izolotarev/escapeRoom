import { ThemeProvider } from 'styled-components';
import {
  Switch,
  Route,
} from 'components/common/common';
import DetailedQuest from 'components/detailed-quest/detailed-quest';
import Contacts from 'components/contacts/contacts';
import Home from 'components/home/home';
import { appTheme } from './common';
import * as S from './app.styled';
import { AppRoute } from 'const/const';
import NotFound from 'components/not-found/not-found';
import { useSelector } from 'react-redux';
import { getQuestsLoadedStatus } from 'store/reducers/quests/quests-selectors';
import LoadingScreen from 'components/common/loading-screen/loading-screen';

const App = () => {
  const questsLoaded = useSelector(getQuestsLoadedStatus);

  if (!questsLoaded) {
    return (
      <LoadingScreen/>
    )
  }

  return (
    <ThemeProvider theme={appTheme}>
      <S.GlobalStyle />
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
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </ThemeProvider>
  );
};

export default App;
