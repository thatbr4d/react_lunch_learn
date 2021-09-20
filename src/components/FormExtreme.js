import { Form, Row, Col } from "react-bootstrap";

export default function FormExtreme() {
    return (
        <Form>
            <Row className="mb-3">
                <Form.Group as={Col}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
            </Row>

            <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Address 2</Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Row className="mb-3">
                <Form.Group>
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                </Form.Group>

                <Form.Group>
                    <Form.Label>State</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Zip</Form.Label>
                    <Form.Control />
                </Form.Group>
            </Row>

            <Form.Group className="mb-3">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
        </Form>
    )
}
