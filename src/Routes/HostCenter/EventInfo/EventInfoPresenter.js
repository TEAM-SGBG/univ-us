import styled from 'styled-components';
import {
  Button, Modal,
} from 'antd';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  padding: 20px 5px;
  align-self: center;
  width: 60vw;
`;

const ImageBox = styled.div`
  width: 238px;
  height: 127px;
  border-radius: 5px;
  background: #FFFFFF;
  border: 1px solid #EAEEEF;
`;

const DDayBox = styled.div`
  width: 238px;
  height: 123px;
  border-radius: 5px;
  background: #FFFFFF;
  border: 1px solid #EAEEEF;
`;

const InfoContainer = styled.div`
  width: 873px;
  height: 270px;
  background: #FFFFFF;
  border: 1px solid #EAEEEF;
  border-radius: 5px;
  
  padding-top: 66px;
  padding-left: 36px;
`;

const Title = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0.56px;
  color: #333333;
`;

const ItemBox = styled.div`
  margin-top: 16px;
`;

const Items = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
`;

const ItemTitle = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 21px;
  letter-spacing: 0.56px;
  color: #8D8D8D;
`;

const ItemsDetail = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 21px;
  letter-spacing: 0.56px;
  color: #333333;
  margin-left: 10px;
`;

const MozipText = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 21px;
  letter-spacing: 0.56px;
  color: #444444;
`;

const BottomDiv = styled.div`
  margin-top: 32px;
`;

const ApplyBox = styled.div`
  width: 873px;
  height: 250px;
  background: #FFFFFF;
  border: 1px solid #EAEEEF;
  border-radius: 5px;
`;

const CancelBox = styled.div`
  width: 238px;
  height: 250px;
  background: #FFFFFF;
  border: 1px solid #EAEEEF;
  border-radius: 5px;
  margin-left: 16px;
`;

const StyledLink = styled(Link)`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 21px;
  margin-left: 10px;
  color: #333333;
`;

const StyledButton = styled(Button)`

`;

const EventInfoPresenter = ({
  myEventPost, showModal, isModalVisible, handleOk, handleCancel,
}) => (
  <Wrapper>
    <div style={{ display: 'flex', gap: '16px' }}>
      <div style={{
        display: 'flex', flexDirection: 'column', gap: '20px', flexGrow: 1,
      }}
      >
        <ImageBox />
        <DDayBox />
      </div>
      <InfoContainer>
        <Title>
          제목
        </Title>
        <ItemBox>
          <Items>
            <ItemTitle>일시</ItemTitle>
            <ItemsDetail>
              {new Date(myEventPost.startDate).toLocaleDateString()}
              {' '}
              -
              {' '}
              {new Date(myEventPost.endDate).toLocaleDateString()}
            </ItemsDetail>
          </Items>
          <Items>
            <ItemTitle>장소</ItemTitle>
            <ItemsDetail>{myEventPost.place}</ItemsDetail>
          </Items>
          <Items>
            <ItemTitle>링크</ItemTitle>
            <StyledLink to={`/events/${myEventPost.id}`}>이벤트 링크</StyledLink>
          </Items>
        </ItemBox>
      </InfoContainer>
    </div>
    <BottomDiv style={{ display: 'flex', justifyContent: 'space-between' }}>
      <MozipText style={{ alignSelf: 'center' }}>
        모집
      </MozipText>
      <StyledButton type="text" onClick={showModal}>참가자 리스트 확인</StyledButton>
      <Modal title="참가자 리스트" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </BottomDiv>
    <div style={{ display: 'flex', gap: '10px' }}>
      <ApplyBox />
      <CancelBox />
    </div>
  </Wrapper>
);

export default EventInfoPresenter;
