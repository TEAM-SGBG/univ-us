import styled from 'styled-components';
import {
  Col, Row, Avatar, Image, Typography, Space, Dropdown, Menu,
} from 'antd';
import {
  EyeOutlined, HeartOutlined, HeartTwoTone, MoreOutlined,
} from '@ant-design/icons';
import { useState, useCallback } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { DELETE_MY_EVENT_REQUEST } from '../../reducers/hostcenter';

const CardStyle = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: center;
  display: flex;
  justify-self: center;
  max-width: 1100px;
  border: 1px solid #E4E4E4;
  box-sizing: border-box;

  @media screen and (min-width: 0px) {  
    width: 300px;
    display: block;
  }
  
  @media screen and (min-width: 425px) {
    width: 360px;
    display: block;
  }

  @media screen and (min-width: 768px) {
    width: 700px;
    display: flex;
  }
  
  @media screen and (min-width: 1196px) {
    width: 1100px;
    display: flex;
  }
`;

const RowWrapper = styled(Row)`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
`;

const ColWrapper = styled(Col)`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-around;
  padding: 15px;
`;

function EventCard({
  eventPost, likeDisabled = false, isMyEvent, visibleDropdownMenu = null,
}) {
  const dispatch = useDispatch();

  const [liked, setLiked] = useState(eventPost.liked);
  const history = useHistory();

  const onToggleLike = useCallback(() => {
    setLiked(((prevState) => !prevState));
  }, [liked]);

  const goEventPage = useCallback(() => {
    history.push(isMyEvent ? `/hostcenter/${eventPost.channel_id}/event/${eventPost.event_id}` : `/events/${eventPost.event_id}`);
  }, []);

  const handleClick = useCallback((e) => {
    if (e.key === 'Modify') {
      // showModal();
    } else if (e.key === 'Delete') {
      dispatch({
        type: DELETE_MY_EVENT_REQUEST,
        data: {
          event_id: eventPost.event_id,
        },
      });
    }
  }, [eventPost.event_id]);

  const menu = (
    <Menu onClick={handleClick}>
      <Menu.Item key="Modify">
        수정
      </Menu.Item>
      <Menu.Item key="Delete">
        삭제
      </Menu.Item>
    </Menu>
  );

  return (
    <CardStyle>
      <Image
        alt="example"
        src="https://dummyimage.com/360x200/000/fff"
        onClick={goEventPage}
        preview={{
          mask: null,
        }}
        style={{ cursor: 'pointer' }}
      />
      <Wrapper>
        <RowWrapper align="middle">
          <ColWrapper span={12} style={{ textAlign: 'left' }}>
            {new Date(eventPost.created_at).toLocaleDateString()}
          </ColWrapper>
          <ColWrapper span={10} style={{ textAlign: 'right' }} />
          <ColWrapper span={2}>
            {visibleDropdownMenu && (
            <Dropdown overlay={menu} trigger={['hover']}>
              <MoreOutlined className="ant-dropdown-link" />
            </Dropdown>
            )}
          </ColWrapper>
        </RowWrapper>
        <RowWrapper align="middle">
          <ColWrapper span={24} style={{ textAlign: 'left' }}>
            <Typography.Link style={{ fontSize: '16px', color: 'black' }} onClick={goEventPage}>
              {eventPost.name}
            </Typography.Link>
          </ColWrapper>
        </RowWrapper>
        <RowWrapper align="middle">
          <ColWrapper span={12} style={{ textAlign: 'left' }}>
            <Space>
              <Avatar src={eventPost.avatar} />
              {eventPost.channel_id}
            </Space>
          </ColWrapper>
          <ColWrapper span={12} style={{ textAlign: 'right' }}>
            <EyeOutlined />
            <Space>
              {eventPost.views}
              {!likeDisabled && (liked ? <HeartTwoTone onClick={onToggleLike} twoToneColor="#eb2f96" /> : <HeartOutlined onClick={onToggleLike} />)}
            </Space>
          </ColWrapper>
        </RowWrapper>
      </Wrapper>
    </CardStyle>
  );
}

export default EventCard;
