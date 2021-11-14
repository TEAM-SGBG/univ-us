import styled from 'styled-components';

const PreviewItems = styled.div`
  margin-right: 20px;
`;

const PreviewItemsDate = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 19px;
  color: #979797;

  margin-top: 10px;
  margin-left: 5px;
`;

const PreviewItemsName = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  color: #333333;

  margin-top: 10px;
  margin-left: 5px;
`;

const PreviewItemsImage = styled.img`
  alt: "items";
  width: 260px;
  height: 146px;
`;

const EventPreview = ({ eventPost }) => (
  <>
    <PreviewItems>
      <PreviewItemsImage src={eventPost.img} />
      <PreviewItemsDate>{new Date(eventPost.date).toLocaleDateString()}</PreviewItemsDate>
      <PreviewItemsName>{eventPost.title}</PreviewItemsName>
    </PreviewItems>
  </>
);

export default EventPreview;
