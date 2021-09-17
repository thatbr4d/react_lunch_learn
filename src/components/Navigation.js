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
                <LinkContainer to="/hideshow">
                    <Nav.Link>Hide/Show</Nav.Link>
                </LinkContainer>
            </Nav.Item>
            <Nav.Item>
                <LinkContainer to="/addanother">
                    <Nav.Link>Add Another</Nav.Link>
                </LinkContainer>  
            </Nav.Item>
        </Nav>
    )
}
