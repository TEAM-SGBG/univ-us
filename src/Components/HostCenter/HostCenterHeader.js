import styled from 'styled-components';
import { Space } from 'antd';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
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

  const goChannel = () => {
    history.push('/hostcenter/channel');
  };

  return (
    <Wrapper>
      <LogoWrapper>
        <Link to="/hostcenter">
          <img
            src="https://event-us.kr/Content/neweventus/image/hostcenter_logo.svg"
            alt="event-us-logo"
          />
        </Link>
      </LogoWrapper>
      <MenuWrapper>
        <Space size={isDesktop ? 50 : 15}>
          <ButtonWrapper onClick={goChannel}>내 채널</ButtonWrapper>
          <MenuTitle>|</MenuTitle>
          <ButtonWrapper onClick={goHome}>유니버스 홈</ButtonWrapper>
        </Space>
      </MenuWrapper>
    </Wrapper>
  );
};

export default HostCenterHeader;
