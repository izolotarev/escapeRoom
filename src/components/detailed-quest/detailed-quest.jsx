import { useState } from 'react';
import { MainLayout } from 'components/common/common';
import { ReactComponent as IconClock } from 'assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { BookingModal } from './components/components';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingScreen from 'components/common/loading-screen/loading-screen';
import { fetchQuestById } from 'store/api-actions';
import { getQuest } from 'store/reducers/quests/quests-selectors';
import { clearQuestById } from 'store/action-creators/actions';
import { useCallback } from 'react';

const DetailedQuest = () => {

  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);

  const handleOpenPopupBtnClick = () => {
    setIsBookingModalOpened(true);
  };

  const handleClosePopupBtnClick = () => {
    setIsBookingModalOpened(false);
  };

  const params = useParams();
  const id = parseInt(params.id, 10);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuestById(id));
    window.scrollTo(0, 0);

    return () => {
      dispatch(clearQuestById());
    }
  }, [id])

  const quest = useSelector(getQuest);

  if (!quest) {
    return (
      <LoadingScreen/>
    );
  }

  const { coverImg, title, type, duration, peopleCount, level, description } = quest;

  return (
    <MainLayout>
      <S.Main>
        <S.PageImage
          src={`/${coverImg}`}
          alt={title}
          width="1366"
          height="768"
        />
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>{title}</S.PageTitle>
            <S.PageSubtitle>{type}</S.PageSubtitle>
          </S.PageHeading>

          <S.PageDescription>
            <S.Features>
              <S.FeaturesItem>
                <IconClock width="20" height="20" />
                <S.FeatureTitle>{duration} мин</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPerson width="19" height="24" />
                <S.FeatureTitle>
                  {peopleCount}
                </S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPuzzle width="24" height="24" />
                <S.FeatureTitle>{level}</S.FeatureTitle>
              </S.FeaturesItem>
            </S.Features>

            <S.QuestDescription>
              {description}
            </S.QuestDescription>

            <S.QuestBookingBtn onClick={handleOpenPopupBtnClick}>
              Забронировать
            </S.QuestBookingBtn>
          </S.PageDescription>
        </S.PageContentWrapper>

        {isBookingModalOpened && <BookingModal closePopupHandler={handleClosePopupBtnClick} />}
      </S.Main>
    </MainLayout>
  );
};

export default DetailedQuest;
