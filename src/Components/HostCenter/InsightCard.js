import { Card } from 'antd';
import styled from 'styled-components';

const CardStyle = styled(Card)`
  width: 250px;
  height: 160px;
  margin: 30px 10px 30px 0;
`;

const InsightCard = ({
  name, unit, number,
}) => (
  <CardStyle>
    <Card.Meta title={name} description={`${number}${unit}`} />
  </CardStyle>
);

export default InsightCard;
