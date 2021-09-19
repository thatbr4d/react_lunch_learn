import { useEffect } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { Route, Switch, useLocation} from 'react-router-dom';
import Intro  from './views/Intro';
import Navigation from './components/Navigation';
import HideShow from './views/HideShow';
import AddAnother from './views/AddAnother';
import Partials from './views/Partials';
import AddAnotherExtreme from './views/AddAnotherExtreme';

function App() {
  const location = useLocation();

  useEffect(() => {
  }, [location]);

  return (
      <Container>
        <Row className="justify-content-center">
          <Col>
            <h1 className="header mb-5">React Lunch and Learn</h1>
            <Navigation location={location} />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="mt-3">
            <Switch>
              <Route exact path="/" component={Intro} />
              <Route path="/intro" component={Intro} />
              <Route path="/hideshow" component={HideShow} />
              <Route path="/addanother" component={AddAnother} />
              <Route path="/partials" component={Partials} />
              <Route path="/addanotherextreme" component={AddAnotherExtreme} />
            </Switch>
            </Col>
        </Row>
      </Container>
  );
}

export default App;
