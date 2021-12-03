import { useState, useEffect } from 'react';
import {
  Form, Input, Button, Modal, Space, message,
} from 'antd';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { CREATE_MY_CHANNEL_REQUEST, URL_DUPLICATE_CHECK_REQUEST } from '../../../reducers/hostcenter';

const InputWrapper = styled(Input)`
  :hover {
    border-color: #5C3FBF;
  }

  :focus {
    border-color: #5C3FBF;
    outline: 0;
    -webkit-box-shadow: 0 0 0 2px rgba(92, 63, 191, .2);
    box-shadow: 0 0 0 2px rgba(92, 63, 191, .2);
  }
`;

const ButtonWrapper = styled(Button)`
  width: 100%;
  background: #FAF8FF;
  border: 0;
  cursor: 'pointer';
  color: #5C3FBF;

  :hover {
    background: #FAF8FF;
    color: #5C3FBF;
  }

  :active {
    background: #FAF8FF;
    color: #5C3FBF;
  }

  :focus {
    background: #FAF8FF;
    color: #5C3FBF;
  }
`;

const CreateChannelForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const {
    urlDuplicateCheckLoading,
    urlDuplicateCheckDone,
    urlDuplicateCheckError,
  } = useSelector((state) => state.hostcenter);

  const [form] = Form.useForm();

  const [channelName, setChannelName] = useState({ value: '' });
  const [channelID, setChannelID] = useState({ value: '' });
  const [validate, setValidate] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [duplicateChecked, setDuplicateChecked] = useState(false);

  const handleOk = () => {
    setIsModalVisible(false);
    dispatch({
      type: CREATE_MY_CHANNEL_REQUEST,
      data: {
        channel_id: channelID.value,
        channel_name: channelName.value,
      },
    });

    history.push(`/hostcenter/${channelID.value}/event`);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const validateName = (name) => {
    const nameRegex = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]{1,20}$/;

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

  const validateID = (id) => {
    const idRegex = /^[a-z|A-Z|0-9|]{1,20}$/;

    if (idRegex.test(id)) {
      return {
        validateStatus: 'success',
        errorMsg: null,
      };
    }

    return {
      validateStatus: 'error',
      errorMsg: '영어/숫자만 입력할 수 있습니다.',
    };
  };

  const onChangeChannelID = (e) => {
    setChannelID({ ...validateID(e.target.value), value: e.target.value });
  };

  const onChangeChannelName = (e) => {
    setChannelName({ ...validateName(e.target.value), value: e.target.value });
  };

  const onFinish = () => {
    if (validate) {
      setIsModalVisible(true);
      console.log('channel name: ', channelName.value);
    }
  };

  const onFinishFailed = () => {

  };

  const isValidate = () => {
    if (duplicateChecked) return;
    dispatch({
      type: URL_DUPLICATE_CHECK_REQUEST,
      data: {
        channel_id: channelID.value,
      },
    });
    setDuplicateChecked(true);
  };

  useEffect(() => {
    setDuplicateChecked(false);
  }, [channelID]);

  useEffect(() => {
    setValidate(channelName.validateStatus === 'success'
            && channelID.validateStatus === 'success'
            && duplicateChecked
            && urlDuplicateCheckDone);
  }, [channelName, channelID, duplicateChecked, urlDuplicateCheckDone]);

  useEffect(() => {
    if (duplicateChecked) message.error(urlDuplicateCheckError);
  }, [urlDuplicateCheckError]);

  useEffect(() => {
    if (duplicateChecked) {
      if (urlDuplicateCheckDone) return message.info('가능한 URL입니다.');
      return message.info('중복된 URL입니다.');
    }
  }, [urlDuplicateCheckDone, duplicateChecked]);

  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 20 }}
      labelAlign="left"
      form={form}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="채널 이름"
        name="ChannelName"
        validateStatus={channelName.validateStatus}
        help={channelName.errorMsg}
        required
      >
        <InputWrapper
          value={channelName}
          onChange={onChangeChannelName}
          placeholder="20자 이내 (한글/영문/숫자)"
          maxLength={20}
        />
      </Form.Item>

      <Form.Item
        style={{ display: 'flex' }}
        label="채널 ID"
        required
      >
        <Form.Item
          name="ChannelID"
          validateStatus={channelID.validateStatus}
          help={channelID.errorMsg}
          style={{ display: 'inline-block', width: '70%' }}
        >
          <InputWrapper
            value={channelID}
            onChange={onChangeChannelID}
            placeholder="20자 이내 (영문/숫자)"
            maxLength={20}
          />
        </Form.Item>
        <div style={{
          display: 'inline-block', width: '30%', height: '48px', paddingLeft: '15px',
        }}
        >
          <ButtonWrapper
            onClick={isValidate}
            loading={urlDuplicateCheckLoading}
            disabled={channelID.validateStatus !== 'success' || duplicateChecked}
          >
            {duplicateChecked && urlDuplicateCheckDone ? '✓' : '중복 확인'}
          </ButtonWrapper>
        </div>
      </Form.Item>

      <Form.Item
        wrapperCol={{ span: 24 }}
      >
        <p style={{ textAlign: 'center' }}>
          채널페이지: https://univ-us.kr
          {channelID.value ? `/${channelID.value}` : '/{채널 ID}'}
          /event
        </p>
      </Form.Item>

      <Form.Item
        wrapperCol={{ span: 8 }}
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <ButtonWrapper
          disabled={!validate}
          htmlType="submit"
        >
          개설하기
        </ButtonWrapper>
      </Form.Item>
      <Modal
        title="확인"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Space>
          {channelName.value}
          채널을 개설하시겠습니까?
        </Space>
      </Modal>
    </Form>
  );
};

export default CreateChannelForm;
