import styled from 'styled-components';
import { Space } from 'antd';
import { useHistory } from 'react-router';
import useMediaQuery from '../../Hooks/useMediaQuery';

const Wrapper = styled.div`
  display: flex;
  height: 96px;
  background: #292A2B;
  border-radius: 0;
  align-items: center;
  justify-content: space-between;
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-left: 24px;
`;

const MenuWrapper = styled.div`
  display: flex;
  padding-right: 28px;
  flex-grow: 1;
  justify-content: flex-end;
`;

const ButtonWrapper = styled.button`
  height: 32px;
  padding: 0 20px;
  background: #1E1F1F;
  border-radius: 16px;
  border: none;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 32px;
  text-align: center;
  letter-spacing: 0.42px;
  color: white;
  &:hover{
    cursor: pointer;
  }
`;

const MenuTitle = styled.span`
  font-family: Roboto;
  line-height: 32px;
  color: white;
`;

const HostCenterHeader = () => {
  const isDesktop = useMediaQuery('(min-width: 960px)');
  const history = useHistory();

  const goHome = () => {
    history.push('/home');
  };

  return (
    <Wrapper>
      <LogoWrapper>
        <a href="/hostcenter">
          <img src="https://event-us.kr/Content/neweventus/image/hostcenter_logo.svg" alt="event-us-logo" />
        </a>
      </LogoWrapper>
      <MenuWrapper>
        <Space size={isDesktop ? 50 : 15}>
          <MenuTitle>
            내 채널
          </MenuTitle>
          <MenuTitle>|</MenuTitle>
          <ButtonWrapper onClick={goHome}>이벤터스 홈</ButtonWrapper>
        </Space>
      </MenuWrapper>
    </Wrapper>
  );
};

export default HostCenterHeader;
