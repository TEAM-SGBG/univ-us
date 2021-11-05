import styled from 'styled-components';
import { Button, Typography } from 'antd';
import HostCenterHeader from '../../Components/HostCenterHeader';
import useMediaQuery from '../../Hooks/useMediaQuery';

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 470px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left center;
  background-image: linear-gradient(rgba(0,0,0,.56),rgba(0,0,0,.56)),url(https://eventusstorage.blob.core.windows.net/evs/Images/hostcenter/section1_back.jpg);
`;
const TitleSection = styled.div`
`;

const MainTitle = styled(Typography.Title)`
  text-align: center;
  margin-top: 19px;
  color: white !important;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  
  @media screen and (min-width: 360px) {
    width: 100%;
  }

  @media screen and (min-width: 720px) {
    width: 70%;
  }
`;

function HostCenterPresenter() {
  const isDesktop = useMediaQuery('(min-width: 960px)');

  return (
    <>
      <HostCenterHeader />
      <MainSection>
        <Wrapper>
          <TitleSection>
            <MainTitle level={isDesktop ? 1 : 2}>내가 원하는 행사를</MainTitle>
            <MainTitle level={isDesktop ? 1 : 2}>지금 만들어보세요.</MainTitle>
          </TitleSection>
          <Button style={{ height: '48px', minWidth: '14%' }}>지금 시작하기</Button>
        </Wrapper>

      </MainSection>
    </>
  );
}

export default HostCenterPresenter;