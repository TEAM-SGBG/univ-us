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
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss'; // *
import 'swiper/components/pagination/pagination.scss'; // *
import 'swiper/components/scrollbar/scrollbar.scss'; // *

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
`;

const RecommendationItems = styled.div`
  margin-right: 20px;
`;

const RecommendationItemsDate = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 19px;
  color: #979797;

  margin-top: 10px;
  margin-left: 5px;
`;

const RecommendationItemsName = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  color: #333333;
  margin-top: 10px;
  margin-left: 5px;
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
`;

const PopularItems = styled.div`
  margin-right: 20px;
`;

const PopularItemsDate = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 19px;
  color: #979797;

  margin-top: 10px;
  margin-left: 5px;
`;

const PopularItemsName = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  color: #333333;

  margin-top: 10px;
  margin-left: 5px;
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
`;

const ChannelItems = styled.div`
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
  margin:20px 20px;
  color: #8D71DD;
  border: 1px solid #8D71DD;
  box-sizing: border-box;
  border-radius: 37px;
`;

const SlideImages = [
  require('img/건국대.png'),
  require('img/건국대2.jpeg'),
  require('img/건국대3.jpeg'),
];

function HomePresenter() {
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
          Autoplay={{ delay: 1000 }}
        >
          {SlideImages.map((index) => <SwiperSlide><img alt="blabla" src={index.default} width="100%" /></SwiperSlide>)}
        </StyledSwiper>
        <MainContainer>
          <RecommendationTitle>지금, 이 행사 어때요? ✨</RecommendationTitle>
          <RecommendationDetail>에디터가 추천하는 놓쳐서 안 될 행사</RecommendationDetail>
          <RecommendationContainer>
            <RecommendationItems>
              <img alt="items" src="img/건국대.png" height="146px" width="260px" />
              <RecommendationItemsDate>10월 28일(목) 온라인</RecommendationItemsDate>
              <RecommendationItemsName>2022 건국대학교 정시 입시설명회</RecommendationItemsName>
            </RecommendationItems>
          </RecommendationContainer>
          <PopularTitle>이번 주, 모두가 주목한 행사 🖐🏻</PopularTitle>
          <PopularDetail>지금 가장 인기 있는 행사만 모았어요</PopularDetail>
          <PopularContainer>
            <PopularItems>
              <img alt="items" src="img/건국대.png" height="146px" width="260px" />
              <PopularItemsDate>10월 28일(목) 온라인</PopularItemsDate>
              <PopularItemsName>2022 건국대학교 정시 입시설명회</PopularItemsName>
            </PopularItems>
          </PopularContainer>
          <PopularTitle>따끈따끈한 신규 행사 🔥</PopularTitle>
          <PopularDetail>주목하세요! 이번주 개설된 신규 행사</PopularDetail>
          <PopularContainer>
            <PopularItems>
              <img alt="items" src="img/건국대.png" height="146px" width="260px" />
              <PopularItemsDate>10월 28일(목) 온라인</PopularItemsDate>
              <PopularItemsName>2022 건국대학교 정시 입시설명회</PopularItemsName>
            </PopularItems>
          </PopularContainer>
          <ChannelContainer>
            <ChannelContainerTitle>인기 채널</ChannelContainerTitle>
            <ChannelContainerDetail>인기있는 채널과 구독중인 채널을 바로 만나보세요!</ChannelContainerDetail>
            <ChannelItemsContainer>
              <ChannelItems>
                <ChannelImage>
                  <img alt="items" src="img/건국대.png" width="72px" height="72px" />
                </ChannelImage>
                <ChannelItemTitle>건국대학교</ChannelItemTitle>
                <ChannelItemCount>2개의 행사</ChannelItemCount>
                <SubscribeButton>
                  +구독
                </SubscribeButton>
              </ChannelItems>
            </ChannelItemsContainer>
          </ChannelContainer>
        </MainContainer>
      </Wrapper>
      <Footer />
    </>
  );
}

export default HomePresenter;
