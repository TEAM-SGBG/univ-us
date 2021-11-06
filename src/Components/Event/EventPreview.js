import styled from 'styled-components';

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

const EventPreview = ({ eventPost }) => (
  <>
    <PopularItems>
      <img alt="items" src="img/건국대.png" height="146px" width="260px" />
      <PopularItemsDate>{eventPost.date.toLocaleDateString()}</PopularItemsDate>
      <PopularItemsName>{eventPost.title}</PopularItemsName>
    </PopularItems>
  </>
);

export default EventPreview;
