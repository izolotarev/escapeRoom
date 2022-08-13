import { ReactComponent as IconAllQuests } from 'assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from 'assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from 'assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from 'assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from 'assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from 'assets/img/icon-scifi.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './quests-catalog.styled';
import { AppRoute, Genres } from 'const/const';
import { useSelector } from 'react-redux';
import { getQuestsInSelectedGenre, getSelectedGenre } from 'store/reducers/quests/quests-selectors';
import { useDispatch } from 'react-redux';
import { selectGenre } from 'store/action-creators/actions';

const QuestsCatalog = () => {
  const selectedGenre = useSelector(getSelectedGenre);
  const dispatch = useDispatch();
  const questsInSelectedGenre = useSelector(getQuestsInSelectedGenre);

  const handleGenreClick = (evt) => {
    evt.preventDefault();
    const element = evt.target;
    const buttonElem = element.closest('button');
    if (buttonElem) {
      const spanElem = buttonElem.children[1];
      const genre = spanElem.textContent;
      if (genre) {
        dispatch(selectGenre(genre));
      }
    }
  }

  const renderGenreIcon = (genre) => {
    switch(genre) {
      case Genres.ALL:
        return <IconAllQuests />
      case Genres.ADVENTURES:
        return <IconAdventures />
      case Genres.HORROR:
        return <IconHorrors />
      case Genres.MYSTIC:
        return <IconMystic />
      case Genres.DETECTIVE:
        return <IconDetective />
      case Genres.SCIFI:
        return <IconScifi />
      default:
        return <IconAllQuests />
    }
  }

  return (
    <>
      <S.Tabs>
        {
          Object.values(Genres).map((genre) =>
            <S.TabItem key={genre} onClick={handleGenreClick}>
              <S.TabBtn
                isActive={ selectedGenre === genre }
              >
                { renderGenreIcon(genre) }
                <S.TabTitle>{genre}</S.TabTitle>
              </S.TabBtn>
            </S.TabItem>
          )
        }
      </S.Tabs>

      <S.QuestsList>
        {
          questsInSelectedGenre.slice().map(({id, previewImg, title, peopleCount, level}) =>
            <S.QuestItem key={id}>
              <S.QuestItemLink to={`${AppRoute.QUEST}/${id}`}>
                <S.Quest>
                  <S.QuestImage
                    src={previewImg}
                    width="344"
                    height="232"
                    alt={title}
                  />

                  <S.QuestContent>
                    <S.QuestTitle>{title}</S.QuestTitle>

                    <S.QuestFeatures>
                      <S.QuestFeatureItem>
                        <IconPerson />
                        {peopleCount}
                      </S.QuestFeatureItem>
                      <S.QuestFeatureItem>
                        <IconPuzzle />
                        {level}
                      </S.QuestFeatureItem>
                    </S.QuestFeatures>
                  </S.QuestContent>
                </S.Quest>
              </S.QuestItemLink>
            </S.QuestItem>
          )
        }
      </S.QuestsList>
    </>
  );
};

export default QuestsCatalog;
