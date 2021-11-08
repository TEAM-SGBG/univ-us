import { useState } from 'react';
import { Form, Input, Button } from 'antd';
import styled from 'styled-components';
import useInput from '../../../Hooks/useInput';

const InputWrapper = styled(Input)`
  height: 48px;
`;

const ButtonWrapper = styled(Button)`
  width: 100%;
  height: 48px;
  background: #FAF8FF;
  border: 0;
  cursor: pointer;
  color: #5C3FBF;
`;

const CreateChannelForm = () => {
  const [channelName, onChangeChannelName] = useInput('');
  const [channelID, onChangeChannelID] = useInput('');
  const [form] = Form.useForm();
  const [validate, setValidate] = useState(false);
  const [duplicateCheck, setDuplicateCheck] = useState(false);
  const [duplicateCheckLoading, setDuplicateCheckLoading] = useState(false);

  const onFinish = () => {

  };

  const onFinishFailed = () => {

  };

  const isValidate = () => {
    if (duplicateCheck) return;
    setDuplicateCheckLoading(true);
    setTimeout(() => {
      setValidate(true);
      setDuplicateCheck(true);
      setDuplicateCheckLoading(false);
    }, 500);
  };

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
        required
      >
        <InputWrapper
          value={channelName}
          onChange={onChangeChannelName}
          maxLength={50}
        />
      </Form.Item>

      <Form.Item
        style={{ display: 'flex' }}
        label="채널 ID"
        name="ChannelID"
        required
      >
        <Form.Item style={{ display: 'inline-block', width: '70%' }}>
          <InputWrapper
            value={channelID}
            onChange={onChangeChannelID}
            maxLength={20}
          />
        </Form.Item>
        <div style={{
          display: 'inline-block', width: '30%', height: '48px', paddingLeft: '15px',
        }}
        >
          <ButtonWrapper
            onClick={isValidate}
            loading={duplicateCheckLoading}
          >
            {duplicateCheck ? '✓' : '중복 확인'}
          </ButtonWrapper>
        </div>
      </Form.Item>

      <Form.Item
        wrapperCol={{ span: 24 }}
      >
        <p style={{ textAlign: 'center' }}>
          채널페이지: https://univ-us.kr/
          {channelID}
          /event
        </p>
      </Form.Item>

      <Form.Item
        wrapperCol={{ span: 8 }}
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <ButtonWrapper
          disabled={!validate}
          htmltype="submit"
        >
          개설하기
        </ButtonWrapper>
      </Form.Item>
    </Form>
  );
};

export default CreateChannelForm;
