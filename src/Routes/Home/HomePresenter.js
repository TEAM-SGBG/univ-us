/* eslint-disable global-require */
/* eslint-disable react/jsx-props-no-spreading */
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper';
import ChannelPreview from 'Components/Channel/ChannelPreview';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss'; // *
import 'swiper/components/pagination/pagination.scss'; // *
import 'swiper/components/scrollbar/scrollbar.scss';
// eslint-disable-next-line no-unused-vars
import EventPreview from '../../Components/Event/EventPreview'; // *

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]); // *

const Wrapper = styled.div`
  margin: 0 auto;
  overflow-x: hidden;
`;

const MainTopContainer = styled.div`
  padding: 48px 180px;
`;

const MainBottomContainer = styled.div`
  padding: 48px 180px;
`;

const StyledSwiper = styled(Swiper)`
  .swiper-slide {
    background: #fff;
    text-align: center;
    font-size: 18px;
    line-height: 200px;
    box-sizing: border-box;
    border: 1px solid #ccc;
  }
`;

const RecommendationTitle = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 30px;
  color: #333333;
`;

const RecommendationDetail = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 21px;
  color: #979797;
`;

const RecommendationContainer = styled.div`
  margin-top: 34px;
  display: flex;
  overflow:visible;
`;

const PopularTitle = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 30px;
  color: #333333;
  margin-top: 24px;
`;

const PopularDetail = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 21px;
  color: #979797; 
`;

const PopularContainer = styled.div`
  margin-top: 34px;
  display: flex;
`;

const ChannelContainer = styled.div`
  margin-top: 60px;
`;

const ChannelContainerTitle = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 30px;
  letter-spacing: 0.56px;
  color: #333333;
`;

const ChannelContainerDetail = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 21px;
  letter-spacing: 0.56px;
  color: #979797;
`;

const ChannelItemsContainer = styled.div`
  margin-top: 24px;
  display: flex;
`;

const BorderBox = styled.div`
  padding: 20px;
  width: 100%;
  height: 181px;
  background-color: #ebecff;
`;

const NoteImage = styled.div`

`;

const SlideImages = [
  require('img/메인배너.png'),
  require('img/메인배너2.png'),
  require('img/메인배너3.png'),
];

function HomePresenter({
  recommendationEvents,
  popularEvents,
  newEvents,
  popularChannel,
  // eslint-disable-next-line no-unused-vars
  type,
}) {
  return (
    <>
      <Header />
      <Wrapper>
        <StyledSwiper
          style={{ height: '380px' }}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop
          autoplay={{ delay: 3000 }}
        >
          {SlideImages.map((index) => (
            <SwiperSlide>
              <img alt="blabla" src={index.default} width="100%" />
            </SwiperSlide>
          ))}
        </StyledSwiper>
        <MainTopContainer>
          <RecommendationTitle>지금, 이 행사 어때요? ✨</RecommendationTitle>
          <RecommendationDetail>에디터가 추천하는 놓쳐서 안 될 행사</RecommendationDetail>
          <RecommendationContainer>
            {recommendationEvents.map((eventPost) => (
              <EventPreview
                eventPost={eventPost}
              />
            ))}
          </RecommendationContainer>
        </MainTopContainer>
        <BorderBox />
        <NoteImage>
          <img alt="blabla" src="img/note.jpg" />
        </NoteImage>
        <MainBottomContainer>
          <PopularTitle>이번 주, 모두가 주목한 행사 🖐🏻</PopularTitle>
          <PopularDetail>지금 가장 인기 있는 행사만 모았어요</PopularDetail>
          <PopularContainer>
            {popularEvents.map((eventPost) => (<EventPreview eventPost={eventPost} />))}
          </PopularContainer>
          <PopularTitle>따끈따끈한 신규 행사 🔥</PopularTitle>
          <PopularDetail>주목하세요! 이번주 개설된 신규 행사</PopularDetail>
          <PopularContainer>
            {newEvents.map((eventPost) => (<EventPreview eventPost={eventPost} />))}
          </PopularContainer>
          <ChannelContainer>
            <ChannelContainerTitle>인기 채널</ChannelContainerTitle>
            <ChannelContainerDetail>인기있는 채널과 구독중인 채널을 바로 만나보세요!</ChannelContainerDetail>
            <ChannelItemsContainer>
              {popularChannel.map((channel) => (<ChannelPreview channel={channel} />))}
            </ChannelItemsContainer>
          </ChannelContainer>
        </MainBottomContainer>

      </Wrapper>
      <Footer />
    </>
  );
}

export default HomePresenter;
