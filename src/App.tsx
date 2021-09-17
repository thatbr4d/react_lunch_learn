import { Carousel, Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Container fluid>
      <Row className="justify-content-md-center">
        <Col lg="auto">
          <h1 className="header">React Lunch and Learn</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
