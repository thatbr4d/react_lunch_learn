import { useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { Route, Switch, useLocation } from "react-router-dom";
import Intro from "./views/Intro";
import Navigation from "./components/Navigation";
import HideShow from "./views/HideShow";
import AddAnother from "./views/AddAnother";
import Partials from "./views/Partials";
import AddAnotherExtreme from "./views/AddAnotherExtreme";
import Typescript from "./views/Typescript";

function App() {
  const location = useLocation();

  useEffect(() => {}, [location]);

  return (
    <Container className="bg-white pb-5">
      <Row className="justify-content-center mb-5 bg-primary-100 rounded-top mt-2">
        <Col>
          <h1 className="header text-success-700 my-3">
            React Lunch and Learn
          </h1>
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
            <Route path="/typescript" component={Typescript} />
          </Switch>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
