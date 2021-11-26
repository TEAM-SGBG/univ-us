import styled from 'styled-components';

const ChannelItems = styled.div`
  margin-right: 20px;
  background: #FFFFFF;
  border: 1px solid #EBEBEB;
  border-radius: 3px;
  height: 270px;
  width: 168px;
`;

const ChannelImage = styled.div`
  padding: 43px 47px 0 47px;
`;

const ChannelItemTitle = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.56px;
  color: #333333;
  margin-top: 15px;
`;

const ChannelItemCount = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.56px;
  color: #333333;
`;

const SubscribeButton = styled.button`
  background: #ffffff;
  padding: 2px 43px;
  margin-top: 16px;
  margin-left: 25px;
  color: #8D71DD;
  border: 1px solid #8D71DD;
  box-sizing: border-box;
  border-radius: 37px;
`;

const SubscribeButtonTxt = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 33px;
  text-align: center;
  letter-spacing: 0.42px;
  color: #8D71DD;
`;

const ChannelPreview = ({ channel }) => (
  <>
    <ChannelItems>
      <ChannelImage>
        <img alt="items" src="img/건국대.png" width="72px" height="72px" />
      </ChannelImage>
      <ChannelItemTitle>{channel.channel_name}</ChannelItemTitle>
      <ChannelItemCount>
        {channel.events}
        {' '}
        개의 행사
      </ChannelItemCount>
      <SubscribeButton>
        <SubscribeButtonTxt>
          + 구독
        </SubscribeButtonTxt>
      </SubscribeButton>
    </ChannelItems>
  </>
);

export default ChannelPreview;
