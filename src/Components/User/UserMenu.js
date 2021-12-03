import {
  Avatar, Dropdown, Menu, Space,
} from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';

const LogoutMenuItem = styled(Menu.Item)`
    color: red
`;

const UserWrapper = styled.div`
  padding-top: 15px;
`;

const DividerWrapper = styled.hr`
  width: 70%;
  border: 0;
  border-top: 3px solid rgba(0, 0, 0, 0.06);
  border-radius: 3px;
`;

const TextWrapper = styled.p`
  padding: 0 12px;
`;

const UserMenu = () => {
  const history = useHistory();

  const { isLoggedIn } = useSelector((state) => state.user);

  const handleClick = ({ key }) => {
    if (key === 'Login') {
      history.replace({ pathname: '/login', state: { from: history.location } });
    } else if (key === 'AppliedEvents') {
      history.push('/mypage');
    } else if (key === 'InterestedEvents') {
      history.push('/mypage');
    } else if (key === 'SubscribedChannels') {
      history.push('/mypage');
    } else if (key === 'MyPage') {
      history.push('/mypage');
    } else if (key === 'Logout') {
      history.push('/hostcenter');
    }
  };

  const menu = (
    <Menu onClick={handleClick}>
      {isLoggedIn ? (
        <UserWrapper>
          <TextWrapper>원영님</TextWrapper>
          <TextWrapper>원영@konkuk.ac.kr</TextWrapper>
        </UserWrapper>
      ) : (
        <Menu.Item key="Login">
          로그인
        </Menu.Item>
      )}

      <DividerWrapper />
      <Menu.Item key="AppliedEvents">
        신청한 행사
      </Menu.Item>
      <Menu.Item key="InterestedEvents">
        관심있는 행사
      </Menu.Item>
      <Menu.Item key="SubscribedChannels">
        구독 중인 채널
      </Menu.Item>
      <Menu.Item key="MyPage">
        회원정보
      </Menu.Item>
      <DividerWrapper />
      {isLoggedIn && (
      <LogoutMenuItem key="Logout">
        <a href="http://localhost:3001/auth/logout">
          로그아웃
        </a>
      </LogoutMenuItem>
      )}
    </Menu>
  );
  return (
    <Space>
      <Avatar icon={<UserOutlined />} />
      <Dropdown overlay={menu} trigger="click">
        <DownOutlined style={{ color: 'white' }} />
      </Dropdown>
    </Space>
  );
};

export default UserMenu;
