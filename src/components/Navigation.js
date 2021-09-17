import { Nav } from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

export default function Navigation({location}) {
    return (
        <Nav justify variant="tabs" defaultActiveKey={location}>
            <Nav.Item>
                <LinkContainer to="/intro">
                    <Nav.Link>Intro</Nav.Link>
                </LinkContainer> 
            </Nav.Item>
            <Nav.Item>
                <LinkContainer to="/sample">
                    <Nav.Link>Sample</Nav.Link>
                </LinkContainer>
            </Nav.Item>
        </Nav>
    )
}
