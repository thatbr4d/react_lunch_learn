import { Col, Row, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Sample from './views/Sample';
import Intro  from './views/Intro';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col lg="auto">
            <h1 className="header">React Lunch and Learn</h1>
            <Navigation />
          </Col>
        </Row>
        <Row className="justify-content-lg-center">
            <Switch>
              <Route exact path="/" component={Intro} />
              <Route path="/intro" component={Intro} />
              <Col lg="auto">
                <Route path="/sample" component={Sample} />
              </Col>
            </Switch>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
