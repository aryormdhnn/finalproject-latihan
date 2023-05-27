import { Col, Card } from 'react-bootstrap';

const CardPenyakit = (props) => {
  const { imageSrc, jenisSakit } = props;

  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={imageSrc} />
        <Card.Title>{jenisSakit}</Card.Title>
      </Card>
    </Col>
  );
};

export default CardPenyakit;
