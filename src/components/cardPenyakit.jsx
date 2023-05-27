import { Col, Card } from 'react-bootstrap';
import './cardpenyakit.css';

const CardPenyakit = (props) => {
  const { imageSrc, jenisSakit } = props;

  return (
    <Col>
      <Card className='border-0 card-sakit'>
        <Card.Img variant="top" src={imageSrc} />
        <Card.Body>
          <Card.Title className='tittle'>{jenisSakit}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardPenyakit;
