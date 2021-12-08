import {
  Button, DatePicker,
  Form, Input, Select, Upload,
  message,
} from 'antd';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import locale from 'antd/es/date-picker/locale/ko_KR';
import ImgCrop from 'antd-img-crop';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { CREATE_MY_EVENT_REQUEST } from '../../../reducers/hostcenter';

const InputWrapper = styled(Input)`
  // height: 48px;
  
  :hover{
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
  height: 48px;
  background: #FAF8FF;
  border: 0;
  cursor: 'pointer';
  color: #5C3FBF;
  
  :hover{
    background: #FAF8FF;
    color: #5C3FBF;
  }
  
  :active{
    background: #FAF8FF;
    color: #5C3FBF;
  }

  :focus{
    background: #FAF8FF;
    color: #5C3FBF;
  }
`;

const rangeConfig = {
  rules: [
    {
      type: 'array',
      required: true,
      message: 'Please select time!',
    },
  ],
};

const EARLY = 1;
const REGULAR = 2;
const FAIR = 3;

const CreateEventForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const params = useParams();

  const [imageFile, setImageFile] = useState(null);

  const [eventName, setEventName] = useState({ value: '' });
  const [eventType, setEventType] = useState({});
  const [eventTime, setEventTime] = useState({ startDate: null, endDate: null });
  const [eventDescription, setEventDescription] = useState({ value: '' });

  const [validate, setValidate] = useState(false);
  const [form] = Form.useForm();

  const onUploadChange = ({ fileList }) => {
    const file = fileList[0];
    setImageFile(file);
  };

  const onUploadPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  const uploadRequest = ({ onSuccess }) => {
    onSuccess('ok');
  };

  const onFinish = () => {
    // if (validate) {
    //   setIsModalVisible(true);
    // }
    if (imageFile.type !== 'image/png') {
      message.error('이미지 파일을 업로드해주세요.');
      return;
    }

    dispatch({
      type: CREATE_MY_EVENT_REQUEST,
      data: {
        event_name: eventName.value,
        channel_id: params.channelID,
        category: eventType.valueOf(),
        description: eventDescription.value,
        created_at: eventTime.startDate,
        expired_at: eventTime.endDate,
        img_url: '',
      },
    });
    history.push('/hostcenter');
  };

  const onFinishFailed = () => {

  };

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

  const validateDescription = (description) => {
    const descriptionRegex = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]{1,50}$/;

    if (descriptionRegex.test(description)) {
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

  const onChangeEventName = (e) => {
    setEventName({ ...validateName(e.target.value), value: e.target.value });
  };

  const onChangeEventType = (value) => {
    switch (value) {
      case EARLY:
        setEventType({ value: EARLY });
        break;
      case REGULAR:
        setEventType({ value: REGULAR });
        break;
      case FAIR:
        setEventType({ value: FAIR });
        break;
      default:
        break;
    }
  };

  const onClearEventType = () => {
    setEventType({});
  };

  const onChangeEventTime = (e) => {
    if (e !== null) {
      setEventTime({
        startDate: e[0].toDate(),
        endDate: e[1].toDate(),
      });
    } else setEventTime({});
  };

  const disabledDate = (currentDate) => currentDate && currentDate.valueOf() < Date.now();

  const onChangeEventDescription = (e) => {
    setEventDescription({ ...validateDescription(e.target.value), value: e.target.value });
  };

  useEffect(() => {
    setValidate(eventType.value
        && eventTime.startDate && eventTime.endDate
        && eventName.validateStatus === 'success'
        && eventDescription.validateStatus === 'success'
        && imageFile);
  }, [eventName, eventType, eventTime, eventDescription, imageFile]);

  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 20 }}
      labelAlign="left"
      form={form}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item label="이미지">
        <ImgCrop
          rotate
          aspect={2}
          beforeCrop={(file) => (file.type === 'image/png')}
        >
          <Upload
            customRequest={uploadRequest}
            listType="picture-card"
            onChange={onUploadChange}
            onPreview={onUploadPreview}
          >
            {!imageFile && '+ Upload'}
          </Upload>
        </ImgCrop>
      </Form.Item>
      <Form.Item
        label="행사 이름"
        name="EventName"
        validateStatus={eventName.validateStatus}
        help={eventName.errorMsg}
        required
      >
        <InputWrapper
          value={eventName}
          onChange={onChangeEventName}
          placeholder="20자 이내 (한글/영문/숫자)"
          maxLength={20}
        />
      </Form.Item>
      <Form.Item
        label="행사 종류"
        name="EventType"
        validateStatus={eventType.validateStatus}
        help={eventType.errorMsg}
        required
      >
        <Select
          value={eventType}
          placeholder="행사 종류를 선택해주세요."
          allowClear
          onClear={onClearEventType}
          onChange={onChangeEventType}
        >
          <Select.Option value={EARLY}>수시 행사</Select.Option>
          <Select.Option value={REGULAR}>정시 행사</Select.Option>
          <Select.Option value={FAIR}>박람회</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item name="EventTime" label="행사시간" {...rangeConfig}>
        <DatePicker.RangePicker
          locale={locale}
          showTime
          format="YYYY-MM-DD HH:mm"
          onChange={onChangeEventTime}
          disabledDate={disabledDate}
        />
      </Form.Item>
      <Form.Item
        label="행사 정보"
        name="EventDescription"
        validateStatus={eventDescription.validateStatus}
        help={eventDescription.errorMsg}
        required
      >
        <InputWrapper
          value={eventDescription}
          onChange={onChangeEventDescription}
          placeholder="이벤트 내용을 써주세요."
          maxLength={50}
        />
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
    </Form>
  );
};

export default CreateEventForm;
