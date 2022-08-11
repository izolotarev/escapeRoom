import { MainLayout, PageTitle, PageSubtext } from 'components/common/common';
import * as S from './not-found.styled';

const NotFound = () => (
  <MainLayout>
    <S.Main>
      <S.ContentWrapper>
        <S.PageHeading>
          <PageTitle>Страница не найдена 404</PageTitle>
          <PageSubtext>квесты в Санкт-Петербурге</PageSubtext>
        </S.PageHeading>
      </S.ContentWrapper>
    </S.Main>
  </MainLayout>
);

export default NotFound;
