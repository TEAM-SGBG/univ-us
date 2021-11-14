import styled from 'styled-components';
import {
  Button, Dropdown, Menu, Space, Typography,
} from 'antd';
import { useCallback } from 'react';
import { MoreOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const CardWrapper = styled.div`
  margin: 10px 0;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 3px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const LeftSection = styled.div`
  padding: 35px 25px;
  justify-items: flex-start;
  flex-grow: 2;
`;

const CenterSection = styled.div`
  padding: 0 25px;
  display: flex;
  justify-content: flex-end;
  flex-grow: 2;
`;

const RightSection = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 60px;
  flex-grow: 1;
`;

const menu = (
  <Menu>
    <Menu.Item key="0">
      수정
    </Menu.Item>
    <Menu.Item key="1">
      삭제
    </Menu.Item>
  </Menu>
);

const ButtonWrapper = styled(Button)`
  background: #5C3FBF;
  border-radius: 3px;
  color: white;

  :hover{
    background: #5C3FBF;
    color: white;
  }

  :active{
    background: #5C3FBF;
    color: white;
  }

  :focus{
    background: #5C3FBF;
    color: white;
  }
`;

const HostCenterChannelCard = ({ channel }) => {
  const history = useHistory();

  const goEventCreate = useCallback(() => {
    history.push(`/hostcenter/${channel.channelID}/createevent`);
  }, []);

  return (
    <CardWrapper>
      <LeftSection>
        <Space>
          <img src={channel.avatar} alt="channel_avatar" />
          <Typography.Text
            style={{ width: 100 }}
            ellipsis
          >
            {channel.name}
          </Typography.Text>
          <Link
            style={{
              fontSize: '11px',
              color: '#A9AFB3',
            }}
            to={`${channel.channelID}/event`}
          >
            {'채널바로 가기 >'}
          </Link>
        </Space>
      </LeftSection>
      <CenterSection>
        <ButtonWrapper onClick={goEventCreate}>행사 개설</ButtonWrapper>
      </CenterSection>
      <RightSection>
        <Dropdown overlay={menu} trigger={['click']}>
          <MoreOutlined className="ant-dropdown-link" />
        </Dropdown>
      </RightSection>

    </CardWrapper>
  );
};

export default HostCenterChannelCard;
