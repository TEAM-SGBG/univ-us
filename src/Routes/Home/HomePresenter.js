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

const MainContainer = styled.div`
  width: 1100px;
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

// const PopularItems = styled.div`
//   margin-right: 20px;
// `;
//
// const PopularItemsDate = styled.p`
//   font-family: Roboto;
//   font-style: normal;
//   font-weight: normal;
//   font-size: 12px;
//   line-height: 19px;
//   color: #979797;
//
//   margin-top: 10px;
//   margin-left: 5px;
// `;
//
// const PopularItemsName = styled.p`
//   font-family: Roboto;
//   font-style: normal;
//   font-weight: normal;
//   font-size: 12px;
//   line-height: 20px;
//   color: #333333;
//
//   margin-top: 10px;
//   margin-left: 5px;
// `;

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

// const ChannelItems = styled.div`
//   background: #FFFFFF;
//   border: 1px solid #EBEBEB;
//   border-radius: 3px;
//   height: 270px;
//   width: 168px;
// `;

// const ChannelImage = styled.div`
//   padding: 43px 47px 0 47px;
// `;

// const ChannelItemTitle = styled.p`
//   font-family: Roboto;
//   font-style: normal;
//   font-weight: normal;
//   font-size: 15px;
//   line-height: 24px;
//   text-align: center;
//   letter-spacing: 0.56px;
//   color: #333333;
//   margin-top: 15px;
// `;

// const ChannelItemCount = styled.p`
//   font-family: Roboto;
//   font-style: normal;
//   font-weight: normal;
//   font-size: 11px;
//   line-height: 19px;
//   text-align: center;
//   letter-spacing: 0.56px;
//   color: #333333;
// `;

// const SubscribeButton = styled.button`
//   background: #ffffff;
//   padding: 2px 43px;
//   margin-top: 16px;
//   margin-left: 25px;
//   color: #8D71DD;
//   border: 1px solid #8D71DD;
//   box-sizing: border-box;
//   border-radius: 37px;
// `;

// const SubscribeButtonTxt = styled.p`
//   font-family: Roboto;
//   font-style: normal;
//   font-weight: normal;
//   font-size: 10px;
//   line-height: 33px;
//   text-align: center;
//   letter-spacing: 0.42px;
//   color: #8D71DD;
// `;

const SlideImages = [
  require('img/?????????.png'),
  require('img/?????????2.jpeg'),
  require('img/?????????3.jpeg'),
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
        <MainContainer>
          <RecommendationTitle>??????, ??? ?????? ?????????? ???</RecommendationTitle>
          <RecommendationDetail>???????????? ???????????? ????????? ??? ??? ??????</RecommendationDetail>
          <RecommendationContainer>
            {recommendationEvents.map((eventPost) => (<EventPreview eventPost={eventPost} />))}
          </RecommendationContainer>
          <PopularTitle>?????? ???, ????????? ????????? ?????? ????????</PopularTitle>
          <PopularDetail>?????? ?????? ?????? ?????? ????????? ????????????</PopularDetail>
          <PopularContainer>
            {popularEvents.map((eventPost) => (<EventPreview eventPost={eventPost} />))}
          </PopularContainer>
          <PopularTitle>??????????????? ?????? ?????? ????</PopularTitle>
          <PopularDetail>???????????????! ????????? ????????? ?????? ??????</PopularDetail>
          <PopularContainer>
            {newEvents.map((eventPost) => (<EventPreview eventPost={eventPost} />))}
          </PopularContainer>
          <ChannelContainer>
            <ChannelContainerTitle>?????? ??????</ChannelContainerTitle>
            <ChannelContainerDetail>???????????? ????????? ???????????? ????????? ?????? ???????????????!</ChannelContainerDetail>
            <ChannelItemsContainer>
              {popularChannel.map((channel) => (<ChannelPreview channel={channel} />))}
            </ChannelItemsContainer>
          </ChannelContainer>
        </MainContainer>
      </Wrapper>
      <Footer />
    </>
  );
}

export default HomePresenter;
