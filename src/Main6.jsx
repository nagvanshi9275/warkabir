



import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Deep({ select, Arrow }) {
  return (
    <Row className="justify-content-center mt-4">
      <Col xs={12} md={6} lg={4}>

         
      <svg onClick={Arrow} xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
     </svg>






        <Card>
          <Card.Img variant="top" src={select.pic} />
          <Card.Body>
            <Card.Title>{select.name}</Card.Title>
            <Card.Text>
              {select.description}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Deep;
















