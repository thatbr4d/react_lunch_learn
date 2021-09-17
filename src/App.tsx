import { useEffect } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { Route, Switch, useLocation} from 'react-router-dom';
import Sample from './views/Sample';
import Intro  from './views/Intro';
import Navigation from './components/Navigation';

function App() {
  const location = useLocation();

  useEffect(() => {
  }, [location]);

  return (
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col lg="auto">
            <h1 className="header mb-5">React Lunch and Learn</h1>
            <Navigation location={location} />
          </Col>
        </Row>
        <Row className="justify-content-lg-center">
            <Switch>
              <Route exact path="/" component={Intro} />
              <Route path="/intro" component={Intro} />
              <Route path="/sample" component={Sample} />
            </Switch>
        </Row>
      </Container>
  );
}

export default App;
