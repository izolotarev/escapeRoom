import logo from 'assets/img/logo.svg';
import { AppRoute, PageName, PHONE_NUMBER, PHONE_NUMBER_LINK } from 'const/const';
import { useSelector } from 'react-redux';
import { getSelectedPage } from 'store/reducers/global/app-global-selectors';
import * as S from './header.styled';

const Header = () => {
  const selectedPage = useSelector(getSelectedPage);


  return (
    <S.StyledHeader>
      <S.HeaderWrapper>
        <S.Logo>
          <S.Image src={logo} alt="Логотип Escape Room" width="134" height="50" />
        </S.Logo>

        <S.Navigation>
          <S.Links>
            <S.LinkItem>
              <S.Link $isActiveLink to={AppRoute.ROOT}>
                {PageName.QUESTS}
              </S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link to="#">{PageName.NEWBIES}</S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link to="#">{PageName.REVIEWS}</S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link to="#">{PageName.PROMO}</S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link to={AppRoute.CONTACTS}>{PageName.CONTACTS}</S.Link>
            </S.LinkItem>
          </S.Links>
        </S.Navigation>
        <S.Phone href={PHONE_NUMBER_LINK}>{PHONE_NUMBER}</S.Phone>
      </S.HeaderWrapper>
    </S.StyledHeader>
  );
};

export default Header;
