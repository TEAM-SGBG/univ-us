import {
  Avatar, Dropdown, Menu, Space,
} from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT_REQUEST } from '../../reducers/user';

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
  const dispatch = useDispatch();

  const { isLoggedIn } = useSelector((state) => state.user);

  // todo: props로 state넘기기, login페이지에서 로그인 성공하면 from.path로 redirect
  const handleClick = ({ key }) => {
    if (key === 'Login') {
      history.push('login');
    } else if (key === 'AppliedEvents') {
      history.push('/mypage');
    } else if (key === 'InterestedEvents') {
      history.push('/mypage');
    } else if (key === 'SubscribedChannels') {
      history.push('/mypage');
    } else if (key === 'MyPage') {
      history.push('/mypage');
    } else if (key === 'Logout') {
      dispatch({
        type: LOGOUT_REQUEST,
      });
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
      <LogoutMenuItem key="Logout">
        로그아웃
      </LogoutMenuItem>
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
