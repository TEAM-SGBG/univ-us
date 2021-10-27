import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 auto;
  width:1200px;
`;

const MainImageWrapper = styled.div`

`;

const MainContainer = styled.div`
  padding: 48px 60px;
`;

const RecomendationTitle = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 30px;
  color: #333333;
`;

const RecomendationDetail = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 21px;
  color: #979797;
`;

const RecomendationContainer = styled.div`
  margin-top: 34px;
`;

const RecomendationItems = styled.div`
  margin-right: 20px;
`;

const RecomendationItemsDate = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 19px;
  color: #979797;

  margin-top: 10px;
  margin-left: 5px;
`;

const RecomendationItemsName = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  color: #333333;

  margin-top: 10px;
  margin-left: 5px;
`;

function HomePresenter() {
  return (
    <Wrapper>
      <Header />
      <MainImageWrapper>
        <img alt="main img" src="img/건국대.png" />
      </MainImageWrapper>
      <MainContainer>
        <RecomendationTitle>지금, 이 행사 어때요?</RecomendationTitle>
        <RecomendationDetail>에디터가 추천하는 놓쳐서 안 될 행사 ✨</RecomendationDetail>
        <RecomendationContainer>
          <RecomendationItems>
            <img alt="items" src="img/건국대.png" height="146px" width="260px" />
            <RecomendationItemsDate>10월 28일(목) 온라인</RecomendationItemsDate>
            <RecomendationItemsName>2022 건국대학교 정시 입시설명회</RecomendationItemsName>
          </RecomendationItems>
        </RecomendationContainer>
      </MainContainer>
      <Footer />
    </Wrapper>
  );
}

export default HomePresenter;
