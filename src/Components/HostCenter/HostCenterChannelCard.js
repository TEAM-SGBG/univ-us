import styled from 'styled-components';
import {
  Button, Dropdown, Menu, Space, Typography,
} from 'antd';
import { useState } from 'react';
import { MoreOutlined } from '@ant-design/icons';

const CardWrapper = styled.div`
  margin: 10px 0;
  border: 1px solid black;
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

const HostCenterChannelCard = ({ channel }) => {
  // eslint-disable-next-line no-unused-vars
  const [ellipsis, setEllipsis] = useState(true);

  return (
    <CardWrapper>
      <LeftSection>
        <Space>
          {channel.avatar}
          <Typography.Text
            style={{ width: 100 }}
            ellipsis
          >
            {channel.name}
          </Typography.Text>
          <a
            style={{
              fontSize: '11px',
              color: '#A9AFB3',
            }}
            href={channel.url}
          >
            {'채널바로 가기 >'}
          </a>
        </Space>
      </LeftSection>
      <CenterSection>
        <Button>행사 개설</Button>
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
