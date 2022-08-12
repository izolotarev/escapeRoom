import logo from 'assets/img/logo.svg';
import { AppRoute, PageName, PHONE_NUMBER, PHONE_NUMBER_LINK } from 'const/const';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectPage } from 'store/action-creators/actions';
import { getSelectedPage } from 'store/reducers/global/app-global-selectors';
import * as S from './header.styled';

const Header = () => {
  const selectedPage = useSelector(getSelectedPage);

  const dispatch = useDispatch();

  const handlePageClick = (evt) => {
    const input = evt.target;
    const page = input.textContent;

    if (page) {
      dispatch(selectPage(input.textContent));
    }
  }

  return (
    <S.StyledHeader>
      <S.HeaderWrapper>
        <S.Logo>
          <S.Image src={logo} alt="Логотип Escape Room" width="134" height="50" />
        </S.Logo>

        <S.Navigation>
          <S.Links>
            <S.LinkItem>
              <S.Link
                $isActiveLink = { selectedPage === PageName.QUESTS }
                to={AppRoute.ROOT}
                onClick={handlePageClick}
              >
                {PageName.QUESTS}
              </S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link
                $isActiveLink = { selectedPage === PageName.NEWBIES }
                to="#"
                onClick={handlePageClick}
              >
                {PageName.NEWBIES}
              </S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link
                $isActiveLink = { selectedPage === PageName.REVIEWS }
                to="#"
                onClick={handlePageClick}
              >
                {PageName.REVIEWS}
              </S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link
                $isActiveLink = { selectedPage === PageName.PROMO }
                to="#"
                onClick={handlePageClick}
              >
                {PageName.PROMO}
              </S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link
                $isActiveLink = { selectedPage === PageName.CONTACTS }
                to={AppRoute.CONTACTS}
                onClick={handlePageClick}
              >
                {PageName.CONTACTS}
              </S.Link>
            </S.LinkItem>
          </S.Links>
        </S.Navigation>
        <S.Phone href={PHONE_NUMBER_LINK}>{PHONE_NUMBER}</S.Phone>
      </S.HeaderWrapper>
    </S.StyledHeader>
  );
};

export default Header;
