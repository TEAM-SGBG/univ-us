import { Divider } from 'antd';
import styled from 'styled-components';
import CreateEventForm from '../../../Components/HostCenter/CreateEvent/CreateEventForm';

const FormWrapper = styled.div`
  padding: 20px 5px;
  align-self: center;
  width: 70vh;
  
  @media screen and (min-width: 0px) {
    width: 35vh;
  }

  @media screen and (min-width: 575px) {
    width: 70vh;
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

const CreateEventPresenter = () => (
  <FormWrapper>
    <div style={{ marginBottom: '16px' }}>
      <Title>행사 개설하기</Title>
      <Divider />
    </div>
    <CreateEventForm />
  </FormWrapper>
);
export default CreateEventPresenter;
