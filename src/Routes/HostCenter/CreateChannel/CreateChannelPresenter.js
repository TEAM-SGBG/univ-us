import styled from 'styled-components';
import { Divider, Space } from 'antd';
import CreateChannelForm from '../../../Components/HostCenter/CreateChannel/CreateChannelForm';

const FormWrapper = styled.div`
  padding: 20px 5px;
  align-self: center;
  width: 60vh;
  
  @media screen and (min-width: 0px) {
    width: 35vh;
  }

  @media screen and (min-width: 575px) {
    width: 60vh;
  }
`;

const Title = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  letter-spacing: 0.56px;
  color: #333333;

  @media screen and (min-width: 0px) {
    font-size: 20px;
  }

  @media screen and (min-width: 575px) {
    font-size: 40px;
  }
`;

const Description = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  letter-spacing: 0.56px;

  color: #5C3FBF;
`;

const DescriptionDetail = styled.div`
  background: #FAF8FF;
  border: 0;
  padding: 26px;
`;

const CreateChannelPresenter = () => (
  <FormWrapper>
    <div style={{ marginBottom: '16px' }}>
      <Space>
        <Title>채널 개설하기</Title>
        <Description>채널이란?</Description>
      </Space>
    </div>
    <DescriptionDetail>
      <span>☝</span>
      <span style={{ letterSpacing: '0.3px' }}>
        유니버스 채널을 통해 행사를 주최하는 개인 또는 조직이 아닌,
        호스트라는 독립적인 정체성을 가지고 브랜딩할 수 있어요.
        내 채널에 관심 있는 참가자들을 팬덤화해서 관리해보세요.
      </span>
    </DescriptionDetail>
    <Divider />
    <CreateChannelForm />
  </FormWrapper>

);

export default CreateChannelPresenter;
