import styled from 'styled-components';
import {
  Button, Dropdown, Input, Menu, Modal, Space, Typography, message, Form,
} from 'antd';
import { useCallback, useEffect, useState } from 'react';
import { MoreOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_MY_CHANNEL_REQUEST, DELETE_MY_CHANNEL_REQUEST } from '../../reducers/hostcenter';

const MODIFY = 'Modify';
const DELETE = 'Delete';

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
  const dispatch = useDispatch();

  const [modalVisible, setModalVisible] = useState(false);
  const [newChannelName, setNewChannelName] = useState({ value: '' });
  const [modalText, setModalText] = useState('바꿀 채널명을 입력해주세요.');
  const [inputVisible, setInputVisible] = useState(false);
  const { changeMyChannelLoading, changeMyChannelDone } = useSelector((state) => state.hostcenter);

  const showModal = () => {
    setModalVisible(true);
    setInputVisible(true);
    setNewChannelName({ ...newChannelName, value: '' });
  };

  const modalHandleOk = useCallback(() => {
    if (newChannelName.validateStatus === 'success'
    && newChannelName.value !== '') {
      return dispatch({
        type: CHANGE_MY_CHANNEL_REQUEST,
        data: {
          channelID: channel.channel_id,
          newChannelName: newChannelName.value,
        },
      });
    }
    return message.error('채널명을 다시 확인해주세요');
  }, [newChannelName.value, newChannelName.errMsg]);

  const modalHandleCancel = useCallback(() => {
    setModalVisible(false);
    setInputVisible(false);
  }, []);

  const validateName = (name) => {
    const nameRegex = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9| ]{1,20}$/;

    if (nameRegex.test(name)) {
      return {
        validateStatus: 'success',
        errorMsg: null,
      };
    }

    return {
      validateStatus: 'error',
      errorMsg: '한글/영어/숫자만 입력할 수 있습니다.',
    };
  };

  const onChangeNewChannelName = (e) => {
    setNewChannelName({
      ...validateName(e.target.value),
      value: e.target.value,
    });
  };

  const goEventCreate = useCallback(() => {
    history.push(`/hostcenter/${channel.channelID}/createevent`);
  }, []);

  const handleClick = (e) => {
    if (e.key === MODIFY) {
      showModal();
    } else if (e.key === DELETE) {
      dispatch({
        type: DELETE_MY_CHANNEL_REQUEST,
        data: {
          channel_id: channel.channel_id,
        },
      });
    }
  };

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

  useEffect(() => {
    if (changeMyChannelLoading) {
      return setModalText('채널명을 바꾸는 중입니다.');
    }
    setModalText('바꿀 채널명을 입력해주세요.');
  }, [changeMyChannelLoading]);

  useEffect(() => {
    if (newChannelName.value !== '') {
      if (changeMyChannelDone) {
        setModalVisible(false);
        return message.info('채널명을 수정했습니다.');
      }
      return message.error('채널명을 바꾸지 못했습니다.');
    }
  }, [changeMyChannelDone]);

  return (
    <CardWrapper>
      <LeftSection>
        <Space>
          <img src={channel.channel_img} alt="channel_avatar" />
          <Typography.Text
            style={{ width: 150 }}
            ellipsis
          >
            {channel.channel_name}
          </Typography.Text>
          <Link
            style={{
              fontSize: '11px',
              color: '#A9AFB3',
            }}
            to={`${channel.channel_id}/event`}
          >
            {'채널바로 가기 >'}
          </Link>
        </Space>
      </LeftSection>
      <CenterSection>
        <ButtonWrapper onClick={goEventCreate}>행사 개설</ButtonWrapper>
      </CenterSection>
      <RightSection>
        <Dropdown overlay={menu} trigger={['hover']}>
          <MoreOutlined className="ant-dropdown-link" />
        </Dropdown>
      </RightSection>
      <Modal
        title="채널명 변경"
        visible={modalVisible}
        onOk={modalHandleOk}
        confirmLoading={changeMyChannelLoading}
        onCancel={modalHandleCancel}
      >
        <p>{modalText}</p>
        {inputVisible && (
        <Form>
          <Form.Item
            validateStatus={newChannelName.validateStatus}
            help={newChannelName.errorMsg}
          >
            <Input
              value={newChannelName.value}
              onChange={onChangeNewChannelName}
              placeholder="20자 이내 (한글/영문/숫자)"
              maxLength={20}
            />
          </Form.Item>
        </Form>
        ) }
      </Modal>
    </CardWrapper>
  );
};

export default HostCenterChannelCard;
