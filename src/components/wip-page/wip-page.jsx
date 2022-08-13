import { MainLayout, PageTitle, PageSubtext } from 'components/common/common';
import * as S from './wip-page.styled';

const WipPage = () => (
  <MainLayout>
    <S.Main>
      <S.ContentWrapper>
        <S.PageHeading>
          <PageTitle>Данная страница находится в разработке</PageTitle>
          <PageSubtext>квесты в Санкт-Петербурге</PageSubtext>
        </S.PageHeading>
      </S.ContentWrapper>
    </S.Main>
  </MainLayout>
);

export default WipPage;
