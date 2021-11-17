import styled from 'styled-components';
import {
  Button, Pagination, Skeleton, Typography,
} from 'antd';
import HostCenterChannelCard from '../../../Components/HostCenter/HostCenterChannelCard';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: center;
  height: 80vh;
  padding: 20px;
  width: 60%;
`;

const CreateChannelButton = styled(Button)`
  background: #F1F5F5;
  border: 0;
  color: #5C3FBF;
  height: 67px;

  :hover{
    background: #F1F5F5;
    color: #5C3FBF;
  }

  :active{
    background: #F1F5F5;
    color: #5C3FBF;
  }

  :focus{
    background: #F1F5F5;
    color: #5C3FBF;
  }
`;

const Title = styled(Typography.Title)`
  text-align: left;
`;

const ChannelPresenter = ({
  pageNumber, onChangePageNumber, goChannelCreate,
  loadChannelLoading,
  mainChannels,
}) => (
  <Wrapper>
    <Title level={3}>내 채널 리스트</Title>
    {
        (() => {
          if (loadChannelLoading) {
            return <Skeleton />;
          } if (mainChannels.length === 0) {
            return <div>생성된 채널이 없습니다.</div>;
          }
          return mainChannels
            .slice((pageNumber - 1) * 3, Math.min(mainChannels.length, pageNumber * 3))
            .map((channel) => <HostCenterChannelCard channel={channel} key={channel.id} />);
        })()
}
    <CreateChannelButton onClick={goChannelCreate}>
      + 채널개설
    </CreateChannelButton>
    <Pagination
      style={{ textAlign: 'center', marginBottom: '20px' }}
      total={mainChannels.length}
      onChange={onChangePageNumber}
      defaultPageSize={3}
    />
  </Wrapper>
);

export default ChannelPresenter;
